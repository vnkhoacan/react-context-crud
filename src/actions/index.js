import { 
    GET_ALL_EMPLOYEE,
    ADD_EMPLOYEE,
    EDIT_EMPLOYEE,
    GET_EMPLOYEE,
    DELETE_EMPLOYEE
} from "../constants";
import EmployeeDataService from '../services/employee.service';

export const getAllEmployee = async () => {
    try {
        const res = await EmployeeDataService.getAll();
        const data = await res.data.data.data;
        return {
            type: GET_ALL_EMPLOYEE,
            payload: data
        }
    } catch (err) {
        console.log(err)
    }
}

export const addEmployee = async(employee) => {
    try {
        const res = await EmployeeDataService.create(employee)
        console.log(res)
        const data = await res.data.data;
        return {
            type: ADD_EMPLOYEE,
            payload: data
        }
    } catch (err) {
        console.log(err)
    }
}

export const editEmployee = async(id, employee) => {
    try {
        const res = await EmployeeDataService.update(id, employee)
        const data = await res.data.data
        return {
            type: EDIT_EMPLOYEE,
            payload: data
        }
    } catch (err) {
        console.log(err)
    }
}

export const getEmployee = id => ({
    type: GET_EMPLOYEE,
    payload: id
})

export const deleteEmployee = async (id) => {
    try {
        await EmployeeDataService.delete(id)
        return {
            type: DELETE_EMPLOYEE,
            payload: id
        }
    } catch (err) {
        console.log(err)
    }
}