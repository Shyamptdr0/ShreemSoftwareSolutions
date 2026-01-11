import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import Loader from "@/components/Loader";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

export const metadata = {
  title: {
    default: "Shreem Software Solutions | Custom Software Development Company",
    template: "%s | Shreem Software Solutions"
  },
  description:
    "🚀 Leading software development company in India. Expert in custom software, web & mobile app development, UI/UX design, cloud solutions & digital transformation. Get a free consultation today!",
  keywords: [
    "software development company India",
    "custom software development",
    "website development company",
    "mobile app development",
    "UI UX design services",
    "cloud solutions",
    "digital transformation",
    "business automation",
    "ecommerce development",
    "SaaS development",
    "API development",
    "React development",
    "Next.js development",
    "IT company Khargone",
    "best software company",
    "enterprise software solutions",
    "web application development",
    "software consulting"
  ],
  authors: [{ name: "Shreem Software Solutions" }],
  creator: "Shreem Software Solutions",
  publisher: "Shreem Software Solutions",
  metadataBase: new URL("https://shreemsoftwaresolutions.com"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Shreem Software Solutions | Expert Software Development Company",
    description:
      "🚀 Transform your business with custom software, web & mobile apps. Expert developers delivering innovative IT solutions. Free consultation available.",
    url: "https://shreemsoftwaresolutions.com",
    siteName: "Shreem Software Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shreem Software Solutions - Custom Software Development"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Shreem Software Solutions | Expert Software Development",
    description:
      "🚀 Transform your business with custom software, web & mobile apps. Expert developers delivering innovative IT solutions.",
    images: ["/og-image.jpg"],
    creator: "@shreemsoftware"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        {/* Favicon - direct link for better compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        
        {/* Preconnect only to used domains (Lighthouse friendly) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Google Analytics – non-blocking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RS84WX1018"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RS84WX1018', { anonymize_ip: true });
          `}
        </Script>

        {/* Structured Data for SEO */}
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shreem Software Solutions",
            "url": "https://shreemsoftwaresolutions.com",
            "logo": "https://shreemsoftwaresolutions.com/logo.png",
            "description": "Leading software development company in India offering custom software, web & mobile app development, UI/UX design, and digital transformation services.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Khargone",
              "addressRegion": "Madhya Pradesh",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8085-202-613",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://wa.me/916263662870"
            ],
            "services": [
              "Custom Software Development",
              "Website Development",
              "Mobile App Development",
              "UI/UX Design",
              "Cloud Solutions",
              "Digital Transformation"
            ]
          })}
        </Script>
      </head>

      <body className="antialiased bg-primary-gradient">
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
