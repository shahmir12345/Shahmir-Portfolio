import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className="num">{String(index + 1).padStart(2, "0")}</span>
        <span className="num">{project.year}</span>
        <span className="tag-note">{project.kind}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="chips">
        {project.tags.map((t) => (
          <span className="chip" key={t}>{t}</span>
        ))}
      </div>

      <div className="card-links">
        {project.github ? (
          <a className="card-link" href={project.github} target="_blank" rel="noopener noreferrer">
            View on GitHub →
          </a>
        ) : (
          <span className="card-link off">Not on GitHub yet</span>
        )}

        {/* Live Demo only shows if you filled the `live` link in projects.ts */}
        {project.live && (
          <a className="card-link live" href={project.live} target="_blank" rel="noopener noreferrer">
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}
