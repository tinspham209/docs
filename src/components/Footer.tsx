import React from "react";
import { Footer as NextraFooter } from "nextra-theme-docs";
import { SITE } from "@/config";

const Footer = () => {
	return (
		<NextraFooter>
			<span>
				Maintained by{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://tinspham.dev"
				>
					Tins Pham
				</a>
			</span>
			<div style={{ marginLeft: "8px" }}>
				<a target="_blank" href={SITE.github} rel="noopener noreferrer">
					GitHub
				</a>
			</div>
		</NextraFooter>
	);
};

export default Footer;
