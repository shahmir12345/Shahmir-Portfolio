"use client";

import { FormEvent, useState } from "react";
import { contactServices } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(json.error || "Something went wrong.");

      setStatus("success");
      setFeedback("Thanks! Your message was sent. I'll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" placeholder="John Doe" required maxLength={100} />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="john@example.com" required maxLength={150} />
      </div>

      <div className="field">
        <span className="lab">I&apos;m contacting as</span>
        <div className="seg">
          <input type="radio" id="org" name="type" value="Organization" defaultChecked />
          <label htmlFor="org">Organization</label>
          <input type="radio" id="per" name="type" value="Personal" />
          <label htmlFor="per">Personal</label>
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">Service you want</label>
        <select id="service" name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {contactServices.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="field full">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell me about your project..." required maxLength={3000} />
      </div>

      {/* Hidden trap field: real people never see it, spam bots fill it in */}
      <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form-foot">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {feedback && (
          <span className={`form-msg${status === "error" ? " err" : ""}`} role="status">
            {feedback}
          </span>
        )}
      </div>
    </form>
  );
}
