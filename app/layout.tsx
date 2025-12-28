import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "buildfield.io | Website Optimization & Strategic Digital Solutions",
  description: "Transform your website into a conversion machine. Data-driven optimization, strategic design, and fast execution for businesses that want results.",
  keywords: "website optimization, conversion rate optimization, website redesign, UX improvement, digital agency",
  authors: [{ name: "buildfield.io" }],
  openGraph: {
    title: "buildfield.io | Website Optimization & Digital Solutions",
    description: "Data-driven optimization and strategic design that drives measurable results.",
    type: "website",
    url: "https://buildfield.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "buildfield.io",
    description: "Transform your website into a conversion machine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
