import Image from 'next/image';
import logoMinistere from '../../public/logoMinistere.png';
import Link from 'next/link';

export default function ListeAssociations() {
    return (
        <>
            <section className="liste double">
                <h1 className="container">Associations</h1>
                <p className="container modif">Recherche parmi les 200 Associations présentes sur le site.</p>

                <div className="container">
                    <form className="search" action="">
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


                <div className="container carte-asso-ress">

                    <div className="row">

                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card">

                                <div className="carte">
                                    <Link href="Association">
                                        <div className='logo-asso'>
                                            <Image src={logoMinistere} width={150} height={20} alt="Logo Ministère" className="logoMinistere" />
                                        </div>
                                        <div className='nom-asso'>
                                            <h2>Les Restaurants du Coeur du coin de la rue</h2>
                                        </div>
                                    </Link>
                                </div>
                                
                                <div className="card-body carte-body">
                                    <p className="card-text">
                                        Insérer trois quatres lignes de la description de l'association en question pas plus.
                                    </p>
                                    <Link href="Association" className="decouvre btn btn-primary">Découvrez l'association</Link>
                                </div>

                            </div>
                        </div>

                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card">

                                <div className="carte">
                                    <Link href="Association">
                                        <div className='logo-asso'>
                                            <Image src={logoMinistere} width={150} height={20} alt="Logo Ministère" className="logoMinistere" />
                                        </div>
                                        <div className='nom-asso'>
                                            <h2>Les Restaurants du Coeur du coin de la rue</h2>
                                        </div>
                                    </Link>
                                </div>
                                
                                <div className="card-body carte-body">
                                    <p className="card-text">
                                        Insérer trois quatres lignes de la description de l'association en question pas plus.
                                    </p>
                                    <Link href="Association" className="decouvre btn btn-primary">Découvrez l'association</Link>
                                </div>

                            </div>
                        </div>

                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card">

                                <div className="carte">
                                    <Link href="Association">
                                        <div className='logo-asso'>
                                            <Image src={logoMinistere} width={150} height={20} alt="Logo Ministère" className="logoMinistere" />
                                        </div>
                                        <div className='nom-asso'>
                                            <h2>Les Restaurants du Coeur du coin de la rue</h2>
                                        </div>
                                    </Link>
                                </div>
                                
                                <div className="card-body carte-body">
                                    <p className="card-text">
                                        Insérer trois quatres lignes de la description de l'association en question pas plus.
                                    </p>
                                    <Link href="Association" className="decouvre btn btn-primary">Découvrez l'association</Link>
                                </div>

                            </div>
                        </div>

                        <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card">

                                <div className="carte">
                                    <Link href="Association">
                                        <div className='logo-asso'>
                                            <Image src={logoMinistere} width={150} height={20} alt="Logo Ministère" className="logoMinistere" />
                                        </div>
                                        <div className='nom-asso'>
                                            <h2>Les Restaurants du Coeur du coin de la rue</h2>
                                        </div>
                                    </Link>
                                </div>
                                
                                <div className="card-body carte-body">
                                    <p className="card-text">
                                        Insérer trois quatres lignes de la description de l'association en question pas plus.
                                    </p>
                                    <Link href="Association" className="decouvre btn btn-primary">Découvrez l'association</Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                
            </section>
        </>
    )
}