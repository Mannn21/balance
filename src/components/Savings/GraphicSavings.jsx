import BarGraphic from "../BarGraphic";

const GraphicSavings = () => {
	return (
		<div className="w-full h-80 bg-color-dark rounded-xl shadow-color-tersier overflow-hidden">
			<div className="w-full h-full flex flex-col gap-2 p-2 bg-gradient-to-l from-color-pinkOpacity to-35%">
				<div className="w-full h-8 flex flex-row justify-start items-center gap-5 px-10">
					<div className="flex flex-row gap-2 justify-start items-center">
						<span className="text-color-gray">Expense Graphic</span>
					</div>
				</div>
				<div className="w-full h-full">
					<BarGraphic />
				</div>
			</div>
		</div>
	);
};

export default GraphicSavings;
