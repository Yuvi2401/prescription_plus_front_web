import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {Button,Tabs,Tab} from 'react-bootstrap'
import Split from "react-split";
import './index.css'
import Medicines from "./Medicines/Medicines";
import 'bootstrap/dist/css/bootstrap.min.css';
import RxViewer from "../RxViewer/viewer_cntrl";
import PDFViewer from "../RxViewer/pdf_viewer";
import { useSelector } from "react-redux";
import CurrentPatient from "../Patient/currentPatient";

const RxViewerNav =()=>  {
   
    return (
        <div>
            <Tabs
                defaultActiveKey="Patient Info"
                className="cTabs"
                >
                <Tab eventKey="Patient Info" title="Patient Info">
                    <CurrentPatient/>
                </Tab>
                <Tab eventKey="past_records" title="Past medical records">
                    <RxViewer />
                </Tab>
            </Tabs>
        </div>
           

    )
}
export default RxViewerNav;