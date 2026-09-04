import Nav from "./components/Nav";
import Hero from "./components/Hero";
import GeminiSection from "./components/GeminiSection";
import NotebookSection from "./components/NotebookSection";
import CanvasSection from "./components/CanvasSection";
import NotebookCanvasFlow from "./components/NotebookCanvasFlow";
import UseCases from "./components/UseCases";
import DocsBridge from "./components/DocsBridge";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <GeminiSection />
        <NotebookSection />
        <CanvasSection />
        <NotebookCanvasFlow />
        <UseCases />
        <DocsBridge />
      </main>
      <Footer />
    </>
  );
}
