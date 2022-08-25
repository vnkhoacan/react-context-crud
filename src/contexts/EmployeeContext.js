import { createContext, useReducer } from "react";
import EmployeeReducer, { initialState } from "../reducers";

export const EmployeeContext = createContext()

const EmployeeContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(EmployeeReducer, initialState)

    return (
        <EmployeeContext.Provider value={[state, dispatch]}>
            { children }
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider