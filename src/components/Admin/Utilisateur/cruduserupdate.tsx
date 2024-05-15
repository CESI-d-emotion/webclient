'use client'

import React, { useState } from 'react';

export default function CrudUserUpdate({ utilisateur, onUpdate, onClose }) {
  const [formData, setFormData] = useState({
    firstName: utilisateur.firstName,
    lastName: utilisateur.lastName,
    email: utilisateur.email
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8082/api/user/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(utilisateur)
      });
      const data = await response.json();
      onUpdate(data); // Met à jour de l'utilisateur dans la liste parente
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur:', error);
    }
  };

  return (
    <div className="crud-update-form">
        <div className='update-titre'>
          <h4>Modification des données de l'utilisateur</h4>
          <button type="button" onClick={onClose} className='button-close'><i class="fa-solid fa-xmark"></i></button>
        </div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="Prénom"
                className='champ-update'
                value={utilisateur.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Nom"
                className='champ-update'
                value={utilisateur.lastName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                placeholder="Adresse mail"
                className='champ-update'
                value={utilisateur.email}
                onChange={handleChange}
            />
            <button type="submit" className='button-update'>Enregistrer les modifications</button>
        </form>
    </div>
  );
};
