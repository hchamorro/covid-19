import React from 'react';
import { Line } from 'react-chartjs-2';

//construct the data object using the appropriate properties and data set

const ChartPage = () => {
  const lineData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Revenue',
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
        pointBorderColor: 'blue',
        pointRadius: 1,
        data: [100, 200, 300, 400, 200, 300, 600, 800, 500, 400, 500, 800],
      },
    ],
  };

  return (
    <div>
      <Line data={lineData} />
    </div>
  );
};

export default ChartPage;
