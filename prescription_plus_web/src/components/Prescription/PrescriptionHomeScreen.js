import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {Button,Tabs,Tab} from 'react-bootstrap'
import Split from "react-split";
import './index.css'
import Medicines from "./Medicines/Medicines";
import 'bootstrap/dist/css/bootstrap.min.css';
import Complaints from "./Complaints/Complaints"
import LabTest from "./LabTest/LabTest";
import Additionalinfo from "./Additionalinfo/Additionalinfo";

const Prescription =()=>  {
    return (
        <Split className="split" >
            {/* <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
                <Nav.Item>
                    <Nav.Link href="/home">Medicines</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav> */}
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
                Upload Rx
            </div>
    </Split>
    )
}
export default Prescription;