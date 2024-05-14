import Link from 'next/link';

import { parseISO, format } from 'date-fns';
import { ressourcesliste } from '@/donnees/ressources';
import { associationliste } from '@/donnees/associations';

export default function AccueilRessources() {
  return (
    <>
      <section className="liste double ress">
        <h1 className="container">Ressources</h1>

        <div className="container">
          <div className="container carte-asso-ress carte-ress">
            <div className="row">
                            {ressourcesliste
                                .map((ressource) =>
                                (
                <>
                  <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                      <div className="carte carte-ressource">
                                                    <Link href={`/Ressource?id=${ressource.id}`} className='lien-ressource'>
                                                        <div className='image-ressource'>
                                                            <img src={ressource.image} width={150} height={20} alt={`${ressource.titre} cover`} className="imageRessource"/>
                          </div>
                        </Link>
                      </div>

                      <div className="card-body carte-body">
                        <Link href="Ressource" className="card-text">
                          <p>{ressource.titre}</p>
                        </Link>
                        <p className="card-info">
                                                        {ressource.createdAt  == ressource.updatedAt &&
                            <time dateTime={ressource.createdAt}>
                              Publiée le
                                                                {format(parseISO(ressource.createdAt), ' dd MM yyyy à HH:mm ')}
                            </time>
                                                        }
                                                        {ressource.createdAt  < ressource.updatedAt &&
                            <time dateTime={ressource.updatedAt}>
                              Mise à jour le
                                                                {format(parseISO(ressource.updatedAt), ' dd MM yyyy à HH:mm ')}
                            </time>
                                                        }  
                                                        par                                                    
                                                        {associationliste.map((association) =>
                                                            {return association.id == ressource.associationId && <Link href={`/Association?id=${association.id}`}> {association.name}</Link>}
                          )}
                                                        
                        </p>
                      </div>
                    </div>
                  </div>
                </>
                                ) 
                            )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}