import React, { useEffect, useContext } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import { StateNameContext } from '../../utils/StateName';
import { USADataContext } from '../../utils/USAData';
import { AllStatesDataContext } from '../../utils/AllStatesData';
import { StateDataContext } from '../../utils/StateData';
import StateMenu from '../../components/StateMenu';
import MapComp from '../../components/MapComp';
import './style.css';
import StateCard from '../../components/StateCard';
import UScard from '../../components/UScard';

function Home(props) {
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
    Axios.get('https://covidtracking.com/api/us/daily').then((res) =>
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
        <Route path={`/states`} component={StateCard} />
        <Route exact path={[`/`, '/covid-19']} component={UScard} />

        <div className="map">
          <MapComp />
        </div>
      </div>
    </>
  );
}

export default Home;
