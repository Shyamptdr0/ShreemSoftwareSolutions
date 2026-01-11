"use client";

import React from "react";
import Image from "next/image";

export default function HeaderPage() {
	return (
		<div className="flex items-center justify-center h-24 bg-white">
			<div className="relative w-[200px] h-[60px]">
				<Image
					src="/logo.webp"
					alt="Shreem Software Solutions"
					width={300}
					height={90}
					priority
					sizes="(max-width: 768px) 150px, 300px"
					className="object-contain  transition-transform duration-300 hover:scale-105"
				/>
			</div>

		</div>
	);
}
