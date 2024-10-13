import ReactECharts from 'echarts-for-react';
import React from 'react';

const UserRegistrationsChart: React.FC = () => {
  const option = {
    title: {
      text: 'Month-on-Month User Registrations',
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
        data: [120, 150, 170, 140, 180, 160],
        type: 'bar',
        smooth: true,
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
        },
        barWidth: '50%',
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default UserRegistrationsChart;
