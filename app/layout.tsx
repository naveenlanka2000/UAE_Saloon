import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
