import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="container foot">
        <Link href="/" className="logo">
          <div className="logo-mark">{site.initials[0]}</div>
          <span className="name">{site.shortName}</span>
        </Link>

        <ul>
          <li><Link href="/">home</Link></li>
          <li><Link href="/about">about me</Link></li>
          <li><Link href="/portfolio">my portfolio</Link></li>
          <li><Link href="/contact">contact</Link></li>
          <li><a href={site.github} target="_blank" rel="noopener noreferrer">github</a></li>
          <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a></li>
        </ul>

        <span className="copy">
          © {site.name} {new Date().getFullYear()}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
