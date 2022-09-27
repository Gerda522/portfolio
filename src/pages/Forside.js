import PortfolioBg from "./images/gerdaimg7.svg";
import Projekter from "../pages/Projekter";
import OmGerda from "../pages/OmGerda";
import Kompetencer from "../pages/Kompetencer";
import Kontakt from "../pages/Kontakt";
import Parallax from "react-rellax";

export default function Forside() {
  return (
    <section>
      <article className="portfoliobg">
        <img alt="Portfolio bg" src={PortfolioBg}></img>
        <section className="forsidetekst">
          <h2>Gerda Navickaite</h2>
          <p>Multimediedesigner - Passioneret omkring webdesign og kodning</p>
        </section>
      </article>

      <section>
        <Parallax speed={6}>
          <OmGerda />
          <Projekter />;
        </Parallax>
        <Parallax speed={4}>
          <Kompetencer />;
          <Kontakt />;
        </Parallax>
      </section>
    </section>
  );
}
