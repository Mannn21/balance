"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
	const pathname = usePathname();

	const [lastPathSegment, setLastPathSegment] = useState("");

	useEffect(() => {
		const segment = pathname.substring(pathname.lastIndexOf("/") + 1);
		const capitalizedSegment =
			segment.charAt(0).toUpperCase() + segment.slice(1);
		setLastPathSegment(capitalizedSegment);
	}, [pathname]);

	return (
		<header className="w-full h-auto">
			<div className="w-full p-2 flex flex-row justify-between items-center">
				<div className="w-1/2 flex justify-start items-center">
					<h1 className="text-3xl font-black tracking-wide text-color-white">
						{lastPathSegment}
					</h1>
				</div>
				<div className="w-1/2 flex justify-end items-center gap-4">
					<Link
						href={`/dashboard/user/notification`}
						className="cursor-pointer text-color-gray hover:text-color-secondary hover:rotate-6 hover:scale-105 transition-all ease-in-out duration-200">
						<IoMdNotificationsOutline size={25} />
					</Link>
					<Link
						href={`/dashboard/user/profile`}
						className="cursor-pointer text-color-gray hover:text-color-secondary hover:rotate-6 hover:scale-105 transition-all ease-in-out duration-200">
						<AiOutlineUser size={25} />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
