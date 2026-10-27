import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./Icons";

// The GitHub + LinkedIn icon buttons, reused on Home and Contact pages
export default function Socials() {
  return (
    <div className="socials">
      <a className="social" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GithubIcon />
      </a>
      <a className="social" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedinIcon />
      </a>
    </div>
  );
}
