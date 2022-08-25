import React, { useEffect } from "react";
import { useEmployee } from "../hooks/useEmployee";
import { Link } from "react-router-dom";
import * as actions from '../actions'

const HomePage = () => {

    const [state, dispatch] = useEmployee()
    const isEmpty = state.employees.length === 0;
    useEffect(() => {
        actions.getAllEmployee().then((response) => {
            dispatch(response)
        })
        // eslint-disable-next-line
    }, [])

    const handleDelete = (id) => {
        actions.deleteEmployee(id).then((response) => {
            dispatch(response)
        })
    }
    return (
        <div className="container mt-5">
            <Link to={"/add"} className="btn btn-primary">ADD EMPLOYEE</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { isEmpty
                    ? (state.isFetchingEmployees ? <tr><td colSpan={5}>Loading.....</td></tr> : <tr><td colSpan={5}>Empty</td></tr>)
                    : state.employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.address}</td>
                            <td>
                                <Link to={`/edit/`+employee.id} className="btn btn-info">Edit</Link>
                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HomePage