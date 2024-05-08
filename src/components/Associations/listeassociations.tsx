'use client'

import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useState } from 'react';
import { associationliste } from '@/donnees/associations';

export default function ListeAssociations() {
    const [filtreAsso, setFiltreAsso] = useState (""); //Variable pour filtre Association
    
    //Récupération valeur barre de recherche
    const barreFiltreAsso = (e) => {
        let valeur = e.target.value;
        console.log(valeur);
        setFiltreAsso(valeur);
    }
    
    return (
        <>
            <section className="liste double">
                <h1 className="container">Associations</h1>
                <p className="container modif">Recherche parmi les {associationliste.length} Associations présentes sur le site.</p>

                <div className="container">
                    <form className="search" action="">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control barre-recherche" 
                                name="search" 
                                placeholder="Rechercher..."
                                onChange={barreFiltreAsso}
                            />
                            <div className="input-group-btn button-recherche">
                                <button className="btn btn-default" type="submit">
                                    <i className="fa fa-search"></i> Recherche
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container carte-asso-ress">
                    <div className="row">
                        {associationliste
                            .filter((association) => {
                                return association.name.toLowerCase().includes(filtreAsso.toLowerCase());
                            })
                            .map((association) =>
					        (
                                <>
                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <div key={association.id}>
                                            <div className="card">
                                                <div className="carte">
                                                    <Link href={`/Association?id=${association.id}`}>
                                                        <div className='logo-asso'>
                                                            <img src={association.image} width={150} height={20} alt={`${association.name} cover`} />
                                                        </div>
                                                        <div className='nom-asso'>
                                                            <h2>{association.name}</h2>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="card-body carte-body">
                                                    <p className="card-text">
                                                        {association.description.length > 80 ? `${association.description.slice(0, 80)}...` : association.description}
                                                    </p>
                                                    <Link href={`/Association?id=${association.id}`} className="decouvre btn btn-primary">Découvrez l'association</Link>
                                                </div>
                                                <div className="carte-date">
                                                    {association.createdAt  == association.updatedAt &&
                                                        <time dateTime={association.createdAt} className='date'>
                                                            Inscription le 
                                                            {format(parseISO(association.createdAt), ' EEEE d MMM yyyy à HH:mm ', {locale:fr})}
                                                        </time>
                                                    }
                                                    {association.createdAt  < association.updatedAt &&
                                                        <time dateTime={association.updatedAt} className='date'>
                                                            Mise à jour le 
                                                            {format(parseISO(association.updatedAt), ' EEEE d MMM yyyy à HH:mm ', {locale:fr})}
                                                        </time>
                                                    }  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) 
                        )}
                    </div>
                </div>                
            </section>
        </>
    )
}