'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import Image from "next/image"
import imageRessource from "@/public/ressource.jpg"
import logoMinistere from '@/public/logoMinistere.png';
import Link from "next/link";

export default function MonAssociation() {
    // State pour gérer l'onglet actif
    const [activeTab, setActiveTab] = useState('London');

    // Affichage seulement de l'onglet actif
    useEffect(() => {
        document.getElementById("defaultOpen").click();
    }, []);

    // Fonction pour ouvrir un onglet
    function openCity(event, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        event.currentTarget.className += " active";
        setActiveTab(cityName); // Met à jour l'état de l'onglet actif
    }

    return (
        <>
            <section className='myassociation'>
                <div className="container">
                    <div className="titreasso">
                        <Image src={logoMinistere} width={300} height={50} alt="Logo Ministère" className="imageasso" />
                        <h2>Mon association</h2>
                    </div>

                    <div className="association">
                        <button className={`tablinks ${activeTab === 'Presentation' ? 'active' : ''}`} onClick={(event) => openCity(event, 'Presentation')} id="defaultOpen">Presentation</button>
                        <button className={`tablinks ${activeTab === 'Ressources' ? 'active' : ''}`} onClick={(event) => openCity(event, 'Ressources')}>Ressources</button>
                        <button className={`tablinks ${activeTab === 'Informations' ? 'active' : ''}`} onClick={(event) => openCity(event, 'Informations')}>Informations</button>
                    </div>

                    <div className="infoasso">
                        <div id="Presentation" className="tabcontent">
                            <h3>Presentation</h3>
                            <p>Sa création est liée à l’évidence d’un besoin&nbsp;: Comment donner  à des enfants placés en Maison d’Enfants à Caractère Social (M.E.C.S)  l’égalité des chances dans leur parcours scolaire. Notre Association est présente sur de nombreux établissements situés principalement à Marseille et dans les Bouches du Rhône.</p>
                            <p>Association à but non lucratif, ASCO Provence a fait siennes les valeurs suivantes&nbsp;:</p>
                            <ul>
                                <li> - La fraternité, à l’égard d’enfants en grandes difficultés</li>
                                <li> - L’importance de l’école comme correcteur d’inégalité sociale</li>
                                <li> - La laïcité</li>
                                <li> - La neutralité politique</li>
                            </ul>
                        </div>

                        <div id="Ressources" className="tabcontent">
                            <h3>Ressources</h3>
                            
                            <div className="container carte-asso-ress carte-ress">
                                <div className="row">

                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <Link href="http://">
                                            <div className="card">

                                                <div className="carte carte-ressource">
                                                        <div className='image-ressource'>
                                                            <Image src={imageRessource} width={150} height={20} alt="Logo Ministère" className="imageRessource" />
                                                        </div>
                                                </div>
                                                
                                                <div className="card-body carte-body">
                                                    <p className="card-text">
                                                        Insérer les deux premières lignes du titre au maximum pas plus.
                                                    </p>
                                                    <p className="card-info">
                                                        Publiée le 5 janvier 2023 par <Link href="#">Mon Association</Link>
                                                    </p>
                                                </div>

                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <Link href="http://">
                                            <div className="card">

                                                <div className="carte carte-ressource">
                                                        <div className='image-ressource'>
                                                            <Image src={imageRessource} width={150} height={20} alt="Logo Ministère" className="imageRessource" />
                                                        </div>
                                                </div>
                                                
                                                <div className="card-body carte-body">
                                                    <p className="card-text">
                                                        Insérer les deux premières lignes du titre au maximum pas plus.
                                                    </p>
                                                    <p className="card-info">
                                                        Publiée le 5 janvier 2023 par <Link href="#">Mon Association</Link>
                                                    </p>
                                                </div>

                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <Link href="http://">
                                            <div className="card">

                                                <div className="carte carte-ressource">
                                                        <div className='image-ressource'>
                                                            <Image src={imageRessource} width={150} height={20} alt="Logo Ministère" className="imageRessource" />
                                                        </div>
                                                </div>
                                                
                                                <div className="card-body carte-body">
                                                    <p className="card-text">
                                                        Insérer les deux premières lignes du titre au maximum pas plus.
                                                    </p>
                                                    <p className="card-info">
                                                        Publiée le 5 janvier 2023 par <Link href="#">Mon Association</Link>
                                                    </p>
                                                </div>

                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <Link href="http://">
                                            <div className="card">

                                                <div className="carte carte-ressource">
                                                        <div className='image-ressource'>
                                                            <Image src={imageRessource} width={150} height={20} alt="Logo Ministère" className="imageRessource" />
                                                        </div>
                                                </div>
                                                
                                                <div className="card-body carte-body">
                                                    <p className="card-text">
                                                        Insérer les deux premières lignes du titre au maximum pas plus.
                                                    </p>
                                                    <p className="card-info">
                                                        Publiée le 5 janvier 2023 par <Link href="#">Mon Association</Link>
                                                    </p>
                                                </div>

                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div id="Informations" className="tabcontent">
                            
                            <h3>Informations</h3>

                            <div className="container carte-asso-ress">
                                <div className="row">
                                    <div className="col col-xs-6 col-sm-6 col-md-6 col-lg-4">
                                        <div className="membre-asso">
                                            <Image src={imageRessource} alt="Person" width="96" height="96"/>
                                            John Doe
                                        </div>
                                    </div>
                                    <div className="col col-xs-6 col-sm-6 col-md-6 col-lg-4">
                                        <div className="membre-asso">
                                            <Image src={imageRessource} alt="Person" width="96" height="96"/>
                                            John Doe
                                        </div>
                                    </div>
                                    <div className="col col-xs-6 col-sm-6 col-md-6 col-lg-4">
                                        <div className="membre-asso">
                                            <Image src={imageRessource} alt="Person" width="96" height="96"/>
                                            John Doe
                                        </div>
                                    </div>
                                    <div className="col col-xs-6 col-sm-6 col-md-6 col-lg-4">
                                        <div className="membre-asso">
                                            <Image src={imageRessource} alt="Person" width="96" height="96"/>
                                            John Doe
                                        </div>
                                    </div>
                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <div className="membre-asso">
                                            <Image src={imageRessource} alt="Person" width="96" height="96"/>
                                            John Doe
                                        </div>
                                    </div>
                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <div className="membre-asso">
                                            <Image src={imageRessource} alt="Person" width="96" height="96"/>
                                            John Doe
                                        </div>
                                    </div>
                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <div className="membre-asso">
                                            <Image src={imageRessource} alt="Person" width="96" height="96"/>
                                            John Doe
                                        </div>
                                    </div>
                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <div className="membre-asso">
                                            <Image src={imageRessource} alt="Person" width="96" height="96"/>
                                            John Doe
                                        </div>
                                    </div>
                                    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                        <div className="membre-asso">
                                            <Image src={imageRessource} alt="Person" width="96" height="96"/>
                                            John Doe
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
