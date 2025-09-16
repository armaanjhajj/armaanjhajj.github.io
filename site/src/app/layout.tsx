import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Armaan Jhajj — Student • Founder • EMT • Developer",
    template: "%s — Armaan Jhajj",
  },
  description:
    "A living portfolio of projects, research, EMT training, and writing.",
  metadataBase: new URL("https://armaanjhajj.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Armaan Jhajj",
    description:
      "Building Moments and bridging medicine, technology, and human connection.",
    type: "website",
    url: "https://armaanjhajj.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Armaan Jhajj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armaan Jhajj",
    description:
      "Building Moments and bridging medicine, technology, and human connection.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Providers>
          <div className="min-h-dvh flex flex-col">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
