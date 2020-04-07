import React, { createContext, useState } from 'react';

export const StateNameContext = createContext();

export const StateNameProvider = (props) => {
  const [stateName, setStateName] = useState('AK');

  return (
    <StateNameContext.Provider value={[stateName, setStateName]}>
      {props.children}
    </StateNameContext.Provider>
  );
};
