import React from 'react';
import { AllStatesDataProvider } from './AllStatesDataContext';
import { USADataProvider } from './USAData';
import { StateDataProvider } from './StateData';
import { StateNameProvider } from './StateName';

function MasterProvider(props) {
  return (
    <AllStatesDataProvider>
      <USADataProvider>
        <StateDataProvider>
          <StateNameProvider>{props.children}</StateNameProvider>
        </StateDataProvider>
      </USADataProvider>
    </AllStatesDataProvider>
  );
}

export default MasterProvider;
