import React, { useEffect } from "react";
import { useState } from "react";
import { useEmployee } from "../hooks/useEmployee";
import { useNavigate, useParams } from "react-router-dom";
import * as actions from '../actions'

const Edit = () => {

    let navigate = useNavigate();
    const { id } = useParams()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [state, dispatch] = useEmployee()

    useEffect(() => {
        let employee = state.employees.find(employee => employee.id === Number(id));
        setName(employee.name);
        setAge(employee.age);
        setAddress(employee.address);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handlerEdit = () => {
        actions.editEmployee(id, {name, age, address}).then((response) => {
            dispatch(response)
        })
        navigate('/')
    }

    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={handlerEdit}
                >
                    Edit
                </button>
            </form>
        </div>
    )
}

export default Edit