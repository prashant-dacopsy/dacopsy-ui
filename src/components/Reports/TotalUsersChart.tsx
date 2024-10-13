import ReactECharts from 'echarts-for-react';
import React from 'react';

const TotalUsersChart: React.FC = () => {
  const option = {
    title: {
      text: 'Total Users',
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Total Users',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 500, name: 'Total Users', itemStyle: { color: '#9b59b6' } },
        ],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default TotalUsersChart;
