// Charts.tsx
import ReactECharts from 'echarts-for-react';
import React from 'react';

interface ChartProps {
  data: { name: string; value: number }[];
  xAxisData: string[];
  seriesName: string;
}

export const LineChart: React.FC<ChartProps> = ({
  data,
  xAxisData,
  seriesName,
}) => {
  const option = {
    title: {
      show: false,
    },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: xAxisData },
    yAxis: { type: 'value' },
    grid: {
      left: 0,
      right: 0,
      bottom: 20,
      top: 10,
      containLabel: false,
    },
    series: [
      {
        name: seriesName,
        type: 'line',
        data: data.map((d) => d.value),
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export const BarChart: React.FC<ChartProps> = ({
  data,
  title,
  xAxisData,
  seriesName,
}) => {
  const option = {
    title: { text: title },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: xAxisData },
    yAxis: { type: 'value' },
    series: [
      {
        name: seriesName,
        type: 'bar',
        data: data.map((d) => d.value),
      },
    ],
  };

  return <ReactECharts option={option} style={{ width: '100%' }} />;
};
