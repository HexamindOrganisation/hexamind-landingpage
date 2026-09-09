"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const fieldClass =
  "mt-1 w-full rounded-lg border border-line bg-sable px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none";
const labelClass = "text-xs uppercase tracking-wider text-mid";

/** Contact form that opens the visitor's mail client with a prefilled message. */
export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const subject = form.subject || "Contact site Hexamind";
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-panel p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom, Prénom
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={fieldClass}
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="subject" className={labelClass}>
          Sujet
        </label>
        <input
          id="subject"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={fieldClass}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={fieldClass}
        />
      </div>
      <button
        type="submit"
        className="mt-6 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-ink"
      >
        Envoyer le message
      </button>
    </form>
  );
}
