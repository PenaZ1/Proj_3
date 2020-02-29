import React, { useContext, createContext, useReducer } from "react";


//initial state of data
export const initialState = {
    takeOff: [],
    destination: []
};

//app reducer takes in state, and an actionType aka command,
// as well as a payload aka what you want to update
export function appReducer(state, [actionType, payload]) {
    switch (actionType) {
        case "SET_TAKEOFF":
            return {
                ...state,
                takeOff: payload
            };
        case "SET_DESTINATION":
            return {
                ...state,
                destination: payload
            }
        default:
            return state;
    }
};

//create a context
const AppContext = createContext();

//create a context provider that all child components can use
// gives components access to state and dispatch 
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

//tells which context to use and makes sure we dont use it anywhere we cant
const useAppContext = () => {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error("useAppContext must be used in a AppContextProvider")
    };
    return context;
}

export { ContextProvider, useAppContext };

