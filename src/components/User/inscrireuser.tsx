import Image from "next/image"
import Link from "next/link"

export default function InscriptionUser() {
    return (
        <>
            <section className="formulaire">
                <div className="container">

                    <div className="form">

                        <h2>Inscription</h2>
                        <p className="infoform">Les champs précédés d'une étoile (*) sont obligatoires.</p>

                        <form action="" method="post">
                            <div className="form-group">
                                <label htmlFor="nom">Nom *</label>
                                <input type="text" title="nom" name="nom" className="input" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="prenom">Prénom *</label>
                                <input type="text" title="prenom" name="prenom" className="input" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Adresse email *</label>
                                <input type="email" title="email" name="email" className="input" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe *</label>
                                <input type="password" title="password" name="password" className="input" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="conf_password">Confirmation du mot de passe *</label>
                                <input type="password" title="conf_password" name="conf_password" className="input" required />
                            </div>
                            <div className="form-group condition">
                                <div className="conditon">
                                    <input type="checkbox" title="condition" name="condition" className="checkbox-field" required />
                                    J'ai lu et j'accepte les conditions générales d'utilisation du service.
                                </div>
                            </div>
                            <button type="submit" className="submit-btn">S'inscrire</button>
                        </form>

                        <p className="infoform complform">Vous avez déjà un compte ?</p>
                        <Link href="ConnecterUser">Connectez-vous.</Link>

                    </div>

                </div>
            </section>
        </>
    )
}

