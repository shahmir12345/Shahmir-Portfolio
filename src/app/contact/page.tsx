import type { Metadata } from "next";
import Avatar from "@/components/Avatar";
import ContactForm from "@/components/ContactForm";
import Socials from "@/components/Socials";

export const metadata: Metadata = { title: "Contact | Shahmir Khan" };

// CONTACT PAGE  ->  yoursite.com/contact
export default function ContactPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="contact-top">
          <div>
            <h2>
              Let&apos;s start a <span>project</span> together
            </h2>
            <p>Tell me a bit about what you need and I&apos;ll get back to you.</p>
          </div>
          <div className="contact-photo">
            <Avatar />
          </div>
        </div>

        <ContactForm />

        <div className="contact-socials">
          <span>or find me here</span>
          <Socials />
        </div>
      </div>
    </div>
  );
}
