import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f2e7" },
    { media: "(prefers-color-scheme: dark)", color: "#15130f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://noordubai.ae"),
  title: {
    default: "NOOR Dubai | Contemporary Arabian Dining",
    template: "%s | NOOR Dubai",
  },
  description:
    "NOOR is a contemporary Arabian restaurant in Dubai, UAE, bringing the flavors and traditions of the region to the modern table.",
  openGraph: {
    title: "NOOR Dubai | Contemporary Arabian Dining",
    description:
      "NOOR is a contemporary Arabian restaurant in Dubai, UAE, bringing the flavors and traditions of the region to the modern table.",
    url: "https://noordubai.ae",
    siteName: "NOOR Dubai",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "NOOR Dubai dining room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOOR Dubai | Contemporary Arabian Dining",
    description:
      "A contemporary Arabian restaurant in Dubai, UAE, bringing the flavors of the region to the modern table.",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "NOOR Dubai",
  description:
    "Contemporary Arabian restaurant in Downtown Dubai, combining traditional Gulf flavors with modern culinary technique.",
  servesCuisine: ["Middle Eastern", "Arabian", "Contemporary"],
  priceRange: "AED 150 - AED 400",
  telephone: "+971-4-000-0000",
  email: "hello@noordubai.ae",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Downtown Dubai",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "23:59",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      opens: "12:00",
      closes: "01:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
