import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mantra Spa & Salon | Relax. Rejuvenate. Renew.",
  description: "A premium luxury wellness sanctuary. Mantra Spa & Salon offers world-class massage therapy, facial rejuvenation, professional hair styling, nail care, and bespoke beauty treatments in an organic, calming environment.",
  keywords: ["spa", "salon", "massage", "facial", "hair styling", "nail care", "luxury wellness", "Mantra Spa", "beauty treatments"],
  authors: [{ name: "Mantra Spa & Salon" }],
  openGraph: {
    title: "Mantra Spa & Salon | Luxury Wellness & Beauty Sanctuary",
    description: "Relax. Rejuvenate. Renew. Experience premium organic treatments, massage therapies, and hair styling in an airy, soothing atmosphere.",
    url: "https://auraspasalon.com",
    siteName: "Mantra Spa & Salon",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-aura-bg text-aura-text font-sans">
        {children}
      </body>
    </html>
  );
}

