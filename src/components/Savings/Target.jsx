import PieChartByCategory from "../PieChartByCategory";

const Target = () => {
	return (
		<div className="w-full h-32 bg-color-dark rounded-xl shadow-color-tersier overflow-hidden">
			<div className="w-full h-full bg-gradient-to-l from-color-pinkOpacity to-35%">
				<div className="w-full h-full flex flex-row justify-around items-center gap-4 p-3">
					<div className="w-1/3 h-full">
						<PieChartByCategory
							count={230}
							target={400}
							category={"Total Savings"}
							color={"#f9769d"}
						/>
					</div>
					<div className="w-1/3 h-full">
						<PieChartByCategory
							count={130}
							target={150}
							category={"Target Savings"}
							color={"#96a7ff"}
						/>
					</div>
					<div className="w-1/3 h-full">
						<PieChartByCategory
							count={70}
							target={200}
							category={"Total Goals"}
							color={"#a07bc8"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Target;
