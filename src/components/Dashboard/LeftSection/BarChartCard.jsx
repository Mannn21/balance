"use client";

import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const BarChartCard = ({ yesterday, today, target, category, color }) => {
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		const progressPercentage = () => {
			if (yesterday > today) {
				return setPercentage(((yesterday - today) / yesterday) * 100);
			}
			if (today >= yesterday) {
				return setPercentage(((today - yesterday) / yesterday) * 100);
			}
		};

		progressPercentage();
	}, [today, yesterday]);

	const count = yesterday + today;

	return (
		<div className="w-full md:w-1/2 h-32 bg-color-dark rounded-xl shadow-color-tersier overflow-hidden">
			<div className="w-full h-full flex flex-col justify-around items-center p-4 bg-gradient-to-l from-color-pinkOpacity to-35%">
				<div className="w-full h-auto flex justify-between items-center text-color-gray">
					<h3>{category}</h3>
					{today > yesterday ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
				</div>
				<div className="w-full h-auto flex justify-between items-center">
					<span className="text-2xl font-bold text-color-white">
						$ {count} / $ {target}
					</span>
					<span
						className={`text-md ${
							today > yesterday ? "text-color-green" : "text-color-red"
						}`}>
						{percentage}%
					</span>
				</div>
				<div className="w-full h-3 flex justify-start items-start">
					<ProgressBar count={count} target={target} color={color} />
				</div>
			</div>
		</div>
	);
};

export default BarChartCard;
