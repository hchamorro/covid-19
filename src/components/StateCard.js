import React, { useContext } from 'react';
import { StateDataContext } from '../utils/StateData';
import LongName from './LongName';
import StateResultsCard from './StateResultsCard';
import LineChart from './LineChart';

function StateCard() {
  const [stateData, setStateData] = useContext(StateDataContext);

  return (
    <>
      <div className="cardWrapper">
        <section className="card">
          <div className="cardTitle">
            <LongName />
          </div>
          <StateResultsCard />
        </section>
        <section>{stateData ? <LineChart /> : ''}</section>
      </div>
    </>
  );
}

export default StateCard;
