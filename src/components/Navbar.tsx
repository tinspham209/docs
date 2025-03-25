import React from "react";
import { Navbar as NextraNavbar } from "nextra-theme-docs";
import Logo from "./Logo";

const Navbar = () => {
	return <NextraNavbar logo={<Logo />} />;
};

export default Navbar;
