import React, { useContext } from 'react';
import { StateDataContext } from '../../utils/StateData';
import formatNumber from '../formatNumber';

function StateResults() {
  const [stateData, setStateData] = useContext(StateDataContext);

  return (
    <>
      {stateData ? (
        <>
          <div>
            <div>
              <div>
                <strong>{formatNumber(stateData[0].total)} </strong>people have
                been tested.
              </div>
              <div>
                <strong>{formatNumber(stateData[0].positive)}</strong> people
                have tested positive.
              </div>
              {stateData[0].hospitalizedCumulative ? (
                <div>
                  <strong>
                    {formatNumber(stateData[0].hospitalizedCumulative)}
                  </strong>{' '}
                  total hospitalized cumulatively.
                </div>
              ) : (
                ''
              )}
              {stateData[0].hospitalizedCurrently ? (
                <div>
                  <strong>
                    {formatNumber(stateData[0].hospitalizedCurrently)}
                  </strong>{' '}
                  are currently hospitalized.
                </div>
              ) : (
                ''
              )}
              {stateData[0].death ? (
                <div>
                  <strong>{formatNumber(stateData[0].death)}</strong> have died.
                </div>
              ) : (
                ''
              )}
              {stateData[0].recovered ? (
                <div>
                  <strong>{formatNumber(stateData[0].recovered)}</strong> have
                  recovered.
                </div>
              ) : (
                'No info on recovery available at this time.'
              )}
            </div>
          </div>
        </>
      ) : (
        <div>'Waiting for information'</div>
      )}
    </>
  );
}

export default StateResults;
