import { NavLink } from "react-router-dom";
import logo from "../pages/images/gnlogo.PNG";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export default function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header>
      <div className="navlogo">
        <NavLink to="/">
          <img alt="logoimg" src={logo}></img>
        </NavLink>
      </div>
      <nav ref={navRef}>
        <section className="navbar">
          <NavLink className="forside" onClick={showNavbar} to="/">
            Forside
          </NavLink>
          <NavLink className="Om Gerda" onClick={showNavbar} to="/OmGerda">
            Om
          </NavLink>
          <NavLink className="Projekter" onClick={showNavbar} to="/posts">
            Projekter
          </NavLink>
          <NavLink
            className="Kompetencer"
            onClick={showNavbar}
            to="/Kompetencer"
          >
            Kompetencer
          </NavLink>
          <NavLink className="Kontakt" onClick={showNavbar} to="/Kontakt">
            Kontakt
          </NavLink>
        </section>
        <button className="nav.btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
