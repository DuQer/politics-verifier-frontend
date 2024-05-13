import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartData = {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
};

type PieChartOptions = {
  plugins: {
    legend: {
      display: boolean;
    };
  };
};

type PieChartProps = {
  data: PieChartData;
  options: PieChartOptions;
};

export const PieChart: React.FC<PieChartProps> = ({ data, options }) => {
  return <Pie data={data} options={options}></Pie>;
};
