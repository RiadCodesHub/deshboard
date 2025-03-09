import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data = [
    { name: "Technology", 2023: 110, 2024: 170 },
    { name: "Car Brands", 2023: 50, 2024: 60 },
    { name: "Airlines", 2023: 180, 2024: 200 },
    { name: "Energy", 2023: 80, 2024: 100 },
    { name: "Technology", 2023: 110, 2024: 170 },
    { name: "Car Brands", 2023: 50, 2024: 60 },
    { name: "Airlines", 2023: 180, 2024: 200 },
    { name: "Energy", 2023: 80, 2024: 100 },
  ];

  return (
    <div className="w-full h-full">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 30, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.1)" />
          <XAxis 
            dataKey="name" 
            tickFormatter={(value) => (value.length > 4 ? `${value.slice(0, 4)}...` : value)} 
            stroke="#333333" 
          />
          <YAxis stroke="#333333" tickLine={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="2024" stroke="#4CAF50" strokeWidth={2} />
          <Line type="monotone" dataKey="2023" stroke="#FF5733" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
