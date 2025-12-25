import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import Loader from "@/components/Loader";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-plus-jakarta",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata = {
	title: "Shreem Software Solutions | Custom Software, Websites & Mobile App Development",
	description:
		"Shreem Software Solutions is a leading IT company offering custom software development, website development, mobile app development, UI/UX design, cloud solutions & digital transformation services.",
	keywords: [
		"Shreem Software Solutions",
		"software development company",
		"website development company",
		"mobile app development",
		"custom software solutions",
		"IT company in Khargone",
		"best IT company in India",
		"Next.js development",
		"React development",
		"UI UX design services",
		"cloud solutions",
		"digital transformation",
		"business automation software",
		"ecommerce website development",
		"web application development",
		"SaaS development",
		"API development",
		"software company near me",
	],

	icons: {
		icon: [
			{
				url: "https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/favicon.ico",
				sizes: "any",
			},
			{
				url: "https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/favicon-16x16.png",
				type: "image/png",
				sizes: "16x16",
			},
			{
				url: "https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/favicon-32x32.png",
				type: "image/png",
				sizes: "32x32",
			},
		],
		apple: {
			url: "https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/apple-touch-icon.png",
			sizes: "180x180",
		},
	},

	openGraph: {
		title: "Shreem Software Solutions | Software, Website & App Development",
		description:
			"We provide custom software, web, mobile app development, and enterprise IT solutions tailored to your business needs.",
		url: "https://shreemsoftwaresolutions.com",
		siteName: "Shreem Software Solutions",
		locale: "en_IN",
		type: "website",
	},

	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
		<head>
			{/* Google Analytics */}
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-RS84WX1018"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RS84WX1018');
          `}
			</Script>
		</head>

		<body
			className={`${plusJakarta.variable} ${inter.variable} antialiased bg-primary-gradient`}
		>
		<Loader>{children}</Loader>
		</body>
		</html>
	);
}
