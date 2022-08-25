import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, GET_ALL_EMPLOYEE } from "../constants"

const initialState = {
    employees: [],
    isFetchingEmployees: true
}

const EmployeeReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_EMPLOYEE:
            return {
                ...state,
                employees: action.payload,
                isFetchingEmployees: false,
            }
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter((employee) => employee.id !== action.payload)
            }
        case EDIT_EMPLOYEE:
            let updatedEmployee = state.employees.map((employee) => {
                if(employee.id === Number(action.payload.id)) {
                    return {
                        ...employee,
                        name: action.payload.name,
                        age: action.payload.age,
                        address: action.payload.address,
                    }
                }
                else {
                    return employee
                }
            })
            return {
                ...state,
                employees: updatedEmployee
            }
        default:
            throw new Error('Invalid action.')
    }
}

export { initialState }
export default EmployeeReducer