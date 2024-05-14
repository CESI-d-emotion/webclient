'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { associationliste } from '@/donnees/associations'
import { ressourcesliste } from '@/donnees/ressources'
import { parseISO, format } from 'date-fns'

import Link from 'next/link'
import Image from 'next/image'
import imageMembre from '@/public/membres.jpg'

export default function MonAssociation() {
  const paramPage = useSearchParams()
  const id_asso = paramPage.get('id')

  // State pour gérer l'onglet actif
  const [activeTab, setActiveTab] = useState('London')

  // Affichage seulement de l'onglet actif
  useEffect(() => {
    document.getElementById('defaultOpen')?.click()
  }, [])

  // Fonction pour ouvrir un onglet
  function openCity(event, cityName) {
    var i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName('tabcontent')
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
    }
    tablinks = document.getElementsByClassName('tablinks')
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
    }
    document.getElementById(cityName).style.display = 'block'
    event.currentTarget.className += ' active'
    setActiveTab(cityName) // Met à jour l'état de l'onglet actif
  }

  return (
    <>
      {associationliste.map(association =>
        !id_asso || association.id === parseInt(id_asso) ? (
          <section className="myassociation">
            <div className="container">
              <div className="titreasso">
                <img
                  src={association.image}
                  width={300}
                  height={50}
                  alt=""
                  className="imageasso"
                />
                <h2>{association.name}</h2>
              </div>

              <div className="association">
                <button
                  className={`tablinks ${activeTab === 'Presentation' ? 'active' : ''}`}
                  onClick={event => openCity(event, 'Presentation')}
                  id="defaultOpen"
                >
                  Presentation
                </button>
                <button
                  className={`tablinks ${activeTab === 'Ressources' ? 'active' : ''}`}
                  onClick={event => openCity(event, 'Ressources')}
                >
                  Ressources
                </button>
                <button
                  className={`tablinks ${activeTab === 'Membres' ? 'active' : ''}`}
                  onClick={event => openCity(event, 'Membres')}
                >
                  Membres
                </button>
              </div>

              <div className="infoasso">
                <div id="Presentation" className="tabcontent">
                  <h3>Presentation</h3>
                  <p>{association.description}</p>
                </div>

                <div id="Ressources" className="tabcontent">
                  <div className="titre-ressource">
                    <h3>Ressources</h3>
                    <Link
                      href={`/AjouterRessource?id=${association.id}`}
                      className="addRessource"
                    >
                      <i class="fa-solid fa-plus"></i>
                    </Link>
                  </div>

                  <div className="container carte-asso-ress carte-ress">
                    <div className="row">
                      {ressourcesliste
                        .filter(ressource => {
                          return ressource.associationId == association.id
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
                                    {ressource.createdAt ==
                                      ressource.updatedAt && (
                                      <time dateTime={ressource.createdAt}>
                                        Publiée le
                                        {format(
                                          parseISO(ressource.createdAt),
                                          ' dd MM yyyy à HH:mm '
                                        )}
                                      </time>
                                    )}
                                    {ressource.createdAt <
                                      ressource.updatedAt && (
                                      <time dateTime={ressource.updatedAt}>
                                        Mise à jour le
                                        {format(
                                          parseISO(ressource.updatedAt),
                                          ' dd MM yyyy à HH:mm '
                                        )}
                                      </time>
                                    )}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                    </div>
                  </div>
                </div>

                <div id="Membres" className="tabcontent">
                  <h3>Membres</h3>

                  <div className="container carte-asso-ress">
                    <div className="row">
                      <div className="col col-xs-6 col-sm-6 col-md-6 col-lg-4">
                        <div className="membre-asso">
                          <Image
                            src={imageMembre}
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          John Doe
                        </div>
                      </div>
                      <div className="col col-xs-6 col-sm-6 col-md-6 col-lg-4">
                        <div className="membre-asso">
                          <Image
                            src={imageMembre}
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          John Doe
                        </div>
                      </div>
                      <div className="col col-xs-6 col-sm-6 col-md-6 col-lg-4">
                        <div className="membre-asso">
                          <Image
                            src={imageMembre}
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          John Doe
                        </div>
                      </div>
                      <div className="col col-xs-6 col-sm-6 col-md-6 col-lg-4">
                        <div className="membre-asso">
                          <Image
                            src={imageMembre}
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          John Doe
                        </div>
                      </div>
                      <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="membre-asso">
                          <Image
                            src={imageMembre}
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          John Doe
                        </div>
                      </div>
                      <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="membre-asso">
                          <Image
                            src={imageMembre}
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          John Doe
                        </div>
                      </div>
                      <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="membre-asso">
                          <Image
                            src={imageMembre}
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          John Doe
                        </div>
                      </div>
                      <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="membre-asso">
                          <Image
                            src={imageMembre}
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          John Doe
                        </div>
                      </div>
                      <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="membre-asso">
                          <Image
                            src={imageMembre}
                            alt="Person"
                            width="96"
                            height="96"
                          />
                          John Doe
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null
      )}
    </>
  )
}
