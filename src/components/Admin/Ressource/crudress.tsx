'use client'

import CrudRessUpdate from '@/components/Admin/Ressource/crudressupdate'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function CrudAdminRess() {
  const [ressources, setRessources] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [updatingRessourceId, setUpdatingRessourceId] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    fetchRessources()
  }, [])

  const fetchRessources = async () => {
    try {
      const response = await fetch('http://localhost:8082/api/ressource')
      const data = await response.json()
      setRessources(data.data)
      setIsLoading(false)
    } catch (error) {
      console.error('Erreur lors de la récupération des ressources:', error)
    }
  }

  const handleDelete = async id => {
    try {
      await fetch(`http://localhost:8082/api/ressource/${id}`, {
        method: 'DELETE'
      })
      setRessources(ressources.filter(ressource => ressource.id !== id))
    } catch (error) {
      console.error('Erreur lors de la suppression de la ressource:', error)
    }
  }

  const handleUpdate = updatedRessource => {
    setRessources(
      ressources.map(ressource =>
        ressource.id === updatedRessource.id ? updatedRessource : ressource
      )
    )
    setUpdatingRessourceId(null)
  }

  const handleCloseUpdateForm = () => {
    setUpdatingRessourceId(null)
  }

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen) // Inverse l'état actuel de isPopupOpen
  }

  if (isLoading) {
    return <div>Chargement de la liste des ressources...</div>
  }

  return (
    <div>
      <section className="crud-complet">
        <div className="crud crud-complet container">
          <div className="titre-partie">
            <h1>Liste des ressources</h1>
            <button type="button" className="add" onClick={handleOpenPopup}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          {isPopupOpen && (
            <div className="form form-crud">
              <h2>Ajouter une ressource</h2>
              <form action="" method="post">
                <div className="form-group">
                  <label htmlFor="title">Titre de la ressource *</label>
                  <input
                    type="text"
                    title="title"
                    name="title"
                    className="input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description *</label>
                  <textarea
                    title="description"
                    name="description"
                    cols="4"
                    rows="2"
                    className="textarea"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Ajouter la ressource</button>
              </form>
            </div>
          )}

          {ressources.length === 0 ? (
            <p>Aucune ressource</p>
          ) : (
            <ul className="liste-ress">
              {ressources.map(ressource => (
                <li key={ressource.id}>
                  <div className="ressource">
                    <div>
                      <p>
                        <strong>Titre :</strong> {ressource.title}
                      </p>
                      <p>
                        <strong>Description :</strong> {ressource.content}
                      </p>
                    </div>
                    <div className="button">
                      <button
                        onClick={() => setUpdatingRessourceId(ressource.id)}
                        className="modif"
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button onClick={() => handleDelete(ressource.id)}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    {updatingRessourceId === ressource.id && (
                      <CrudRessUpdate
                        ressource={ressource}
                        onUpdate={handleUpdate}
                        onClose={handleCloseUpdateForm}
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  )
}
