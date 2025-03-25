import type { Metadata } from "next";
import { Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { SITE } from "@/config";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
	metadataBase: new URL("https://docs.tinspham.dev"),
	title: {
		absolute: SITE.title,
		template: `%s - ${SITE.title}`,
	},
	description: SITE.description,
	applicationName: SITE.title,
	generator: SITE.title,
	appleWebApp: {
		title: SITE.title,
	},
	other: {
		"msapplication-TileColor": "#fff",
	},
	twitter: {
		site: "https://docs.tinspham.dev",
	},
};

const banner = <Banner />;
const navbar = <Navbar />;
const footer = <Footer />;

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pageMap = await getPageMap();

	return (
		<html
			lang="en"
			dir="ltr"
			// Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
			suppressHydrationWarning
		>
			<Head faviconGlyph="✦" />
			<body>
				<Layout
					banner={banner}
					navbar={navbar}
					footer={footer}
					pageMap={pageMap}
					editLink="Edit this page on GitHub"
					docsRepositoryBase="https://github.com/tinspham209/docs"
					sidebar={{
						defaultOpen: true,
						toggleButton: true,
					}}
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
