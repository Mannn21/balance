"use client";

import { redirect } from "next/navigation";
import TotalIncome from "@/components/Income/TotalIncome";
import GraphicIncome from "@/components/Income/GraphicIncome";
import TableIncome from "@/components/Income/TableIncome";

export default function Income() {
	if (typeof window !== "undefined") {
		const balanceToken = window.localStorage.getItem("balanceToken");
		if (!balanceToken) {
			redirect("/");
		}
	}

	return (
		<div className="w-full h-auto flex flex-col md:flex-row gap-5 p-4">
			<div className="w-full h-auto flex flex-col gap-5 items-center justify-start">
				<TotalIncome />
				<GraphicIncome />
				<TableIncome />
			</div>
		</div>
	);
}
