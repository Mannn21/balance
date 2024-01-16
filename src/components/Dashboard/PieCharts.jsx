import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const PieCharts = ({ count, target, color }) => {
  const data = [
    { name: 'Count', value: count },
    { name: 'Remaining', value: target - count },
  ];

  const percentage = (count / target) * 100;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={40}
          innerRadius={30}
          fill="rgba(255, 255, 255, .1)"
          stroke='none'
        >
          <Cell key="count" fill={color} />
          <Cell key="remaining" />
        </Pie>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="15" fill="#fff">
          {`${percentage.toFixed(0)}%`}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieCharts;
