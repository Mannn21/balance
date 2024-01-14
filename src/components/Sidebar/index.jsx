"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonSidebar from "./ButtonSidebar";
import { FaPowerOff } from "react-icons/fa";
import { sidebarNavigation } from "@/utilities/sidebarNavigation";

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div className="w-12 h-full">
			<div className="w-full h-full">
				<div className="w-full h-full flex flex-col justify-center items-center">
					<div className="w-full h-1/2 p-2 flex flex-col justify-around">
						{sidebarNavigation.map((item, index) => {
							return (
								<Link key={index} href={item.link}>
									<ButtonSidebar data={item} pathname={pathname}/>
								</Link>
							);
						})}
					</div>
					<div className="fixed bottom-2 left-2">
						<button className="w-full flex flex-row gap-2 items-center justify-start p-1 text-gray-400 hover:text-red-600">
							<FaPowerOff size={25} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
