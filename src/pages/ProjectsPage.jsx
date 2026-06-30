import Footer from "@/components/site/Footer";
import Nav from "@/components/site/Nav";
import { ProjectsGrid } from "@/components/site/ProjectsGrid";
import ScrollProgress from "@/components/site/ScrollProgress";

function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}

export default ProjectsPage;
