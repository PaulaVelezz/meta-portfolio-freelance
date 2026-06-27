import Nav from "./components/site/Nav";
import { useState } from "react";
import PageLoader from "./components/loader/PageLoader.jsx";
import ScrollProgress from "./components/site/ScrollProgress";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <PageLoader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}
      <ScrollProgress />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
