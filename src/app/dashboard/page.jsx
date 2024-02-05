"use client";

import { redirect } from "next/navigation";
import TotalBalance from "@/components/Dashboard/LeftSection/TotalBalance";
import Graphic from "@/components/Dashboard/LeftSection/Graphic";
import BarChartCard from "@/components/Dashboard/LeftSection/BarChartCard";
import { IoMdMore } from "react-icons/io";
import Card from "@/components/Dashboard/RightSection/Card";
import TransactionCard from "@/components/Dashboard/RightSection/TransactionCard";
import { transactions } from "@/utilities/transactions";

export default function Dashboard() {
	if (typeof window !== "undefined") {
		const balanceToken = window.localStorage.getItem("balanceToken");
		if (!balanceToken) {
			redirect("/");
		}
	}

	return (
		<div className="w-full h-full flex flex-col md:flex-row gap-5 p-4">
			<div className="w-full md:w-2/3 flex flex-col gap-5 items-center justify-start">
				<TotalBalance />
				<Graphic />
				<div className="w-full h-auto flex flex-col md:flex-row gap-5">
					<BarChartCard
						yesterday={20}
						today={50}
						target={90}
						category={"Investment"}
						color={"#96a7ff"}
					/>
					<BarChartCard
						yesterday={50}
						today={30}
						target={150}
						category={"Savings"}
						color={"#a07bc8"}
					/>
				</div>
			</div>
			<div className="w-full md:w-1/3 flex flex-col gap-5 items-center justify-start px-3">
				<div className="w-full h-auto flex flex-col gap-6">
					<div className="w-full h-auto flex flex-col gap-4">
						<div className="w-full flex flex-row justify-between items-center text-color-white">
							<h3 className="text-color-white font-semibold text-xl">
								My Cards and Wallet
							</h3>
							<IoMdMore size={23} />
						</div>
						<div className="w-full px-3">
							<Card />
						</div>
					</div>
					<div className="w-full max-h-80 flex flex-col gap-4">
						<div className="w-full flex flex-row justify-between items-center text-color-white">
							<h3 className="text-color-white font-semibold text-xl">
								Today Recent Transactions
							</h3>
							<IoMdMore size={23} />
						</div>
						<div className="w-full h-72 overflow-y-auto">
							<div className="w-full flex flex-col gap-4">
								{transactions.map((data, index) => {
									return <TransactionCard key={index} data={data} />;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
