import HeaderPage from "@/components/Header";
import FooterPage from "@/components/Footer";
import HeroPage from "@/components/Hero";

export default function Home() {
	return (
		<main className="scroll-smooth min-h-screen ">
			<HeaderPage />
			<HeroPage />

			{/* ✅ Floating WhatsApp Button */}
			<a
				href="https://wa.me/917000000000"
				target="_blank"
				className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="#fff"
				>
					<path d="M12.04 2C6.58 2 2.09 6.49 2.09 11.96c0 2.11.63 4.06 1.71 5.7L2 22l4.52-1.76c1.58.87 3.4 1.36 5.33 1.36 5.46 0 9.96-4.49 9.96-9.96C21.81 6.49 17.3 2 12.04 2zm5.57 14.45c-.23.65-1.32 1.25-1.83 1.33-.47.07-1.06.1-1.71-.11-.39-.13-.88-.28-1.51-.55-2.65-1.15-4.37-3.84-4.5-4.02-.13-.18-1.07-1.42-1.07-2.71 0-1.29.68-1.93.92-2.2.23-.26.5-.33.66-.33.17 0 .33 0 .47.01.15.01.35-.06.55.42.2.47.67 1.62.73 1.73.06.11.1.24.02.38-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.46.13.23.58.96 1.25 1.55.86.77 1.58 1.01 1.82 1.13.24.11.38.1.52-.06.15-.17.6-.7.76-.94.15-.23.32-.19.55-.11.23.08 1.45.68 1.7.8.25.12.42.18.48.28.06.1.06.65-.17 1.3z" />
				</svg>
			</a>

			<FooterPage />
		</main>
	);
}
