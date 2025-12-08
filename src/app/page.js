import HeaderPage from "@/components/Header";
import FooterPage from "@/components/Footer";
import HeroPage from "@/components/Hero";

export default function Home() {
	return (
		<main className="scroll-smooth min-h-screen ">
			<HeaderPage />
			<HeroPage/>
			<FooterPage />
		</main>

	);
}
