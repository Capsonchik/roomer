import ReactECharts from 'echarts-for-react';

export const TestChart = () => {
  const options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };


  return (
    <ReactECharts
      option={options}
      style={{width: '100%', height: '100%'}}
    />
  );
};