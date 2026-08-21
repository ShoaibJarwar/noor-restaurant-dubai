"use client";

import { useState, FormEvent } from "react";
import { Check } from "lucide-react";

const inputClasses =
  "w-full border-b border-foreground/25 bg-transparent py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-gold focus:outline-none transition-colors";

const labelClasses =
  "text-[11px] uppercase tracking-[0.18em] text-foreground/50";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-background-tint p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
          <Check size={22} strokeWidth={1.5} />
        </div>
        <h3 className="mt-5 font-display text-2xl text-foreground">
          Request Received
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-foreground/60">
          Thank you. Our reservations team will confirm your table by email or
          phone shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First Name
          </label>
          <input id="firstName" required type="text" className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last Name
          </label>
          <input id="lastName" required type="text" className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input id="email" required type="email" className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input id="phone" required type="tel" className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="date" className={labelClasses}>
            Date
          </label>
          <input id="date" required type="date" className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="time" className={labelClasses}>
            Time
          </label>
          <input id="time" required type="time" className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="guests" className={labelClasses}>
            Guests
          </label>
          <select id="guests" required defaultValue="" className={`${inputClasses} mt-2`}>
            <option value="" disabled>
              Select
            </option>
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="requests" className={labelClasses}>
          Special Requests
        </label>
        <textarea
          id="requests"
          rows={3}
          className={`${inputClasses} mt-2 resize-none`}
          placeholder="Dietary needs, celebrations, seating preference..."
        />
      </div>

      <p className="text-xs text-foreground/50">
        For groups of 8 or more, please enquire about private dining.
      </p>

      <button
        type="submit"
        className="w-full bg-foreground py-4 text-[11px] uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-gold hover:text-charcoal sm:w-auto sm:px-10"
      >
        Request a Reservation
      </button>
    </form>
  );
}
