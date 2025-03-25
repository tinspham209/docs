import React from "react";
import { Footer as NextraFooter } from "nextra-theme-docs";
import { SITE } from "@/config";

const Footer = () => {
	return (
		<NextraFooter>
			<span>Maintained by Tins Pham</span>
			<div>
				<a target="_blank" href={SITE.github} rel="noopener noreferrer">
					GitHub
				</a>
			</div>
		</NextraFooter>
	);
};

export default Footer;
