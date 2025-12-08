"use client";

import { useState, useEffect } from "react";

export default function Loader({ children }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Hide loader after 1.5s (adjust as needed)
		const timer = setTimeout(() => setLoading(false), 1500);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className="fixed inset-0 flex items-center justify-center bg-white z-50">
				<div className="flex space-x-2">
					<span className="w-4 h-4 bg-blue-900 rounded-full animate-bounce delay-0"></span>
					<span className="w-4 h-4 bg-blue-800 rounded-full animate-bounce delay-150"></span>
					<span className="w-4 h-4 bg-blue-700 rounded-full animate-bounce delay-300"></span>
					<span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-450"></span>
					<span className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-600"></span>
				</div>
			</div>
		);
	}

	return <>{children}</>;
}
