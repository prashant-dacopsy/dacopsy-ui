import ReactECharts from 'echarts-for-react';
import React from 'react';

const ConversionRateChart: React.FC = () => {
  const option = {
    title: {
      text: 'Conversion Rate (%)',
    },
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'category',
      data: ['January', 'February', 'March', 'April', 'May', 'June'],
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} %',
      },
    },
    series: [
      {
        data: [10, 15, 18, 20, 25, 22],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
          color: '#e67e22',
        },
        lineStyle: {
          width: 3,
          color: '#e74c3c',
        },
        areaStyle: {
          color: 'rgba(231, 76, 60, 0.1)',
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default ConversionRateChart;
