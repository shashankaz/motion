import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relix - Learn Business & Finance Online",
  description:
    "Relix is a modern financial education platform offering accessible, affordable, and high-quality online courses in business, economics, investment, and personal finance. Learn from real-world experts, explore testimonials, and grow your financial knowledge with a beautiful, user-friendly interface.",
  keywords: [
    "financial education",
    "online courses",
    "business",
    "economics",
    "investment",
    "personal finance",
    "testimonials",
    "learning platform",
    "Relix",
  ],
  applicationName: "Relix",
  creator: "Relix Team",
  openGraph: {
    title: "Relix - Learn Business & Finance Online",
    description:
      "Explore Relix's financial courses online. Learn at your pace from industry experts in business, investment, and personal finance.",
    siteName: "Relix",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Relix - Financial Education",
      },
    ],
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
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${outfit.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
