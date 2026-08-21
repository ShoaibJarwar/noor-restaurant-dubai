"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="flex items-center gap-2 text-sm text-gold">
        <Check size={16} strokeWidth={1.5} />
        You&rsquo;re on the list. Welcome to the table.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm border-b border-ivory/30">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex items-center justify-center px-2 text-gold transition-transform hover:translate-x-1"
      >
        <ArrowRight size={20} strokeWidth={1.5} />
      </button>
    </form>
  );
}
