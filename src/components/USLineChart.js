import React, { useEffect, useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { USADataContext } from '../utils/USAData';
import moment from 'moment';

const USLineChart = () => {
  const [USAData, setUSAData] = useContext(USADataContext);
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
  }, []);

  function setLocalState() {
    let USADataArr = [...USAData];
    USADataArr.reverse();
    USADataArr.forEach((data) => {
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
        backgroundColor: '#2051AC',
        borderColor: '#2051AC',
        pointBorderColor: '#2051AC',
        pointRadius: 1,
        data: positive,
      },
      {
        label: 'In Hospital',
        fill: false,
        backgroundColor: '#619D36',
        borderColor: '#619D36',
        pointBorderColor: '#619D36',
        pointRadius: 1,
        data: currentHospitalized,
      },
      {
        label: 'Death',
        fill: false,
        backgroundColor: '#BC252F',
        borderColor: '#BC252F',
        pointBorderColor: '#BC252F',
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

export default USLineChart;
