import Image from 'next/image'
import Link from 'next/link'

export default function InscriptionAsso() {
  return (
    <>
      <section className="formulaire">
        <div className="container">
          <div className="form">
            <h2>Inscrire mon association</h2>
            <p className="infoform">
              Les champs précédés d'une étoile (*) sont obligatoires.
            </p>

            <form action="" method="post">
              <div className="form-group">
                <label htmlFor="nom">Nom de l'association *</label>
                <input
                  type="text"
                  title="nom"
                  name="nom"
                  className="input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="nbcerfa">Numéro de CERFA *</label>
                <input
                  type="text"
                  title="nbcerfa"
                  name="nbcerfa"
                  className="input"
                  required
                />
              </div>
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
                <label htmlFor="description">Description *</label>
                <textarea
                  title="description"
                  name="description"
                  cols="20"
                  rows="5"
                  className="textarea"
                  required
                ></textarea>
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
              </div>
              <div className="form-group">
                <label htmlFor="conf_password">
                  Confirmation du mot de passe *
                </label>
                <input
                  type="password"
                  title="conf_password"
                  name="conf_password"
                  className="input"
                  required
                />
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
                  J'ai lu et j'accepte les conditions générales d'utilisation du
                  service.
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Enregistrer mon association
              </button>
            </form>

            <p className="infoform complform">Vous avez déjà un compte ?</p>
            <Link href="ConnecterAsso">Connctez-vous.</Link>
          </div>
        </div>
      </section>
    </>
  )
}
