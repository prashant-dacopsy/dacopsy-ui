import ReactECharts from 'echarts-for-react';
import React from 'react';

const ActiveUsersChart: React.FC = () => {
  const option = {
    title: {
      text: 'Active Users',
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
    },
    series: [
      {
        data: [100, 120, 140, 110, 130, 150],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#2ecc71',
        },
        lineStyle: {
          color: '#1abc9c',
          width: 3,
        },
        areaStyle: {
          color: [
            { offset: 0, color: 'rgba(46, 204, 113, 0.5)' },
            { offset: 1, color: 'rgba(46, 204, 113, 0)' },
          ],
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default ActiveUsersChart;
