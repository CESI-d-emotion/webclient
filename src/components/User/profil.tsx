export default function MonProfil() {
    return (
        <>
            <section className="profil">
                
                <h1 className="container">Mon profil</h1>

                <h2 className="container">Mes informations personnelles</h2>
                    <p className="container modif">Si vous souhaitez changer vos informations personnelles, il vous suffie de renseigner les champs suivants.</p>
                    <p className="container modif">Tous les champs ne sont pas obligatoires.</p>
                    <section className="container monprofil">
                        <div className="container">
                            <div className="form">
                                <form action="" method="post">
                                    <div className="form-group">
                                        <label htmlFor="nom">Nom</label>
                                        <input type="text" title="nom" name="nom" className="input" placeholder="Nom"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="prenom">Prénom</label>
                                        <input type="text" title="prenom" name="prenom" className="input" placeholder="Prénom"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Adresse email</label>
                                        <input type="email" title="email" name="email" className="input" placeholder="Adresse mail"/>
                                    </div>
                                    <button type="submit" className="submit-btn">Enregistrer mes modifications</button>
                                </form>
                            </div>
                        </div>
                    </section>

                <h2 className="container">Mon mot de passe</h2>
                    <p className="container modif">Si vous souhaitez changer votre mot de passe, il vous suffie de renseigner les champs suivants.</p>
                    <p className="container modif">Tous les champs sont obligatoires.</p>
                    <section className="container monprofil">
                        <div className="container">
                            <div className="form">
                                <form action="" method="post">
                                    <div className="form-group">
                                        <label htmlFor="passwordactu">Mot de passe actuel</label>
                                        <input type="passwordactu" title="passwordactu" name="password" className="input" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="passwordnew">Nouveau mot de passe</label>
                                        <input type="passwordnew" title="passwordnew" name="password" className="input" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="conf_password">Confirmation du nouveau mot de passe</label>
                                        <input type="password" title="conf_password" name="conf_password" className="input" required />
                                    </div>
                                    <button type="submit" className="submit-btn">Enregistrer mes modifications</button>
                                </form>
                            </div>
                        </div>
                    </section>

                <h2 className="container">Supprimer mon compte</h2>
                    <p className="container modif">Si vous souhaitez supprimer votre compte, il vous suffie de renseigner les champs suivants.</p>
                    <p className="container modif">Tous les champs sont obligatoires.</p>
                    <section className="container monprofil">
                        <div className="container">
                            <div className="form">
                                <form action="" method="post">
                                    <div className="form-group">
                                        <label htmlFor="email">Adresse email</label>
                                        <input type="email" title="email" name="email" className="input" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Mot de passe</label>
                                        <input type="password" title="password" name="password" className="input" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="conf_password">Confirmation du nouveau mot de passe</label>
                                        <input type="password" title="conf_password" name="conf_password" className="input" required />
                                    </div>
                                    <button type="submit" className="submit-btn">Supprimer mon compte</button>
                                </form>
                            </div>
                        </div>
                    </section>

            </section>
        </>
    )
}