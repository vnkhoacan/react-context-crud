import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "../pages/Home";
import Add from "../pages/Add";
import Edit from "../pages/Edit";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="/edit/:id" element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App