/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // ✅ REQUIRED for next export behavior
	reactCompiler: true,
	
	// Production optimizations
	poweredByHeader: false,
	generateEtags: false,
	
	// Image optimization (static export compatible)
	images: {
		unoptimized: true, // Required for static export
		remotePatterns: [
			{
				protocol: "https",
				hostname: "0hf60dalcz7wrhli.public.blob.vercel-storage.com",
			},
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
			},
		],
	},
	
	// Experimental optimizations
	experimental: {
		optimizePackageImports: ['lucide-react', 'framer-motion']
	},
	
	// Turbopack config for Next.js 16
	turbopack: {},
	
	// Build optimizations
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			config.optimization.splitChunks = {
				chunks: 'all',
				cacheGroups: {
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true,
					},
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						priority: -10,
						chunks: 'all',
					},
				},
			};
		}
		return config;
	},
};

export default nextConfig;
