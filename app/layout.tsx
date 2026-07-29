import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sepehrmortazavi.github.io"),
  title: "Seyed Sepehr Mortazavi — AI & MLOps Engineer",
  description:
    "Bilingual AI and MLOps engineering portfolio featuring the award-winning CellCore innovation, master's-thesis software, robotics, and academic 3D-printing systems.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Seyed Sepehr Mortazavi — AI & MLOps Engineer",
    description:
      "From model to reality: AI, MLOps, CellCore, robotics, and deployable academic systems.",
    type: "website",
    url: "https://sepehrmortazavi.github.io",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "Seyed Sepehr Mortazavi engineering portfolio with CellCore and TUniCorn first-place recognition.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seyed Sepehr Mortazavi — AI & MLOps Engineer",
    description:
      "From model to reality: AI, MLOps, CellCore, robotics, and deployable academic systems.",
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
      <body>{children}</body>
    </html>
  );
}
