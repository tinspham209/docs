/** @type {import('next').NextConfig} */

import nextra from "nextra";

const withNextra = nextra({
	latex: true,
	defaultShowCopyCode: true,
	staticImage: true,
});

export default withNextra({
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
});
