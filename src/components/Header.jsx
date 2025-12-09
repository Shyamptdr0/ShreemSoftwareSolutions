"use client";

import React from "react";
import Image from "next/image";

export default function HeaderPage() {
	return (
		<div className="flex items-center justify-center h-24 bg-white">
			<div className="relative w-[200px] h-[60px]">
				<img
					src="https://0hf60dalcz7wrhli.public.blob.vercel-storage.com/shreem-images/logo%20new%20.webp"
					alt="logo"
					fill
					className="object-contain  transition-transform duration-300 hover:scale-105"
				/>
			</div>

		</div>
	);
}
