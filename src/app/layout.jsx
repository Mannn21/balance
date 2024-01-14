import { Inter } from "next/font/google";
import ReduxProvider from "@/lib/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Balance Management System",
	description: "Balance Management System",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
