import PieCharts from "./PieCharts"

const PieChartByCategory = ({count, target, category, color}) => {
    return (
        <div className="w-full h-full flex flex-row justify-between items-center px-3">
            <div className="w-1/2 h-full flex flex-col gap-1 justify-center items-start">
                <h3 className="text-color-gray text-lg font-normal">{category}</h3>
                <span className="text-color-white text-2xl font-semibold">$ {count}</span>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
                <PieCharts count={count} target={target} color={color} />
            </div>
        </div>
    )
}

export default PieChartByCategory