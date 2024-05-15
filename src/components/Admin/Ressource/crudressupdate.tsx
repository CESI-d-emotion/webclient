'use client'

import React, { useState } from 'react'

export default function CrudRessUpdate({ ressource, onUpdate, onClose }) {
  const [formData, setFormData] = useState({
    title: ressource.title,
    content: ressource.content
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:8082/api/ressource/${ressource.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(ressource)
        }
      )
      const data = await response.json()
      onUpdate(data) // Met à jour la ressource dans la liste parente
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la ressource:', error)
    }
  }

  return (
    <div className="crud-update-form">
      <div className="update-titre">
        <h4>Modification des données de la ressource</h4>
        <button type="button" onClick={onClose} className="button-close">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titre"
          className="champ-update"
          value={ressource.title}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Description"
          className="champ-update"
          value={ressource.content}
          onChange={handleChange}
          cols="3"
          rows="3"
          required
        ></textarea>
        <button type="submit" className="button-update">
          Enregistrer les modifications
        </button>
      </form>
    </div>
  )
}
