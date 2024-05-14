// Appel des fichiers de styles
import '@/styles/bootstrap.min.css'
import '@/styles/globals.css'

import Link from 'next/link'

export default function ConnecterUser() {
  return (
    <>
      <section className="formulaire">
        <div className="container">
          <div className="form">
            <h2>Se connecter</h2>
            <p className="infoform">
              Les champs précédés d'une étoile (*) sont obligatoires.
            </p>

            <form action="" method="post">
              <div className="form-group">
                <label htmlFor="email">Adresse email *</label>
                <input
                  type="email"
                  title="email"
                  name="email"
                  className="input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe *</label>
                <input
                  type="password"
                  title="password"
                  name="password"
                  className="input"
                  required
                />
                <p className="infoform complform">
                  Vous avez oublié votre mot de passe ?{' '}
                  <Link href="">Réinitialiez-le.</Link>
                </p>
              </div>
              <div className="form-group condition">
                <div className="conditon">
                  <input
                    type="checkbox"
                    title="condition"
                    name="condition"
                    className="checkbox-field"
                    required
                  />
                  Se souvenir de moi.
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Se connecter
              </button>
            </form>

            <p className="infoform complform">
              Vous n'avez pas encore de compte ?
            </p>
            <Link href="InscrireUser">Créer mon compte.</Link>
          </div>
        </div>
      </section>
    </>
  )
}
