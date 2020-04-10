import React, { useContext } from 'react';
import { StateDataContext } from '../utils/StateData';
import { USADataContext } from '../utils/USAData';
import LongName from './LongName';
import StateResultsCard from './StateResultsCard';
import LineChart from './StateLineChart';

function UScard() {
  const [stateData, setStateData] = useContext(StateDataContext);
  const [USAData, setUSAStateData] = useContext(USADataContext);

  return (
    <>
      <div className="cardWrapper">
        <section className="card">
          <div className="cardTitle">
            <strong>United States</strong>
          </div>
          <StateResultsCard />
        </section>
        <section>{stateData && USAData ? <LineChart /> : ''}</section>
      </div>
    </>
  );
}

export default UScard;
