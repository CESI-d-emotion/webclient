import Image from 'next/image'

export default function AjoutRessource() {
  return (
    <>
      <section className="formulaire">
        <div className="container">
          <div className="form">
            <h2>Ajouter une ressource</h2>
            <p className="infoform">
              Les champs précédés d'une étoile (*) sont obligatoires.
            </p>

            <form action="" method="post">
              <div className="form-group">
                <label htmlFor="title">Titre de la ressource *</label>
                <input
                  type="text"
                  title="title"
                  name="title"
                  className="input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="iamge">Image *</label>
                <input
                  type="file"
                  title="image"
                  name="image"
                  className="input file"
                  accept="image/png, image/jpg, image/jpeg"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea
                  title="description"
                  name="description"
                  cols="20"
                  rows="7"
                  className="textarea"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Ajouter ma ressource
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
