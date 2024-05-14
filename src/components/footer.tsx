import Image from "next/image"
import logoMinistere from "../public/logoMinistere.png"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer>
                
        <div className="container footer-top">
                    <Image src={logoMinistere} width={150} height={20} alt="Logo Ministère" className="logoMinistere" />

          <div className="liengouv">
                        <p>Un produit de la Direction Interministérielle du Numérique (DINUM).</p>
            <ul className="liengouv">
                            <li><Link className="link active" href="/">legifrance.gouv.fr</Link></li>
                            <li><Link className="link active" href="/">gouvernement.fr</Link></li>
                            <li><Link className="link active" href="/">service-public.fr</Link></li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <ul className="reglement">
                        <li><Link className="link" href="/">Mentions légales</Link></li>
                        <li><Link className="link" href="/">Conditions générales d'utilisation</Link></li>
                        <li><Link className="link" href="/">Politique de confidentialité</Link></li>
                        <li><Link className="link" href="/">Gestion des cookies</Link></li>
                        <li><Link className="link" href="/">Accessibilité : partiellement conforme</Link></li>
          </ul>
        </div>

      </footer>
    </>
  )
}