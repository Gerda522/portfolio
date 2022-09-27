import Parallax from "react-rellax";
import webudviklingikon from "../pages/images/webudviklingikon.PNG";
import webdesignikon from "../pages/images/webdesignikon.PNG";
import adobeikon from "../pages/images/adobeikon.PNG";

export default function Kompetencer() {
  return (
    <section className="kompetencer">
      <Parallax speed={2}>
        <h1>Kompetencer</h1>
        <section className="kompetencerboks">
          <section className="kompetencerboks1">
            <img alt="Webudvikling ikon" src={webudviklingikon}></img>
            <h2>Webudvikling</h2>
            <p>
              Jeg har igennem mit studie lært at bruge forskellige
              programmeringssprog som HTML5, CSS3, JavaScript og React.{" "}
            </p>
          </section>

          <section className="kompetencerboks2">
            <img alt="Adobe ikon" src={adobeikon}></img>
            <h2>Adobe</h2>
            <p>
              Jeg er meget detaljeorienteret og har ret godt kendskab til Adobe
              programmer som Adobe photoshop, illustrator, InDesign, After
              effects, Premiere Pro og Animate.
            </p>
          </section>
          <section className="kompetencerboks3">
            <img alt="Webdesign ikon" src={webdesignikon}></img>
            <h2>Webdesign</h2>
            <p>
              Jeg har erfaring med at designe brugervenlige og responsive
              websider, der hænger sammen med virksomhedens behov.
            </p>
          </section>
        </section>
      </Parallax>
    </section>
  );
}
