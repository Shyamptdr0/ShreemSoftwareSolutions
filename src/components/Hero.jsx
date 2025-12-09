"use client";

import React, {useState} from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {motion, AnimatePresence} from "framer-motion";
import {
	Monitor,
	BarChart3,
	Handshake,
	Smartphone,
	Code2,
	Brain,
	Globe,
	Settings,
	ShoppingCart,
	Rocket,
	Megaphone,
	Layers,
} from "lucide-react";
import {cn} from "@/lib/utils";
import {Marquee} from "@/components/ui/marquee";


export default function HeroPage() {
	const services = [
		{
			title: "Full Stack Web Development",
			desc: "Custom websites & enterprise platforms using MERN, Next.js, and modern stacks.",
			icon: Code2
		},
		{
			title: "Java Full Stack Development",
			desc: "Robust applications with Java, Spring Boot, Hibernate, and frontend frameworks.",
			icon: Layers
		},
		{
			title: "Mobile App Development",
			desc: "Cross-platform mobile apps with React Native & Expo for iOS & Android.",
			icon: Smartphone
		},
		{
			title: "AI & Automation",
			desc: "AI-powered chatbots, workflow automation, and predictive solutions.",
			icon: Brain
		},
		{
			title: "Website Maintenance & Hosting",
			desc: "Secure hosting, updates, and 24/7 monitoring for uninterrupted performance.",
			icon: Settings
		},
		{title: "IT Consulting", desc: "Strategic consulting to align IT with your business goals.", icon: Globe},
		{
			title: "E-Commerce Solutions",
			desc: "Online stores with secure payment gateways & seamless checkout.",
			icon: ShoppingCart
		},
		{
			title: "Digital Marketing",
			desc: "SEO, social media, and campaigns to strengthen your brand.",
			icon: Megaphone
		},
		{
			title: "Custom Software Development",
			desc: "End-to-end product engineering & SaaS solutions tailored to your needs.",
			icon: Rocket
		},
	];

	const technologies = [
		{name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
		{name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"},
		{
			name: "Hibernate",
			logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg"
		},
		{name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
		{name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
		{name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
		{name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
		{name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
		{name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
		{name: "Expo", logo: "https://avatars.githubusercontent.com/u/12504344?s=200&v=4"},
	];

	const features = [
		"Free Domain (One Time)",
		"Free Hosting (Lifetime)",
		"Free SSL Certificate (Lifetime)",
		"Custom Design for Your Business",
		"Responsive Website (Mobile & Desktop)",
		"Support for 6 Months",
	];

	const projects = [
		{
			id: 1,
			title: "School Website",
			description:
				"A modern and responsive school management website with admin panel and student portal.",
			image: "https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/7.png",
			features: [
				"Responsive and SEO-friendly design",
				"Student and teacher portal with login access",
				"Admin panel for managing admissions, results, and notices",
				"Event gallery & latest announcements section",
				"Online admission form and contact system"
			],
		},
		{
			id: 2,
			title: "Creative Homes",
			description:
				"Creative Homes is a smart real-estate platform that helps users explore, book, and manage properties with ease.",
			image: "https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/8.png",
			features: [
				"Property listing with photos, amenities & pricing",
				"Builder/Agent dashboard",
				"Customer dashboard with saved properties",
				"Project gallery & highlights",
				"Instant enquiry notifications",
				"Admin panel for full control",
				"Map view for locations",
				"Secure, scalable backend API",
			],
		},
		{
			id: 3,
			title: "Coffee Shop App",
			description: "A modern coffee ordering mobile app with seamless browsing, cart, and order history features.",
			image: "https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/9.png",
			features: [
				"Attractive and responsive UI design",
				"Browse and search coffee varieties",
				"Add to cart with size & quantity options",
				"Secure checkout process",
				"Order history tracking"
			],
		},
		{
			id: 4,
			title: "Kapdo Ki Duniya ( E-Commerce Website )",
			description: "A scalable online shopping platform with secure payment integration and a smooth user experience.",
			image: "https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/10.png",
			features: [
				"Paypal payment integration",
				"Product catalog & cart system",
				"Responsive design (mobile-friendly)",
				"Admin panel for order management",
				"Inventory management"
			],
		},
	];


	const [currentIndex, setCurrentIndex] = useState(0);
	const project = projects[currentIndex];

	const nextProject = () => {
		setCurrentIndex((prev) => (prev + 1) % projects.length);
	};

	const prevProject = () => {
		setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
	};

	const variants = {
		enter: {opacity: 0, x: 50},
		center: {opacity: 1, x: 0},
		exit: {opacity: 0, x: -50},
	};


	const TechCard = ({logo, name}) => (
		<figure
			className={cn("relative h-28 w-32 rounded-xl border flex flex-col items-center justify-center p-2 bg-white hover:bg-gray-50 border-gray-200")}>
			<img src={logo} alt={name} className="w-12 h-12 object-contain mb-2"/>
			<figcaption className="text-sm font-medium">{name}</figcaption>
		</figure>
	);

	return (
		<div className=" pt-10 md:pt-32 pb-20">

			{/* ------------ FLOATING DECORATIVE IMAGES ------------- */}
			<div className="hidden md:block ">
				<img src="https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/scribble.png"
				       alt="Decor" width={80} height={80} className="absolute top-20 left-10 opacity-70 float-soft"/>
				<img src="https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/paper-plane.png"
				       alt="Decor" width={90} height={90} className="absolute top-54 left-20 opacity-70 float-soft"/>
				<img src="https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/responsive.png"
				       alt="Decor" width={90} height={90} className="absolute top-40 right-10 opacity-70 float-soft"/>
				<img src="https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/ux-design.png"
				       alt="Decor" width={90} height={90}
				       className="absolute bottom-25 right-20 opacity-70 float-soft"/>
				<img src="https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/game-development.png"
				       alt="Decor" width={100} height={100}
				       className="absolute bottom-16 left-24 opacity-70 float-soft"/>
				<img src="https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/light-bulb.png"
				       alt="Decor" width={80} height={80} className="absolute top-1/2 right-40 opacity-70 float-soft"/>
				<img src="https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/coding.png"
				       alt="Decor" width={100} height={100} className="absolute top-1/2 left-40 opacity-70 float-soft"/>

			</div>
			{/* ------------- MAIN HERO CONTENT ------------- */}
			<div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
				<h1 className="text-[40px] md:text-6xl font-extrabold tracking-tight text-black/85 leading-tight">
					Build Your First Custom Software Solution With Us
				</h1>
				<p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
					Want to launch a website for your startup or business? Book a free consultation today and let’s
					build your digital presence together.
				</p>
				<div className="flex gap-4 mt-5 flex-wrap">
					<a href="https://wa.me/918085202613" target="_blank"
					   className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl shadow-lg transition hover:bg-gray-100">
						<div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
							<svg width="22" height="22" fill="#fff" viewBox="0 0 24 24">
								<path
									d="M12.04 2C6.58 2 2.09 6.49 2.09 11.96c0 2.11.63 4.06 1.71 5.7L2 22l4.52-1.76c1.58.87 3.4 1.36 5.33 1.36 5.46 0 9.96-4.49 9.96-9.96C21.81 6.49 17.3 2 12.04 2zm5.57 14.45c-.23.65-1.32 1.25-1.83 1.33-.47.07-1.06.1-1.71-.11-.39-.13-.88-.28-1.51-.55-2.65-1.15-4.37-3.84-4.5-4.02-.13-.18-1.07-1.42-1.07-2.71 0-1.29.68-1.93.92-2.2.23-.26.5-.33.66-.33.17 0 .33 0 .47.01.15.01.35-.06.55.42.2.47.67 1.62.73 1.73.06.11.1.24.02.38-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.46.13.23.58.96 1.25 1.55.86.77 1.58 1.01 1.82 1.13.24.11.38.1.52-.06.15-.17.6-.7.76-.94.15-.23.32-.19.55-.11.23.08 1.45.68 1.7.8.25.12.42.18.48.28.06.1.06.65-.17 1.3z"></path>
							</svg>
						</div>
						<div className="text-left">
							<p className="text-sm font-semibold">WhatsApp</p>
							<p className="text-xs text-gray-600">Chat with us</p>
						</div>
					</a>
					<a href="https://www.instagram.com/shreemsoftwaresolutions/" target="_blank"
					   className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl shadow-lg transition hover:bg-gray-100">
						<div
							className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
								<path
									d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"></path>
							</svg>
						</div>
						<div className="text-left">
							<p className="text-sm font-semibold">Instagram</p>
							<p className="text-xs text-gray-600">Message us</p>
						</div>
					</a>
				</div>

				<Button
					onClick={() => window.open("https://wa.me/918085202613", "_blank")}
					className="mt-15 px-10 py-7 text-lg font-semibold rounded-2xl bg-blue-600 text-white shadow-md hover:shadow-xl hover:bg-blue-700 hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer"
				>
					Book Free Consultation
				</Button>


				<div className="flex justify-center px-4 md:px-0 mt-4 md:mt-5">
					<div className="w-full max-w-[700px] md:max-w-[900px]">
						<img
							src="https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/Hero-banner.png"
							alt="Shreem Software Solutions Illustration"
							width={950}
							height={950}
							className="
        w-full h-auto
        object-contain
        drop-shadow-2xl
        float-soft
        transition-transform
        duration-500
        ease-out
        hover:scale-105
      "
							priority
						/>
					</div>
				</div>

			</div>
			<div className="max-w-6xl mx-auto px-6 mt-28 grid md:grid-cols-2 gap-14 items-start">
				<div className="space-y-6">
					{[
						{
							title: "Custom Website Development",
							desc: "High-performance websites built for growing businesses.",
							Icon: Monitor,
							color: "black",
						},
						{
							title: "ERP Software Solutions",
							desc: "Automation tools tailored for business operations.",
							Icon: BarChart3,
							color: "black",
						},
						{
							title: "CRM Development",
							desc: "Customer-first CRM solutions for all industries.",
							Icon: Handshake,
							color: "black",
						},
						{
							title: "Mobile App Development",
							desc: "Powerful Android & iOS applications.",
							Icon: Smartphone,
							color: "black",
						},
					].map((item, index) => (
						<div
							key={index}
							className="
								flex items-center gap-4 p-5 rounded-2xl bg-white
								shadow-sm border border-gray-100
								hover:shadow-lg hover:-translate-y-1
								transition-all duration-300
							"
						>
							<div
								className={`w-14 h-14 rounded-xl bg-${item.color}-500/10 flex items-center justify-center`}>
								<item.Icon className={`text-${item.color}-600`} size={30}/>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-black/70">{item.title}</h3>
								<p className="text-gray-500 text-sm">{item.desc}</p>
							</div>
						</div>
					))}
				</div>

				<div>
					<h2 className="text-3xl md:text-5xl font-extrabold text-black/80 leading-tight">
						What Do We Help With?
					</h2>

					<p className="mt-5 text-gray-600 leading-relaxed text-lg font-inter">
						At Shreem Software Solutions, we help businesses transform ideas into
						modern digital products. From smart websites to mobile apps and
						high-performance software — we develop solutions that actually deliver results.
					</p>

					<p className="mt-4 text-gray-600 leading-relaxed text-lg font-inter">
						Our focus is on clean UI/UX, scalable development, and ensuring your
						business grows faster with the right technology.
					</p>
				</div>
			</div>


			<div className="mx-auto px-6 mt-32 max-w-[1200px] space-y-24">

				{projects.map((project, index) => (
					<div key={index} className="flex flex-col md:flex-row items-center gap-10">

						{/* Left Image */}
						<div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
							<AnimatePresence mode="wait">
								<motion.div
									key={project.title}
									initial={{opacity: 0}}
									animate={{opacity: 1}}
									exit={{opacity: 0}}
									transition={{duration: 0.5}}
									className="relative w-full h-full"
								>
									{project.image ? (
										<img
											src={project.image}
											alt={project.title}
											className="object-cover w-full h-full rounded-md transition-all duration-300 ease-out"
											style={{
												transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
												willChange: "transform, box-shadow",
											}}
											onMouseMove={(e) => {
												const rect = e.currentTarget.getBoundingClientRect();
												const x = e.clientX - rect.left;
												const y = e.clientY - rect.top;

												const centerX = rect.width / 2;
												const centerY = rect.height / 2;

												const rotateX = ((y - centerY) / centerY) * 12;
												const rotateY = ((x - centerX) / centerX) * 12;

												const glareX = (x / rect.width) * 100;
												const glareY = (y / rect.height) * 100;

												e.currentTarget.style.transform = `
                                        perspective(800px)
                                        rotateX(${-rotateX}deg)
                                        rotateY(${rotateY}deg)
                                        scale(1.03)
                                    `;

												e.currentTarget.style.boxShadow = `${rotateY}px ${-rotateX}px 40px rgba(0,0,0,0.25)`;

												e.currentTarget.style.background = `
                                        radial-gradient(
                                            circle at ${glareX}% ${glareY}%,
                                            rgba(255,255,255,0.45),
                                            transparent 60%
                                        )
                                    `;
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.transform =
													"perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
												e.currentTarget.style.boxShadow = "0px 0px 20px rgba(0,0,0,0.15)";
												e.currentTarget.style.background = "transparent";
											}}
										/>
									) : (
										<div
											className="flex items-center justify-center h-64 w-full bg-gray-200 text-gray-400">
											Image Coming Soon
										</div>
									)}
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Right Text */}
						<div className="w-full md:w-1/2 text-start">
							<AnimatePresence mode="wait">
								<motion.div
									key={project.title}
									initial={{opacity: 0, x: 40}}
									animate={{opacity: 1, x: 0}}
									exit={{opacity: 0, x: -40}}
									transition={{duration: 0.5}}
								>
									<h2 className="text-4xl md:text-5xl font-extrabold text-black/85">
										{project.title}
									</h2>

									<p className="mt-4 text-gray-600 font-inter">
										{project.description}
									</p>

									<ul className="mt-4 list-disc list-inside text-gray-500 font-inter">
										{project.features.map((feature, idx) => (
											<li key={idx}>{feature}</li>
										))}
									</ul>

									<button
										onClick={() => window.open("https://wa.me/918085202613", "_blank")}
										className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition cursor-pointer">
										BOOK FREE CONSULTATION
									</button>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				))}

			</div>


			{/* ============================================= */}
			{/*           FULL SERVICES SECTION             */}
			{/* ============================================= */}
			{/*<div className="max-w-6xl mx-auto px-6 mt-32">*/}
			{/*	<h2 className="text-4xl md:text-5xl font-extrabold text-black/85 text-center">*/}
			{/*		Our Services*/}
			{/*	</h2>*/}

			{/*	<div className="mt-12 grid md:grid-cols-3 gap-8">*/}
			{/*		{services.map((item, index) => (*/}
			{/*			<div key={index}*/}
			{/*			     className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">*/}
			{/*				<item.icon className="text-blue-600 mb-4 mx-auto" size={36}/>*/}
			{/*				<h3 className="text-xl font-semibold">{item.title}</h3>*/}
			{/*				<p className="text-gray-600 text-sm mt-2">{item.desc}</p>*/}
			{/*			</div>*/}
			{/*		))}*/}
			{/*	</div>*/}
			{/*</div>*/}

			{/* ============================================= */}
			{/*           TECHNOLOGIES WE USE SECTION       */}
			{/* ============================================= */}
			<section className="bg-blue-50 py-24 mt-30">
				<div className="max-w-6xl mx-auto px-6 text-center">
					{/* Heading */}
					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
						Technologies We Use
					</h2>
					<p className="text-gray-600 mt-3 md:text-lg">
						Powerful tools that drive our modern development workflow
					</p>

					{/* Marquee Container */}
					<div className="relative overflow-hidden mt-16">
						<Marquee pauseOnHover speed={60} className="py-4">
							<div className="flex gap-8 min-w-max">
								{technologies.map((tech) => (
									<TechCard key={tech.name} {...tech} />
								))}
							</div>
						</Marquee>

						{/* Soft Gradient Sides */}
						<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>
						<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>
					</div>
				</div>
			</section>


			<div className="mt-15 text-center">
				{/* Heading & Subtext */}
				<h2 className="text-3xl md:text-4xl font-extrabold text-black/85">
					What will you get in this <br/> Website Plan?
				</h2>
				<p className="text-gray-500 mt-2 max-w-xl mx-auto px-4 font-inter">
					Inside this plan, you will get all these deliverables with which you can make your business online
					and grow it professionally.
				</p>

				{/* Card */}
				<div
					className="max-w-sm mx-5 md:mx-auto  bg-black text-white rounded-2xl shadow-lg border
					border-gray-800 p-8 flex flex-col items-center
					transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 mt-8">

					<h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-start">
						Custom Website Plan

					</h3>

					{/* Features List */}
					<div>
						<ul className="mb-6 space-y-3 text-left w-full">
							{features.map((feature, index) => (
								<li key={index} className="flex items-center gap-3">
              <span
	              className="w-5 h-5  rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
                ✓
              </span>
									<span className="text-white text-sm">{feature}</span>
								</li>
							))}
						</ul>
					</div>


					{/* CTA Button */}
					<Button
						onClick={() => window.open("https://wa.me/918085202613", "_blank")}
						className=" cursor-pointer px-8 py-4 bg-white text-black text-lg font-semibold rounded-full shadow-md hover:bg-gray-200 hover:shadow-xl transition-all duration-300">
						Book Free Consultation
					</Button>
				</div>
			</div>

		</div>
	);
}
