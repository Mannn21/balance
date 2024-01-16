import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
	title: "Balance Management System",
	description: "Balance Management System",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={lato.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
}
