import React from "react";
import { Banner as NextraBanner } from "nextra/components";
import { Link } from "nextra-theme-docs";

const Banner = () => {
	return (
		<NextraBanner storageKey="banner-1">
			Looking for my portfolio?{" "}
			<Link href="https://tinspham.dev/">Click here</Link>
		</NextraBanner>
	);
};

export default Banner;
