import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "גרין-ספייס | GreenSpace",
  description:
    "Urban landscape architecture for luxury rooftops and balconies with instant visualization and AI-guided quoting.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "גרין-ספייס | GreenSpace",
    description:
      "See your rooftop or balcony design before you build. Instant visualization + premium execution.",
    url: "https://example.com",
    siteName: "GreenSpace",
    locale: "he_IL",
    type: "website"
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gs-black text-gs-text">
        {children}
      </body>
    </html>
  );
}
