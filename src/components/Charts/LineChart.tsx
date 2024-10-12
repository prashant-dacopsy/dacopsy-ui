import ReactECharts from 'echarts-for-react';
const LineChart = () => {
  const getOption = () => {
    return {
      title: {
        text: '',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`),
        boundaryGap: false,
        show: false,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Random Data',
          type: 'bar',
          smooth: true,
          symbol: 'none',
          data: Array.from({ length: 1000 }, () => {
            return (
              Math.sqrt(-2 * Math.log(Math.random())) *
              Math.cos(2 * Math.PI * Math.random())
            );
          }),
        },
      ],
    };
  };

  return (
    <ReactECharts
      option={getOption()}
      style={{ height: '300px', width: '100%' }}
    />
  );
};

export default LineChart;
