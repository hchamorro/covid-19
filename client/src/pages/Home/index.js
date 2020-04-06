import React, { useState, useEffect, useContext } from 'react';
import { StateNameContext } from '../../utils/StateName';
import { USADataContext } from '../../utils/USAData';
import { AllStatesDataContext } from '../../utils/AllStatesData';
import { StateDataContext } from '../../utils/StateData';
import StateMenu from '../../components/StateMenu';

function Home() {
  const [stateName, setStateName] = useContext(StateNameContext);

  return (
    <>
      <div>{stateName} hello world</div>
      <StateMenu></StateMenu>
    </>
  );
}

export default Home;