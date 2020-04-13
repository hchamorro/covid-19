import React, { useContext } from 'react';
import { USADataContext } from '../../utils/USAData';
import formatNumber from '../formatNumber';

function USResults() {
  const [USAData, setUSAData] = useContext(USADataContext);

  return (
    <>
      {USAData ? (
        <>
          <div>
            <div>
              <div>
                <strong>{formatNumber(USAData[0].total)}</strong> people have
                been tested.
              </div>
              <div>
                <strong>{formatNumber(USAData[0].positive)}</strong> have tested
                positive.
              </div>

              {USAData[0].death ? (
                <div>
                  <strong>{formatNumber(USAData[0].death)}</strong> have died.
                </div>
              ) : (
                ''
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
