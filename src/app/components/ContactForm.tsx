"use client";

import { useState } from "react";

export default function ContactForm() {
  const [downloaded, setDownloaded] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const brief = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nProject brief:\n${data.get("project")}\n`;
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "project-brief.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 text-left">
      <p className="text-sm text-fg-dim">
        This static site cannot send messages. Download your brief to share through
        an agreed contact channel; nothing is transmitted or stored by this site.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-wider text-fg-faint mb-2">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-line-strong bg-ink px-4 py-3 text-sm text-fg outline-none focus:border-signal transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-wider text-fg-faint mb-2">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-line-strong bg-ink px-4 py-3 text-sm text-fg outline-none focus:border-signal transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-project" className="block font-mono text-xs uppercase tracking-wider text-fg-faint mb-2">
          Project brief
        </label>
        <textarea
          id="contact-project"
          name="project"
          required
          rows={4}
          className="w-full rounded-md border border-line-strong bg-ink px-4 py-3 text-sm text-fg outline-none focus:border-signal transition-colors resize-none"
          placeholder="What are you building?"
        />
      </div>

      {downloaded && (
        <p role="status" className="text-sm text-wire font-mono">
          Download requested. Your brief has not been sent.
        </p>
      )}

      <button
        type="submit"
        className="font-mono text-sm tracking-wide bg-signal text-[#14110A] font-medium rounded-md px-6 py-3.5 transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0 justify-self-start"
      >
        Download brief →
      </button>
    </form>
  );
}
