import React, { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { StateDataContext } from '../utils/StateData';
import moment from 'moment';

const LineChartComp = () => {
  const [stateData, setStateData] = useContext(StateDataContext);
  const [positive, setPositive] = useState([]);
  const [date, setDate] = useState([]);
  const [currentHospitalized, setCurrentHospitalized] = useState([]);
  const [death, setDeath] = useState([]);

  useEffect(() => {
    setPositive([]);
    setDate([]);
    setCurrentHospitalized([]);
    setDeath([]);
    setLocalState();
  }, [stateData]);

  function setLocalState() {
    let stateDataArr = [...stateData];
    stateDataArr.reverse();
    stateDataArr.forEach((data) => {
      let newDate = moment(`${data.date}`).format('M/D');
      setPositive((positive) => [...positive, data.positive]);
      setDate((date) => [...date, newDate]);
      setCurrentHospitalized((currentHospitalized) => [
        ...currentHospitalized,
        data.hospitalizedCurrently,
      ]);
      setDeath((death) => [...death, data.death]);
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
      {
        label: 'In Hospital',
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',
        pointBorderColor: 'green',
        pointRadius: 1,
        data: currentHospitalized,
      },
      {
        label: 'Death',
        fill: false,
        backgroundColor: 'red',
        borderColor: 'red',
        pointBorderColor: 'red',
        pointRadius: 1,
        data: death,
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
