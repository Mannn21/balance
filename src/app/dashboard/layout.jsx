import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
	return (
		<div className="w-screen h-screen flex flex-row gap-2">
			<aside>
				<Sidebar />
			</aside>
			<main className="w-full h-full px-3 py-5 box-border">
				<div className="w-full h-full flex flex-col gap-2 overflow-auto">
					<Navbar />
					<div className="w-full h-full">{children}</div>
				</div>
			</main>
		</div>
	);
}
