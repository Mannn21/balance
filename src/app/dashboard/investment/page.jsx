"use client";

import Capitals from "@/components/Invest/Capitals";
import Graphics from "@/components/Invest/Graphics";
import Tables from "@/components/Invest/Tables";

export default function Investment() {
	if (typeof window !== "undefined") {
		const balanceToken = window.localStorage.getItem("balanceToken");
		if (!balanceToken) {
			redirect("/");
		}
	}

	return (
		<div className="w-full h-auto flex flex-col md:flex-row gap-5 p-4">
			<div className="w-full h-auto flex flex-col gap-5 items-center justify-start">
				<Capitals />
				<Tables />
				<Graphics />
			</div>
		</div>
	);
}
