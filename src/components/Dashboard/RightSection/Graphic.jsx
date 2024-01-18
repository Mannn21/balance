import AreaCharts from "./AreaChart";

const Graphic = () => {
	return (
		<div className="w-full h-80 bg-color-dark rounded-xl shadow-color-tersier overflow-hidden">
			<div className="w-full h-full flex flex-col gap-2 p-2 bg-gradient-to-l from-color-pinkOpacity to-35%">
				<div className="w-full h-8 flex flex-row justify-start items-center gap-5 px-10">
					<div className="flex flex-row gap-2 justify-start items-center">
						<div className="w-2 h-2 rounded-full bg-color-secondary"></div>
						<span className="text-color-gray">Income</span>
					</div>
					<div className="flex flex-row gap-2 justify-start items-center">
						<div className="w-2 h-2 rounded-full bg-color-accent"></div>
						<span className="text-color-gray">Expense</span>
					</div>
				</div>
				<div className="w-full h-full">
					<AreaCharts />
				</div>
			</div>
		</div>
	);
};

export default Graphic;
