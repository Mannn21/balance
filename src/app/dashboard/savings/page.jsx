"use client";

import Target from "@/components/Savings/Target";
import GoalLists from "@/components/Savings/GoalLists";
import GraphicSavings from "@/components/Savings/GraphicSavings";

export default function Savings() {
	if (typeof window !== "undefined") {
		const balanceToken = window.localStorage.getItem("balanceToken");
		if (!balanceToken) {
			redirect("/");
		}
	}

	return (
		<div className="w-full h-auto flex flex-col md:flex-row gap-5 p-4">
			<div className="w-full h-auto flex flex-col gap-5 items-center justify-start">
				<Target />
                <GraphicSavings />
				<GoalLists />
			</div>
		</div>
	);
}
