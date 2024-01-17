"use client";

import { redirect } from "next/navigation";
import TotalBalance from "@/components/Dashboard/TotalBalance";
import Graphic from "@/components/Dashboard/Graphic";
import BarChartCard from "@/components/Dashboard/BarChartCard";

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
                <div className="w-full h-auto flex flex-col md:flex-row gap-5">
					<BarChartCard yesterday={20} today={50} target={90} category={"Investment"} color={"#96a7ff"} />
					<BarChartCard yesterday={50} today={30} target={150} category={"Savings"} color={"#a07bc8"} />
                </div>
			</div>
            <div>

            </div>
		</div>
	);
}
