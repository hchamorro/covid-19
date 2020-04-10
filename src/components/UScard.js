import React, { useContext } from 'react';
import { USADataContext } from '../utils/USAData';
import USResultsCard from './USResultsCard';
import USLineChart from './USLineChart';

function UScard() {
  const [USAData, setUSAStateData] = useContext(USADataContext);

  return (
    <>
      <div className="cardWrapper">
        <section className="card">
          <div className="cardTitle">
            <strong>United States</strong>
          </div>
          <USResultsCard />
        </section>
        <section>{USAData ? <USLineChart /> : ''}</section>
      </div>
    </>
  );
}

export default UScard;
