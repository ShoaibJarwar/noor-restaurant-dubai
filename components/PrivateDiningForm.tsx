"use client";

import { useState, FormEvent } from "react";
import { Check } from "lucide-react";

const inputClasses =
  "w-full border-b border-ivory/25 bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none transition-colors";

const labelClasses = "text-[11px] uppercase tracking-[0.18em] text-ivory/50";

export default function PrivateDiningForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-ivory/5 p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
          <Check size={22} strokeWidth={1.5} />
        </div>
        <h3 className="mt-5 font-display text-2xl text-ivory">
          Enquiry Received
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ivory/60">
          Thank you for considering NOOR. A member of our events team will be
          in touch within one business day to plan your occasion.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="pd-name" className={labelClasses}>
            Name
          </label>
          <input id="pd-name" required type="text" className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="pd-email" className={labelClasses}>
            Email
          </label>
          <input id="pd-email" required type="email" className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="pd-phone" className={labelClasses}>
            Phone
          </label>
          <input id="pd-phone" required type="tel" className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="pd-event" className={labelClasses}>
            Event Type
          </label>
          <select id="pd-event" required defaultValue="" className={`${inputClasses} mt-2`}>
            <option value="" disabled>
              Select
            </option>
            <option>Corporate Dinner</option>
            <option>Wedding</option>
            <option>Family Celebration</option>
            <option>Chef&rsquo;s Table</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="pd-date" className={labelClasses}>
            Preferred Date
          </label>
          <input id="pd-date" required type="date" className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="pd-guests" className={labelClasses}>
            Number of Guests
          </label>
          <input id="pd-guests" required type="number" min={1} className={`${inputClasses} mt-2`} />
        </div>
      </div>

      <div>
        <label htmlFor="pd-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="pd-message"
          rows={4}
          className={`${inputClasses} mt-2 resize-none`}
          placeholder="Tell us about the occasion you're planning..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gold py-4 text-[11px] uppercase tracking-[0.22em] text-charcoal transition-colors duration-300 hover:bg-gold-light sm:w-auto sm:px-10"
      >
        Enquire About Private Dining
      </button>
    </form>
  );
}
