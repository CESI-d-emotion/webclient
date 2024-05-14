'use client'

import { parseISO, format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { useSearchParams } from 'next/navigation'
import { ressourcesliste } from '@/donnees/ressources'
import { associationliste } from '@/donnees/associations'

import Link from 'next/link'

export default function UneRessource() {
  const paramPage = useSearchParams()
  const id_ress = paramPage.get('id')

  return (
    <>
      {ressourcesliste.map(ressource =>
        !id_ress || ressource.id === parseInt(id_ress) ? (
          <section className="bienvenue double">
            <div className="container ressource-titre">
              <div className="present myress aos-init aos-animate">
                <h1>{ressource.titre}</h1>
              </div>
              <div className="present myress aos-init aos-animate btn-favoris">
                <Link href="" className="favoris">
                  <i className="fa-regular fa-star filled"></i> Ajouter aux
                  favoris
                </Link>
              </div>
            </div>

            <div className="container ressource-info">
              <div className="present myress aos-init aos-animate">
                <div className="image-ressource">
                  <img
                    src={ressource.image}
                    width={150}
                    height={20}
                    alt={`${ressource.titre} cover`}
                    className="imageRessource"
                  />
                </div>
                <h3>Description</h3>
                <p className="description">{ressource.content}</p>
              </div>
              <div className="present myress aos-init aos-animate">
                {associationliste.map(association => {
                  return (
                    association.id == ressource.associationId && (
                      <Link href={`/Association?id=${association.id}`}>
                        <div className="association">
                          <img
                            src={association.image}
                            width={150}
                            height={20}
                            alt={`${association.name} cover`}
                            className="imageAssociation"
                          />
                          <h2>{association.name}</h2>
                        </div>
                      </Link>
                    )
                  )
                })}
                <p className="date">Date de création</p>
                <p className="donnee-date">
                  <time dateTime={ressource.createdAt}>
                    {format(parseISO(ressource.createdAt), 'EEEE d MMM yyyy', {
                      locale: fr
                    })}
                  </time>
                </p>
                <p className="date">Date de modification</p>
                <p className="donnee-date">
                  {ressource.createdAt < ressource.updatedAt && (
                    <time dateTime={ressource.updatedAt}>
                      {format(
                        parseISO(ressource.updatedAt),
                        'EEEE d MMM yyyy',
                        { locale: fr }
                      )}
                    </time>
                  )}
                  {ressource.createdAt == ressource.updatedAt && (
                    <time dateTime={ressource.updatedAt}>
                      {format(
                        parseISO(ressource.updatedAt),
                        'EEEE d MMM yyyy',
                        { locale: fr }
                      )}
                    </time>
                  )}
                </p>
              </div>
            </div>

            <div className="container ressource-commentaire"></div>
          </section>
        ) : null
      )}
    </>
  )
}
