import React from "react";
import { useState } from "react";
import { useEmployee } from "../hooks/useEmployee";
import { useNavigate } from "react-router-dom";
import * as actions from '../actions'

const Add = () => {
    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [state, dispatch] = useEmployee()

    const handlerAdd = () => {
        actions.addEmployee({name, age, address}).then((response) => {
            dispatch(response)
        });
        navigate("/")
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
                    onClick={handlerAdd}
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default Add