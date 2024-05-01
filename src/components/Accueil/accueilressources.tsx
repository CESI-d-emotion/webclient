import Image from 'next/image';
import imageRessource from "@/public/ressource.jpg"
import Link from 'next/link';

export default function AccueilRessources() {
    return (
        <>
            <section className="liste double ress">
                <h1 className="container">Ressources</h1>

                <div className="container">
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
                </div>
                
            </section>
        </>
    )
}