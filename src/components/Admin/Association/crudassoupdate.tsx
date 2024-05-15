'use client'

import React, { useState } from 'react'

export default function CrudAssoUpdate({ association, onUpdate, onClose }) {
  const [formData, setFormDataA] = useState({
    name: association.name,
    email: association.email
  })

  const handleChangeA = e => {
    setFormDataA({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmitA = async e => {
    e.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:8082/api/asso/${association.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(association)
        }
      )
      const data = await response.json()
      onUpdateA(data) // Met à jour la association dans la liste parente
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la association:', error)
    }
  }

  return (
    <div className="crud-update-form">
      <div className="update-titre">
        <h4>Modification des données de l'association</h4>
        <button type="button" onClick={onClose} className="button-close">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <form onSubmit={handleSubmitA}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          className="champ-update"
          value={association.name}
          onChange={handleChangeA}
        />
        <input
          type="text"
          name="email"
          placeholder="Adresse mail"
          className="champ-update"
          value={association.email}
          onChange={handleChangeA}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Description"
          className="champ-update"
          value={association.description}
          onChange={handleChangeA}
          cols="2"
          rows="2"
          required
        ></textarea>
        <button type="submit" className="button-update">
          Enregistrer les modifications
        </button>
      </form>
    </div>
  )
}
