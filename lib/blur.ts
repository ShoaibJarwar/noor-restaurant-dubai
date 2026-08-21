function shimmer(w: number, h: number) {
  return `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1c1a15" offset="20%" />
      <stop stop-color="#2a271f" offset="50%" />
      <stop stop-color="#1c1a15" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#171510" />
  <rect width="${w}" height="${h}" fill="url(#g)" />
</svg>`;
}

function toBase64(str: string) {
  if (typeof window === "undefined") {
    return Buffer.from(str).toString("base64");
  }
  return window.btoa(str);
}

/**
 * A tiny, theme-consistent blur placeholder for next/image, used with
 * remote (Unsplash) sources that don't support automatic blur generation.
 */
export function blurDataURL(w = 700, h = 475) {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
}
