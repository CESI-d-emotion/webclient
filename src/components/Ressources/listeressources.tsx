'use client'

import Link from 'next/link'

import { parseISO, format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { useState } from 'react'
import { ressourcesliste } from '@/donnees/ressources'
import { associationliste } from '@/donnees/associations'

export default function ListeRessources() {
  const [filtreRess, setFiltreRess] = useState('') //Variable pour filtre REssources

  //Récupération valeur barre de recherche
  const barreFiltreRess = e => {
    let valeur = e.target.value
    console.log(valeur)
    setFiltreRess(valeur)
  }

  return (
    <>
      <section className="liste double">
        <h1 className="container">Ressources</h1>
        <p className="container modif">
          Recherche parmi les {ressourcesliste.length} Ressources présentes sur
          le site.
        </p>

        <div className="container">
          <form className="search search-ressource" action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control barre-recherche"
                name="search"
                placeholder="Rechercher..."
                onChange={barreFiltreRess}
              />
              <div className="input-group-btn button-recherche">
                <button className="btn btn-default" type="submit">
                  <i className="fa fa-search"></i> Recherche
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="container triage-ressource">
          <div className="form-group triage">
            <label htmlFor="tri" className="">
              Trier&nbsp;par&nbsp;:
            </label>
            <select
              className="form-control barre-recherche barre-triage"
              id="tri"
            >
              <option value="pertinence">Pertinence</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>

        <div className="container carte-asso-ress carte-ress">
          <div className="row">
            {ressourcesliste
              .filter(ressource => {
                return ressource.titre
                  .toLowerCase()
                  .includes(filtreRess.toLowerCase())
              })
              .map(ressource => (
                <>
                  <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                      <div className="carte carte-ressource">
                        <Link
                          href={`/Ressource?id=${ressource.id}`}
                          className="lien-ressource"
                        >
                          <div className="image-ressource">
                            <img
                              src={ressource.image}
                              width={150}
                              height={20}
                              alt={`${ressource.titre} cover`}
                              className="imageRessource"
                            />
                          </div>
                        </Link>
                      </div>

                      <div className="card-body carte-body">
                        <Link href="Ressource" className="card-text">
                          <p>{ressource.titre}</p>
                        </Link>
                        <p className="card-info">
                          {ressource.createdAt == ressource.updatedAt && (
                            <time
                              dateTime={ressource.createdAt}
                              className="date"
                            >
                              Publiée le
                              {format(
                                parseISO(ressource.createdAt),
                                ' EEEE d MMM yyyy à HH:mm ',
                                { locale: fr }
                              )}
                            </time>
                          )}
                          {ressource.createdAt < ressource.updatedAt && (
                            <time
                              dateTime={ressource.updatedAt}
                              className="date"
                            >
                              Mise à jour le
                              {format(
                                parseISO(ressource.updatedAt),
                                ' EEEE d MMM yyyy à HH:mm ',
                                { locale: fr }
                              )}
                            </time>
                          )}
                          par
                          {associationliste.map(association => {
                            return (
                              association.id == ressource.associationId && (
                                <Link
                                  href={`/Association?id=${association.id}`}
                                >
                                  {' '}
                                  {association.name}
                                </Link>
                              )
                            )
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
