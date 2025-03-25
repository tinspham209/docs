import Image, { ImageProps } from "next/image";
import logoImgUrl from "../app/logo.png";

type LogoProps = Partial<ImageProps>;
const Logo = ({ ...props }: LogoProps) => {
	return (
		<Image
			src={logoImgUrl}
			alt="Tins Pham Logo"
			width={50}
			height={50}
			style={{
				borderRadius: "50%",
				boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
			}}
			{...props}
		/>
	);
};

export default Logo;
