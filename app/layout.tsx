import type { Metadata } from "next";

import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Maison de Sable | Luxury Hair, Beauty & Grooming Experience in UAE",
  description:
    "Maison de Sable is a premium UAE salon brand offering elevated hair, beauty, bridal, and grooming experiences in a refined luxury setting.",
  keywords: [
    "luxury salon UAE",
    "premium beauty salon Dubai",
    "bridal makeup UAE",
    "hair styling Dubai",
    "grooming salon UAE",
  ],
  openGraph: {
    title: "Maison de Sable",
    description:
      "Luxury hair, beauty and grooming crafted for discerning clients across the UAE.",
    url: "https://maisondesable.ae",
    siteName: "Maison de Sable",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link
          rel="preload"
          as="image"
          href={`${publicBasePath}/hero-main.png`}
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="preload"
          as="image"
          href={`${publicBasePath}/hero-dark.png`}
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="preload"
          as="image"
          href={`${publicBasePath}/about-main.png`}
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="preload"
          as="image"
          href={`${publicBasePath}/about-dark.png`}
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
