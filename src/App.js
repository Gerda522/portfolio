import "./App.css";
import Forside from "./pages/Forside";
import OmGerda from "./pages/OmGerda";
import Projekter from "./pages/Projekter";
import Kompetencer from "./pages/Kompetencer";
import Kontakt from "./pages/Kontakt";
import Navigate from "./pages/Forside";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProjekterPost from "./pages/ProjekterPost";
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />;

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/OmGerda" element={<OmGerda />} />
        <Route path="/posts" element={<Projekter />} />
        <Route path="/posts/:slug" element={<ProjekterPost />} />
        <Route path="/:slug" element={<ProjekterPost />} />
        <Route path="Kompetencer" element={<Kompetencer />} />
        <Route path="Kontakt" element={<Kontakt />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
