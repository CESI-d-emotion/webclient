import Image from 'next/image';
import logoMinistere from '../../public/logoMinistere.png';
import Link from 'next/link';

export default function AccueilAssociations() {
    return (
        <>
            <section className="liste double asso">
                <h1 className="container">Associations</h1>
                
                <div className="container">
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
                                </div>
                            </div>

                        </div>
 
                    </div>
                </div>
                
            </section>
        </>
    )
}