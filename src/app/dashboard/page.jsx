"use client";

import { redirect } from "next/navigation";
import TotalBalance from "@/components/Dashboard/TotalBalance";
import Graphic from "@/components/Dashboard/Graphic";

export default function Dashboard() {
	if (typeof window !== "undefined") {
		const balanceToken = window.localStorage.getItem("balanceToken");
		if (!balanceToken) {
			redirect("/");
		}
	}

	return (
		<div className="w-full h-full">
			<div className="w-full md:w-2/3 flex flex-col gap-5 items-center justify-start">
				<TotalBalance />
				<Graphic />
                <div className="w-full flex flex-row gap-5">

                </div>
			</div>
            <div>

            </div>
		</div>
	);
}
