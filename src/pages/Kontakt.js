import linkedinicon from "../pages/images/linkedinicon.png";

export default function Kontakt() {
  return (
    <section className="kontakt">
      <section className="kontakttekst">
        <h1>Kontakt</h1>
        <p>
          Hvis du kan bruge en som mig, så kan jeg kontaktes over telefon, gmail
          eller LinkedIn
        </p>
      </section>
      <section className="footer">
        <section className="footer-info">
          <p>Mobil: +45 91 94 41 69</p>
          <p>gerdusyte522@gmail.com</p>
        </section>
        <section className="footer-copy">
          <a
            class="kontakt-icon"
            href="https://www.linkedin.com/in/gerda-navickaite-54b574249/"
            target="noopener"
          >
            <img alt="LinkedIn icon" src={linkedinicon}></img>
          </a>
        </section>
      </section>
    </section>
  );
}
