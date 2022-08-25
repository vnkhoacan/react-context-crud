import { useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

export const useEmployee = () => {
    const [state, dispatch] = useContext(EmployeeContext)

    return [state, dispatch]
}