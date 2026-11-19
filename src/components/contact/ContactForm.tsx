"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { kind: "idle" } | { kind: "sending" } | { kind: "success"; text: string } | { kind: "error"; text: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!emailRe.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Please add a short subject.";
  if (v.message.trim().length < 10) e.message = "Your message should be at least 10 characters.";
  return e;
}

/**
 * Sends via NEXT_PUBLIC_CONTACT_ENDPOINT (e.g. Formspree) when configured.
 * Otherwise opens the visitor's email client with a prefilled message (mailto fallback).
 */
export function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    if (data.get("company")) return; // honeypot
    const values: Fields = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    const found = validate(values);
    setErrors(found);
    const first = (Object.keys(found) as (keyof Fields)[])[0];
    if (first) {
      setStatus({ kind: "error", text: "Please fix the highlighted fields and try again." });
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    if (site.contactEndpoint) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(site.contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(String(res.status));
        formRef.current?.reset();
        setStatus({ kind: "success", text: "Thank you. Your message has been sent." });
      } catch {
        setStatus({ kind: "error", text: `Your message could not be sent. Please email ${site.email} directly.` });
      }
      return;
    }

    const body = `${values.message}\n\n${values.name} (${values.email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setStatus({
      kind: "success",
      text: `Your email app should open with your message ready to send. If nothing opens, write to ${site.email} directly.`,
    });
  }

  const field = (name: keyof Fields) =>
    cn(
      "mt-2 block min-h-12 w-full rounded-lg border bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal/40 focus:border-deep focus:outline-none focus:ring-2 focus:ring-deep/30",
      errors[name] ? "border-red-700" : "border-mist/60",
    );
  const label = "block text-sm font-medium text-midnight";
  const err = (name: keyof Fields) =>
    errors[name] ? (
      <p id={`${uid}-${name}-err`} className="mt-1.5 text-sm text-red-800">{errors[name]}</p>
    ) : null;
  const aria = (name: keyof Fields) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-err` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="on-light rounded-2xl bg-soft p-6 sm:p-8" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={label}>Name</label>
          <input id={`${uid}-name`} name="name" type="text" autoComplete="name" required className={field("name")} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={label}>Email</label>
          <input id={`${uid}-email`} name="email" type="email" autoComplete="email" required className={field("email")} {...aria("email")} />
          {err("email")}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor={`${uid}-subject`} className={label}>Subject</label>
        <input id={`${uid}-subject`} name="subject" type="text" required className={field("subject")} {...aria("subject")} />
        {err("subject")}
      </div>
      <div className="mt-5">
        <label htmlFor={`${uid}-message`} className={label}>Message</label>
        <textarea id={`${uid}-message`} name="message" rows={6} required className={cn(field("message"), "resize-y")} {...aria("message")} />
        {err("message")}
      </div>
      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Company<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-midnight px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-midnight-700 disabled:opacity-60 sm:w-auto"
      >
        {status.kind === "sending" ? "Sending..." : "Send message"} <Send size={16} aria-hidden="true" />
      </button>

      <div role="status" aria-live="polite" className="mt-5 empty:hidden">
        {status.kind === "success" && (
          <p className="rounded-lg border border-deep/40 bg-white p-4 text-sm text-midnight">{status.text}</p>
        )}
      </div>
      <div role="alert" className="mt-5 empty:hidden">
        {status.kind === "error" && <p className="rounded-lg border border-red-700/50 bg-white p-4 text-sm text-red-800">{status.text}</p>}
      </div>
      <p className="mt-4 text-xs text-charcoal/60">
        {site.contactEndpoint
          ? "Your message is sent securely to Isaac."
          : "This form opens your email app with the message prefilled. Nothing is stored on this website."}
      </p>
    </form>
  );
}
