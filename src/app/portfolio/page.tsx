import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "My Portfolio | Shahmir Khan" };

// PORTFOLIO PAGE  ->  yoursite.com/portfolio
// It just loops over the list in src/data/projects.ts
export default function PortfolioPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-head">
          <h2>My Portfolio</h2>
          <p>Projects I&apos;ve built while learning and growing as a full stack developer.</p>
        </div>
        <div className="grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
