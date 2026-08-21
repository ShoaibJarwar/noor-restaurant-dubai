import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-28 text-center lg:px-10">
      <SectionLabel align="center">404</SectionLabel>
      <h1 className="mt-6 font-display text-4xl text-foreground sm:text-5xl">
        This Table Isn&rsquo;t Set
      </h1>
      <p className="mt-5 max-w-md text-foreground/60">
        The page you&rsquo;re looking for has been moved or doesn&rsquo;t
        exist. Let&rsquo;s get you back to the table.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="solid">
          Return Home
        </Button>
        <Button href="/menu" variant="outline-dark">
          View the Menu
        </Button>
      </div>
    </section>
  );
}
