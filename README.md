# NOOR Dubai

A premium, editorial-style website for **NOOR**, a fictional contemporary Arabian restaurant in Downtown Dubai. Built as a static marketing site with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Pages

- `/` — Home (hero, philosophy, signature dishes, experience, menu preview, story preview, location)
- `/menu` — Full menu with sticky category navigation
- `/about` — Our Story, ingredients, and the chef
- `/gallery` — Masonry gallery with a keyboard-accessible lightbox
- `/private-dining` — Offerings + private dining enquiry form
- `/contact` — Location, hours, and a reservation request form

All forms are frontend-only: submitting shows a polished success state without sending data anywhere.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

> **Note:** `next/font/google` fetches Playfair Display and Inter from Google Fonts at build time, so an internet connection is required when running `npm run build` (this is normal and works out of the box on Vercel or any machine with network access).

## Structure

- `app/` — routes (one folder per page) + `layout.tsx` for the global shell, metadata and JSON-LD
- `components/` — Navbar, MobileMenu, Footer, Button, SectionLabel, FadeIn (scroll reveal), DishCard, MenuItem/MenuCategory, GalleryGrid (lightbox), ReservationForm, PrivateDiningForm, NewsletterForm, ScrollToTop
- `lib/data.ts` — all site content (nav, menu, signature dishes, gallery images, hours) in one place, so copy updates don't require touching components

## Design tokens

Defined in `app/globals.css`:

- **Charcoal** `#171510` — near-black base
- **Ivory** `#f7f2e7` — warm background
- **Sand** `#ddcfb3` — soft accent
- **Gold** `#b08d57` — primary accent (labels, prices, active states)
- **Olive** `#4a5240` — secondary accent
- **Type:** Playfair Display (headings) + Inter (body/UI)

## Images

All photography is sourced from Unsplash via `images.unsplash.com` (configured in `next.config.ts`). Swap any URL in `lib/data.ts` or a page file to use your own photography for a real deployment.

## Deploying

This project deploys as-is to Vercel:

```bash
npx vercel
```
