// import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import NotFound from "./not-found";

// font
const dmsans = DM_Sans({
  variable: "--dmsans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Banquee - Next-Gen Banking for Everyone",
  description:
    "Experience seamless and modern banking with Banquee. Secure, fast, and tailored for you.",
  keywords: "banking, finance, secure payments, modern banking, Banquee",
  author: "Banquee Team",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Banquee - Next-Gen Banking for Everyone",
    description:
      "Experience seamless and modern banking with Banquee. Secure, fast, and tailored for you.",
    url: "benque.vercel.app", // Replace with actual URL
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Banquee - Next-Gen Banking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banquee - Next-Gen Banking",
    description: "Experience seamless and modern banking with Banquee.",
    site: "@banquee", // Replace with actual Twitter handle
    images: ["https://yourwebsite.com/twitter-image.jpg"], // Replace with actual image
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
        className={`${dmsans.variable} ${inter.className} font-medium antialiased flex flex-col min-h-screen dark:bg-gray-800 transition-all`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<NotFound />}>{children}</Suspense>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
