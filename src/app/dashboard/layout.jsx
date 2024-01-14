import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
	return (
		<div className="w-screen h-screen flex flex-row gap-2">
			<aside>
				<Sidebar />
			</aside>
			<main>{children}</main>
		</div>
	);
}
