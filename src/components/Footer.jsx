"use client";

import React from "react";
import Image from "next/image";

export default function FooterPage() {
	return (
		<footer className="w-full bg-black py-16 text-white mt-10">
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-10">

				{/* Left Content */}
				<div className="max-w-xl">

					{/* ✅ Updated Heading */}
					<h2 className="text-3xl md:text-4xl font-bold leading-tight">
						Let’s Build Your Custom Website or Software!
					</h2>

					{/* ✅ Updated Paragraph */}
					<p className="mt-4 text-base md:text-lg leading-relaxed text-gray-300">
						If you want to build a custom website or software for your startup or business,
						book a free consultation today and let’s build your digital presence together.
					</p>

					{/* Social Buttons */}
					<div className="flex gap-4 mt-8 flex-wrap">

						{/* WhatsApp */}
						<a
							href="https://wa.me/917000000000"
							target="_blank"
							className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl shadow-lg transition hover:bg-gray-100"
						>
							<div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
								<svg width="22" height="22" fill="#fff" viewBox="0 0 24 24">
									<path d="M12.04 2C6.58 2 2.09 6.49 2.09 11.96c0 2.11.63 4.06 1.71 5.7L2 22l4.52-1.76c1.58.87 3.4 1.36 5.33 1.36 5.46 0 9.96-4.49 9.96-9.96C21.81 6.49 17.3 2 12.04 2zm5.57 14.45c-.23.65-1.32 1.25-1.83 1.33-.47.07-1.06.1-1.71-.11-.39-.13-.88-.28-1.51-.55-2.65-1.15-4.37-3.84-4.5-4.02-.13-.18-1.07-1.42-1.07-2.71 0-1.29.68-1.93.92-2.2.23-.26.5-.33.66-.33.17 0 .33 0 .47.01.15.01.35-.06.55.42.2.47.67 1.62.73 1.73.06.11.1.24.02.38-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.46.13.23.58.96 1.25 1.55.86.77 1.58 1.01 1.82 1.13.24.11.38.1.52-.06.15-.17.6-.7.76-.94.15-.23.32-.19.55-.11.23.08 1.45.68 1.7.8.25.12.42.18.48.28.06.1.06.65-.17 1.3z"></path>
								</svg>
							</div>

							<div className="text-left">
								<p className="text-sm font-semibold">WhatsApp</p>
								<p className="text-xs text-gray-600">Chat with us</p>
							</div>
						</a>

						{/* Instagram */}
						<a
							href="https://www.instagram.com/shreemsoftwaresolutions/"
							target="_blank"
							className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-2xl shadow-lg transition hover:bg-gray-100"
						>
							<div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
									<path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"></path>
								</svg>
							</div>

							<div className="text-left">
								<p className="text-sm font-semibold">Instagram</p>
								<p className="text-xs text-gray-600">Message us</p>
							</div>
						</a>

					</div>
				</div>

				{/* Right — Logo */}
				<div className="hidden md:flex justify-center items-center flex-1">
					<Image
						src="https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/footer-banner.png"
						alt="Shreem Software Solutions Logo"
						width={1600}
						height={1600}
						className="
      w-full
      max-w-[900px]    /* BIG IMAGE */
      lg:max-w-[1100px]
      xl:max-w-[1300px]
      object-contain
      scale-110         /* makes it EVEN BIGGER */
      -mr-20            /* move more to the right */
    "
					/>
				</div>



			</div>

			{/* Divider */}
			<div className="max-w-7xl mx-auto px-6">
				<div className="h-px bg-white/20 my-10"></div>

				<p className="text-center text-sm text-gray-400">
					© {new Date().getFullYear()} Shreem Software Solutions — All Rights Reserved.
				</p>
			</div>
		</footer>
	);
}
