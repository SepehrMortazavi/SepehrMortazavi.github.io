import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://sepehrmortazavi.github.io"),
    title: "Seyed Sepehr Mortazavi — AI & MLOps Engineer",
    description:
      "Professional and academic portfolio covering AI engineering, MLOps, computer vision, robotics and deployment.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Seyed Sepehr Mortazavi — AI & MLOps Engineer",
      description:
        "Professional and academic portfolio covering AI engineering, MLOps, computer vision, robotics and deployment.",
      type: "website",
      url: "https://sepehrmortazavi.github.io",
      images: [
        {
          url: "/og.png",
          width: 1693,
          height: 929,
          alt: "Engineering trajectory from manufacturing to AI systems.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Seyed Sepehr Mortazavi — AI & MLOps Engineer",
      description:
        "Professional and academic portfolio covering AI engineering, MLOps, computer vision, robotics and deployment.",
      images: ["/og.png"],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
