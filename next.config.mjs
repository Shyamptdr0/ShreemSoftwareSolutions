/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // ✅ REQUIRED for next export behavior
	reactCompiler: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "0hf60dalcz7wrhli.public.blob.vercel-storage.com",
			},
		],
	},
};

export default nextConfig;
