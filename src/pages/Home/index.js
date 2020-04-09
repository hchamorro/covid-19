import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import { StateNameContext } from '../../utils/StateName';
import { USADataContext } from '../../utils/USAData';
import { AllStatesDataContext } from '../../utils/AllStatesData';
import { StateDataContext } from '../../utils/StateData';
import StateMenu from '../../components/StateMenu';
import MapComp from '../../components/MapComp';
import LongName from '../../components/LongName';
import StateResultsCard from '../../components/StateResultsCard';
import LineChart from '../../components/LineChart';
import './style.css';

function Home() {
  const [stateName, setStateName] = useContext(StateNameContext);
  const [AllStatesData, setAllStatesData] = useContext(AllStatesDataContext);
  const [USAData, setUSAData] = useContext(USADataContext);
  const [stateData, setStateData] = useContext(StateDataContext);

  useEffect(() => {
    fetchAllStatesData();
    fetchUSAData();
    fetchStateDataInit();
  }, []);

  function fetchAllStatesData() {
    Axios.get('https://covidtracking.com/api/states').then((res) =>
      setAllStatesData(res.data)
    );
  }

  function fetchUSAData() {
    Axios.get('https://covidtracking.com/api/us').then((res) =>
      setUSAData(res.data)
    );
  }

  function fetchStateDataInit() {
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?state=${stateName}`
    ).then((res) => setStateData(res.data));
  }

  return (
    <>
      {console.log(USAData)}
      <div className="headerWrapper">
        <section className="headerOne">
          <strong>COVID-19 by State </strong>
        </section>
        <section className="headerTwo">
          Data updates daily at 4:00 p.m. EST.
        </section>
        <section className="stateMenu">
          <StateMenu />
        </section>
      </div>
      <div className="content">
        <div className="cardWrapper">
          <section className="card">
            <div className="cardTitle">
              <LongName />
            </div>
            <StateResultsCard />
          </section>
          <section>
            {/* future chart */}
            {stateData ? <LineChart /> : ''}
          </section>
        </div>

        <div className="map">
          <MapComp />
        </div>
      </div>
    </>
  );
}

export default Home;
