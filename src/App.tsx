import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Evolucao from "./pages/Evolucao";
import AmbassadorHub from "./pages/AmbassadorHub";
import WeekPage from "./pages/WeekPage";
import Contact from "./pages/Contact";
import GuiaGemini from "./pages/GuiaGemini";
import DocPage from "./pages/DocPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="projetos" element={<Projects />} />
        <Route path="projetos/:slug" element={<ProjectDetail />} />
        <Route path="evolucao" element={<Evolucao />} />
        <Route path="embaixadora-estudantil-google" element={<AmbassadorHub />} />
        <Route path="embaixadora-estudantil-google/:slug" element={<WeekPage />} />
        <Route path="contato" element={<Contact />} />
        <Route path="guia-gemini" element={<GuiaGemini />} />
        <Route path="guia-gemini/docs/:slug" element={<DocPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
