"use client";

import { FormEvent, useState } from "react";
import { Send } from "./Icons";

const recipient = "quotes@lonestartractorworks.com";

type FormState = {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  location: "",
  service: "Brush clearing",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Static-friendly form submission: opens the visitor's email client with a structured quote request.
    const subject = encodeURIComponent(
      `Tractor service quote request from ${form.name || "property owner"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nLocation: ${form.location}\nService Needed: ${form.service}\n\nProject Details:\n${form.message}`,
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-3xl border border-sand/60 bg-white p-5 shadow-card sm:p-7"
    >
      {/* Basic contact information keeps friction low for mobile quote requests. */}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="rounded-xl border-sand bg-dust/40 px-4 py-3 text-charcoal shadow-sm focus:border-rust focus:ring-rust"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Phone
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="rounded-xl border-sand bg-dust/40 px-4 py-3 text-charcoal shadow-sm focus:border-rust focus:ring-rust"
            placeholder="(210) 555-0147"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-xl border-sand bg-dust/40 px-4 py-3 text-charcoal shadow-sm focus:border-rust focus:ring-rust"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-charcoal">
          Property location
          <input
            required
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            className="rounded-xl border-sand bg-dust/40 px-4 py-3 text-charcoal shadow-sm focus:border-rust focus:ring-rust"
            placeholder="Boerne, TX"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        What do you need done?
        <select
          value={form.service}
          onChange={(event) => updateField("service", event.target.value)}
          className="rounded-xl border-sand bg-dust/40 px-4 py-3 text-charcoal shadow-sm focus:border-rust focus:ring-rust"
        >
          <option>Brush clearing</option>
          <option>Driveway grading or repair</option>
          <option>Pad prep</option>
          <option>Dirt work</option>
          <option>Brush hogging</option>
          <option>Drainage improvement</option>
          <option>Large lawn maintenance</option>
          <option>Small acreage improvement</option>
          <option>Not sure — need advice</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-charcoal">
        Tell us about the project
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="rounded-xl border-sand bg-dust/40 px-4 py-3 text-charcoal shadow-sm focus:border-rust focus:ring-rust"
          placeholder="Acreage, access, deadline, photos available, and what you want the finished result to look like."
        />
      </label>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-rust px-6 py-4 text-base font-black uppercase tracking-wide text-white shadow-rugged transition hover:-translate-y-0.5 hover:bg-mesquite focus:outline-none focus:ring-4 focus:ring-rust/30"
      >
        Request a Quote
        <Send
          className="h-5 w-5 transition group-hover:translate-x-1"
          aria-hidden="true"
        />
      </button>

      <p className="text-center text-xs text-steel">
        Prefer talking it through? Call{" "}
        <a href="tel:+12105550147" className="font-bold text-cedar underline">
          (210) 555-0147
        </a>
        . Text photos of the job site for a faster estimate.
      </p>
    </form>
  );
}
