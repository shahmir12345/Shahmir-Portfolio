"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about me" },
  { href: "/portfolio", label: "my portfolio" },
];

// "use client" because usePathname() needs the browser to know which page is open,
// so we can highlight the active link.
export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="container nav">
        <Link href="/" className="logo">
          <div className="logo-mark">{site.initials[0]}</div>
          <span className="name">{site.shortName}</span>
        </Link>

        <nav>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`link${pathname === l.href ? " active" : ""}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className="btn btn-primary">
          Get In Touch
        </Link>
      </div>
    </header>
  );
}
