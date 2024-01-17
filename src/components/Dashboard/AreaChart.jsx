import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "Sun", income: 5340, expense: 2400 },
	{ name: "Mon", income: 3400, expense: 1320 },
	{ name: "Tue", income: 4500, expense: 9800 },
	{ name: "Wed", income: 2780, expense: 3908 },
	{ name: "Thu", income: 7890, expense: 4800 },
	{ name: "Fri", income: 2390, expense: 8800 },
	{ name: "Sat", income: 3490, expense: 4300 },
];

const formatYAxis = value => {
	if (value >= 1000) {
		return `${value / 1000}k`;
	}
	return value;
};


const AreaCharts = () => (
	<ResponsiveContainer width="100%" height="100%">
		<AreaChart
			width={500}
			height={400}
			data={data}
			margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
			<CartesianGrid vertical={false} strokeOpacity={0.2} />
			<XAxis dataKey="name" tickLine={false} />
			<YAxis
				orientation="left"
				axisLine={false}
				tickFormatter={formatYAxis}
				tickLine={false}
			/>
			<Tooltip />
			<Area
				type="monotone"
				dataKey="expense"
				stackId="0"
				stroke="#a07bc8"
				fill="#a07bc87a"
			/>
			<Area
				type="monotone"
				dataKey="income"
				stackId="1"
				stroke="#f9769d"
				fill="#f9769d6f"
			/>
		</AreaChart>
	</ResponsiveContainer>
);

export default AreaCharts;
