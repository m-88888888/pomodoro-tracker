import React from 'react';
import { Bar } from 'react-chartjs-2';

type TimeChartProps = {
  hours: number;
  minutes: number;
  workingTime: number;
};

const round = (value: number, base: number) => Math.round(value * base) / base;

const TimeChart: React.FC<TimeChartProps> = (
  props: TimeChartProps
): JSX.Element => {
  const { hours, minutes, workingTime } = props;
  const [dataSet, setDataSet] = React.useState<number[]>([]);

  const roundedMinutes = round(minutes / 60, 10);
  const planTime = hours + roundedMinutes;

  React.useEffect(() => {
    setDataSet([planTime, workingTime]);
  }, [hours, minutes, workingTime]);

  const data = {
    labels: ['予定', '実績'],
    datasets: [
      {
        label: '時間',
        data: dataSet,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '作業時間の予定と実績',
      },
    },
  };

  return <Bar data={data} options={options} type="bar" />;
};

export default TimeChart;
