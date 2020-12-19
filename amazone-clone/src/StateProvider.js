import React, { createContext, useContext, useReducer } from 'react';


// prepare the Data Layer
export const StateContext = createContext();


// Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


// pull information from the data layer
export const useStateValue = () => useContext(StateContext);