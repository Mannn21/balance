"use client";

import { redirect } from "next/navigation";
import TotalExpense from "@/components/Expense/TotalExpense";
import GraphicExpense from "@/components/Expense/GraphicExpense";
import TableExpense from "@/components/Expense/TableExpense";

export default function Expense() {
	if (typeof window !== "undefined") {
		const balanceToken = window.localStorage.getItem("balanceToken");
		if (!balanceToken) {
			redirect("/");
		}
	}

	return (
		<div className="w-full h-auto flex flex-col md:flex-row gap-5 p-4">
			<div className="w-full h-auto flex flex-col gap-5 items-center justify-start">
				<TotalExpense />
				<GraphicExpense />
				<TableExpense />
			</div>
		</div>
	);
}
