import React, { useContext } from 'react';
import { USADataContext } from '../../utils/USAData';

function USResults() {
  const [USAData, setUSAData] = useContext(USADataContext);

  return (
    <>
      {USAData ? (
        <>
          <div>
            <div>
              <div>
                <strong>{USAData[0].total}</strong> people have been tested.
              </div>
              <div>
                <strong>{USAData[0].positive}</strong> people have tested
                positive.
              </div>
              {USAData[0].hospitalizedCumulative ? (
                <div>
                  <strong>{USAData[0].hospitalizedCumulative}</strong> total
                  hospitalized cumulatively.
                </div>
              ) : (
                ''
              )}
              {USAData[0].hospitalizedCurrently ? (
                <div>
                  <strong>{USAData[0].hospitalizedCurrently}</strong> are
                  currently hospitalized.
                </div>
              ) : (
                ''
              )}
              {USAData[0].death ? (
                <div>
                  <strong>{USAData[0].death}</strong> have died.
                </div>
              ) : (
                ''
              )}
              {USAData[0].recovered ? (
                <div>
                  <strong>{USAData[0].recovered}</strong> have recovered.
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

export default USResults;
