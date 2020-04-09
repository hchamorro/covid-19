import React, { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { StateDataContext } from '../utils/StateData';
import moment from 'moment';

const LineChartComp = () => {
  const [stateData, setStateData] = useContext(StateDataContext);
  const [positive, setPositive] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    setPositive([]);
    setDate([]);
    setLocalState();
  }, [stateData]);

  function setLocalState() {
    stateData.reverse();
    stateData.forEach((data) => {
      let newDate = moment(`${data.date}`).format('M/D');
      setPositive((positive) => [...positive, data.positive]);
      setDate((date) => [...date, newDate]);
    });
  }

  const lineData = {
    labels: date,
    datasets: [
      {
        label: 'Confirmed Cases',
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
        pointBorderColor: 'blue',
        pointRadius: 1,
        data: positive,
      },
    ],
  };

  return (
    <div>
      <Line data={lineData} />
    </div>
  );
};

export default LineChartComp;
