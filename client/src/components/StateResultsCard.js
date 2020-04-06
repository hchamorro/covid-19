import React, { useState, useContext } from 'react';
import { USADataContext } from '../utils/USAData';
import { StateDataContext } from '../utils/StateData';
import { StateNameContext } from '../utils/StateName';

function StateResults(props) {
  const [stateName, setStateName] = useContext(StateNameContext);
  const [USAData, setUSAData] = useContext(USADataContext);
  const [stateData, setStateData] = useContext(StateDataContext);
  const [showChart, setShowChart] = useState(false);

  const button = {
    display: 'inline block',
    marginTop: '0.5rem',
    border: '1px solid',
    borderRadius: '5%',
  };

  return (
    <>
      {console.log(stateData)}
      {stateData && USAData ? (
        <>
          <div>
            <div>
              <div>
                <strong>{stateData[0].total} </strong>people have been tested.
              </div>
              <div>
                <strong>{stateData[0].positive}</strong> people have tested
                positive.
              </div>
              {stateData[0].hospitalizedCumulative ? (
                <div>
                  <strong>{stateData[0].hospitalizedCumulative}</strong> total
                  hospitalized cumulatively.
                </div>
              ) : (
                ''
              )}
              {stateData[0].hospitalizedCurrently ? (
                <div>
                  <strong>{stateData[0].hospitalizedCurrently}</strong> are
                  currently hospitalized.
                </div>
              ) : (
                ''
              )}
              {stateData[0].death ? (
                <div>
                  <strong>{stateData[0].death}</strong> have died.
                </div>
              ) : (
                ''
              )}
              {stateData[0].recovered ? (
                <div>
                  <strong>{stateData[0].recovered}</strong> have recovered.
                </div>
              ) : (
                'No info on recovery available at this time.'
              )}

              <br />
              {/* <div>
                {Math.floor(
                  (stateData[0].positive / USAData[0].positive) * 100
                )}
                % of all positive cases across the United States.
              </div> */}
              <button style={button} onClick={() => setShowChart(!showChart)}>
                {stateName}: {showChart ? 'Hide' : 'See More'}
              </button>
              {showChart ? 'will be chart' : ''}
            </div>
          </div>
        </>
      ) : (
        <div>
          'Waiting for information'
          <button style={button} onClick={() => setShowChart(!showChart)}>
            {stateName}: {showChart ? 'Hide' : 'See More'}
          </button>
          {showChart ? 'will be chart' : ''}
        </div>
      )}
    </>
  );
}

export default StateResults;
