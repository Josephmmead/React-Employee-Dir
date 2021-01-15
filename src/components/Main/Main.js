import React from 'react';
import "./Main.css"
import NavBar from '../NavBar/NavBar'
import EmployeeArea from "../EmployeeArea/EmployeeArea"


function Main() {

    return (
        <div className="Main">
            <NavBar />
            <EmployeeArea />
        </div>
    )
    
}

export default Main;