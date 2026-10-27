import Link from "next/link";
import Avatar from "@/components/Avatar";
import Socials from "@/components/Socials";
import { site, homeTechStack } from "@/data/site";

// HOME PAGE  ->  yoursite.com/
export default function HomePage() {
  return (
    <div className="page">
      <div className="container">
        <div className="hero">
          <div>
            <span className="badge"><i className="dot" /> available for work</span>
            <h1>
              Hi, I&apos;m <span>Shahmir</span>,<br />a Full Stack Developer
            </h1>
            <p className="lead">{site.intro}</p>
            <div className="hero-actions">
              <Link href="/portfolio" className="btn btn-primary">View Portfolio</Link>
              <Link href="/contact" className="btn btn-ghost">Let&apos;s Talk</Link>
            </div>
          </div>

          <div className="hero-side">
            <Avatar />
            <div className="info-card">
              <h3>{site.name}</h3>
              <div className="row"><b>Location</b><span>{site.location}</span></div>
              <div className="row"><b>Role</b><span>{site.role}</span></div>
              <div className="row"><b>Level</b><span>{site.level}</span></div>
              <Socials />
            </div>
          </div>
        </div>
      </div>

      <div className="container strip">
        <div className="strip-grid">
          <div className="box">
            <div className="eyebrow">Tech stack</div>
            <div className="chips">
              {homeTechStack.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container cta">
        <div className="cta-box">
          <h2>Got an idea? Let&apos;s make it happen.</h2>
          <p>Let&apos;s connect and see what we can create together.</p>
          <Link href="/contact" className="btn btn-primary">Let&apos;s Talk</Link>
        </div>
      </div>
    </div>
  );
}
