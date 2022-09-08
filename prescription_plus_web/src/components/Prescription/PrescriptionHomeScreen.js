import React, { useState, createContext } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button, Tabs, Tab } from "react-bootstrap";
import Split from "react-split";
import Medicines from "./Medicines/Medicines";
import "bootstrap/dist/css/bootstrap.min.css";
import Complaints from "./Complaints/Complaints";
import LabTest from "./LabTest/LabTest";
import Additionalinfo from "./Additionalinfo/Additionalinfo";
import RxViewer from "../RxViewer/viewer_cntrl";
import RxViewerNav from "./RxViewerNav";
import "../../App.css";
import NavBar from "../NavBar/DoctorNavBar";
import RxScreen from "./Rx Screen/Rx";

const Prescription = (props) => {
  const [key, setKey] = useState("home");
  console.log(key);
  return (
    <div className="App">
      <NavBar />
      <Split className="split" minSize={500} gutterSize={5}>
        <div>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="cTabs">
            <Tab eventKey="home" title="Preview Prescription">
              <RxScreen setKey={setKey} />
            </Tab>
            <Tab eventKey="complaints" title="Complaints">
              <Complaints />
            </Tab>
            <Tab eventKey="medicine" title="Medicines">
              <Medicines />
            </Tab>
            <Tab eventKey="labtest" title="Lab Tests">
              <LabTest />
            </Tab>
            <Tab eventKey="additioninfo" title="Additional Info">
              <Additionalinfo setKey={setKey}/>
            </Tab>
          </Tabs>
        </div>
        <div>
          <RxViewerNav />
        </div>
      </Split>
    </div>
  );
};
export default Prescription;
