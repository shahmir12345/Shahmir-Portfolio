import type { Metadata } from "next";
import Link from "next/link";
import Slider from "@/components/Slider";
import CertCard from "@/components/CertCard";
import { PinIcon } from "@/components/Icons";
import { processIllustrations } from "@/components/ProcessIllustrations";
import { site, skillSet, services, processSteps, certificates } from "@/data/site";

export const metadata: Metadata = { title: "About me | Shahmir Khan" };

// ABOUT PAGE  ->  yoursite.com/about
export default function AboutPage() {
  return (
    <div className="page">
      <div className="container">
        {/* Top: info on the left, photo slider on the right */}
        <div className="about-hero">
          <div className="about-left">
            <h1>{site.name}</h1>
            <div className="role">{site.role}</div>
            <div className="loc"><PinIcon /> {site.location}</div>

            <div>
              <div className="eyebrow">Skill set</div>
              <div className="chips">
                {skillSet.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="stats">
              {site.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Start Project</Link>
              <a href={site.cv} download="Shahmir-Khan-CV.pdf" className="btn btn-ghost">Download CV</a>
            </div>
          </div>

          <Slider images={site.aboutImages} />
        </div>

        {/* How I work */}
        <div className="section">
          <div className="sec-head">
            <h2>How I work</h2>
            <p>A simple process from the first idea to a live website.</p>
          </div>
          <div className="process">
            {processSteps.map((step, i) => {
              const Illustration = processIllustrations[i];
              return (
                <div className={`step${i % 2 === 1 ? " rev" : ""}`} key={step.title}>
                  <div className="step-img"><Illustration /></div>
                  <div>
                    <div className="step-num">STEP 0{i + 1}</div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services */}
        <div className="section">
          <div className="sec-head">
            <h2>Services I give</h2>
            <p>From websites to backend systems and AI-powered features.</p>
          </div>
          <div className="services">
            {services.map((s) => (
              <div className="svc" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="chips">
                  {s.tags.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience + certificates */}
        <div className="section">
          <div className="sec-head">
            <h2>Experience</h2>
            <p>{certificates.experience.subtitle}.</p>
          </div>
          <div className="certs">
            <CertCard title={certificates.experience.title} image={certificates.experience.image} />
          </div>

          <h3 className="sub-title">Learning certificates</h3>
          <div className="certs">
            {certificates.learning.map((c) => (
              <CertCard key={c.title} title={c.title} image={c.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
