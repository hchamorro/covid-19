import React, { useState, useEffect, useContext } from 'react';
import { StateNameContext } from '../../utils/StateName';

function Home() {
  const [stateName, setStateName] = useContext(StateNameContext);

  return (
    <>
      <div>{stateName} hello world</div>
    </>
  );
}

export default Home;
