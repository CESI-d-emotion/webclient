import Image from 'next/image';
import imageRessource from "@/public/ressource.jpg"
import Link from 'next/link';

export default function ListeRessources() {
    return (
        <>
            <section className="liste double">
                <h1 className="container">Ressources</h1>
                <p className="container modif">Recherche parmi les 200 Ressources présentes sur le site.</p>

                <div className="container">
                    <form className="search search-ressource" action="">
                        <div className="input-group">
                            <input type="text" className="form-control barre-recherche" name="search" placeholder="Rechercher..."/>
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
                        <label htmlFor="tri" className="">Trier&nbsp;par&nbsp;:</label>
                        <select className="form-control barre-recherche barre-triage" id="tri">
                            <option value="pertinence">Pertinence</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                </div>

                <div className="container carte-asso-ress carte-ress">
                    <div className="row">

                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="carte carte-ressource">
                                    <Link href="Ressource" className='lien-ressource'>
                                        <div className='image-ressource'>
                                            <Image src={imageRessource} width={150} height={20} alt="Logo Ministère" className="imageRessource" />
                                        </div>
                                    </Link>
                                </div>
                                
                                <div className="card-body carte-body">
                                    <Link href="Ressource" className="card-text">
                                        <p>
                                            Insérer les deux premières lignes du titre au maximum pas plus.
                                        </p>
                                    </Link>
                                    <p className="card-info">
                                        Publiée le 5 janvier 2023 par <Link href="Association">Mon Association</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="carte carte-ressource">
                                    <Link href="Ressource" className='lien-ressource'>
                                        <div className='image-ressource'>
                                            <Image src={imageRessource} width={150} height={20} alt="Logo Ministère" className="imageRessource" />
                                        </div>
                                    </Link>
                                </div>
                                
                                <div className="card-body carte-body">
                                    <Link href="Ressource" className="card-text">
                                        <p>
                                            Insérer les deux premières lignes du titre au maximum pas plus.
                                        </p>
                                    </Link>
                                    <p className="card-info">
                                        Publiée le 5 janvier 2023 par <Link href="Association">Mon Association</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="carte carte-ressource">
                                    <Link href="Ressource" className='lien-ressource'>
                                        <div className='image-ressource'>
                                            <Image src={imageRessource} width={150} height={20} alt="Logo Ministère" className="imageRessource" />
                                        </div>
                                    </Link>
                                </div>
                                
                                <div className="card-body carte-body">
                                    <Link href="Ressource" className="card-text">
                                        <p>
                                            Insérer les deux premières lignes du titre au maximum pas plus.
                                        </p>
                                    </Link>
                                    <p className="card-info">
                                        Publiée le 5 janvier 2023 par <Link href="Association">Mon Association</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="carte carte-ressource">
                                    <Link href="Ressource" className='lien-ressource'>
                                        <div className='image-ressource'>
                                            <Image src={imageRessource} width={150} height={20} alt="Logo Ministère" className="imageRessource" />
                                        </div>
                                    </Link>
                                </div>
                                
                                <div className="card-body carte-body">
                                    <Link href="Ressource" className="card-text">
                                        <p>
                                            Insérer les deux premières lignes du titre au maximum pas plus.
                                        </p>
                                    </Link>
                                    <p className="card-info">
                                        Publiée le 5 janvier 2023 par <Link href="Association">Mon Association</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </section>
        </>
    )
}