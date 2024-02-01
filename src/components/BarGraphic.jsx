import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    income: 200,
  },
  {
    name: 'Mon',
    income: 500,
  },
  {
    name: 'Tue',
    income: 150,
  },
  {
    name: 'Wed',
    income: 185,
  },
  {
    name: 'Thu',
    income: 370,
  },
  {
    name: 'Fri',
    income: 464,
  },
  {
    name: 'Sat',
    income: 540,
  },
];

const BarGraphic = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name"  />
        <YAxis />
        <Tooltip />
        <Bar dataKey="income" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarGraphic;
