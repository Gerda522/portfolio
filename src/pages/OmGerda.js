import OmGerdaImg from "./images/omimg.png";
export default function OmGerda() {
  return (
    <section className="omgerda">
      <h1>Om Gerda</h1>
      <section className="omgerdaboks">
        <section className="omgerdatekst">
          <p>
            Jeg er 20 år gammel multimediedesign studerende der går på
            Erhvervsakademi Aarhus. Jeg er passioneret omkring at lave fede
            digitale løsninger til virksomheder, og vis at man kan med design og
            kode løse en masse problemer for brugere.
            <p>
              Webdesign og udvikling af hjemmesider er det jeg brænder for, og
              jeg elsker at være med fra ideudvikling til færdigt produkt. Hvis
              der opstår problemer der skal løses, så vil jeg gerne bruge al min
              energi for at de problemer er løst.
              <p>
                Derudover er jeg kreativ og elsker at udfolde mig visuelt i form
                af illustrationer, animationer og grafisk design.
              </p>
            </p>
          </p>
        </section>
        <section className="omgerdaimg">
          <img alt="om-gerda-image" src={OmGerdaImg}></img>
        </section>
      </section>
    </section>
  );
}
