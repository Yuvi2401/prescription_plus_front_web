import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {Button,Tabs,Tab} from 'react-bootstrap'
import Split from "react-split";
import Medicines from "./Medicines/Medicines";
import 'bootstrap/dist/css/bootstrap.min.css';
import Complaints from "./Complaints/Complaints"
import LabTest from "./LabTest/LabTest";
import Additionalinfo from "./Additionalinfo/Additionalinfo";
import RxViewer from "../RxViewer/viewer_cntrl";
import RxViewerNav from "./RxViewerNav";
import "../../App.css"
import NavBar from "../NavBar/DoctorNavBar";



const Prescription =()=>  {
    
    return (
        <div className="App">
        <NavBar/>
        <Split className="split" >
            <div>
                <Tabs
                    defaultActiveKey="home"
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Home">
                    Hello EveryOne!! 
                    </Tab>
                    <Tab eventKey="medicine" title="Medicines">
                        <Medicines/>
                    </Tab>
                    <Tab eventKey="complaints" title="Complaints">
                        <Complaints/>
                    </Tab>
                    <Tab eventKey="labtest" title="Lab Tests">
                        <LabTest/>
                    </Tab>
                    <Tab eventKey="additioninfo" title="Additional Info">
                        <Additionalinfo/>
                    </Tab>
                </Tabs>
                </div>
            <div>
                <RxViewerNav/>
                
            </div>
    </Split>
    </div>
    )
}
export default Prescription;