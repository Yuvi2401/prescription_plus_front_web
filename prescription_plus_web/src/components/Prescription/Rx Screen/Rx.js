import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useContext } from "react";
import { Button, Form, Col, Card } from "react-bootstrap";
import { StateContext, Prescription } from "../PrescriptionHomeScreen";
import { IoIosSettings } from "react-icons/io";
import { GiTestTubes } from "react-icons/gi";
import { BsCalendarDateFill, BsCardChecklist } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { GiMedicines } from "react-icons/gi";
import axios from "axios";
import {MdAdd} from 'react-icons/md';
import { server_url } from "../../../config";

const RxScreen = ({ setKey }) => {
  const dispatch = useDispatch()
  const Rx = useSelector(state=>state.RxReducer);
  console.log(Rx)
  var Rxsymptoms = [];
  var Rxmedicines = [];
  var Rxadvice = Rx.advice;
  var Rxfollowupdate = Rx.followup;
  if (Rx.complaint) {
    Rxsymptoms = Rx.complaint;
  }
  if (Rx.medicine) {
    Rxmedicines = Rx.medicine;
  }
  var Rxlabtest = [];
  if (Rx.test) {
    Rxlabtest = Rx.test;
  }
  const createRx = async () =>{

    console.log("hello")
  let complaint = []
  let medicine = []
  let test = []

  for(var i =0; i<Rx.complaint.length; i++){
    complaint.push({"term":Rx.complaint[i].term,
    "sctid": Rx.complaint[i].sctid,
    "duration":Rx.complaint[i].duration.toString()+" "+Rx.complaint[i].durationtype.toString(),
    "severity": Rx.complaint[i].severity,
    "additional_info":Rx.complaint[i].additional_info})
  }
  for(var i=0; i<Rx.medicine.length; i++){
    medicine.push(
      {
        "term":Rx.medicine[i].term,
          "sctid":Rx.medicine[i].medSCTID,
          "fkid":"",
          "dosage":Rx.medicine[i].dosage,
          "duration":{
              "frequency": parseInt(Rx.medicine[i].duration),
              "type": Rx.medicine[i].durationtype.toString()
          },
          "when":Rx.medicine[i].when,
          "quantity":Rx.medicine[i].quantity,
          "additional_info":Rx.medicine[i].additional_info
      }
    )
  }
  for(var i=0; i<Rx.test.length; i++){
    test.push(
      {
        "term":Rx.test[i].term,
        "id":"",
        "additional_info":""
          
      }
    )
  }
  const options = {
      url: `${server_url}/rx/addRx`,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        "doctor_details":{
          "Id": Rx.doctor.mci,
          "mobile": Rx.doctor.mobile,
          "firstname": Rx.doctor.firstname,
          "lastname":Rx.doctor.lastname,
          "degree":Rx.doctor.degree,
          "council": {
              "id": Rx.doctor.councilid,
              "state": Rx.doctor.councilstate
          },
          "signature":Rx.doctor.signature,
          "address": {
              "city": Rx.doctor.addresscity,
              "locality": Rx.doctor.addresslocality,
              "pincode": Rx.doctor.addresspincode,
              "state": Rx.doctor.addressstate
          }
      },
      "patient_details":{
          "address": {
              "city": Rx.patient.addresscity,
              "locality": Rx.patient.addresslocality,
              "pincode": Rx.patient.addresspincode,
              "state": Rx.patient.addressstate
          },
          "age": Rx.patient.age,
          "Id": Rx.patient.mobile,
          "mobile": Rx.patient.mobile,
          "firstname":Rx.patient.firstname,
          "lastname":Rx.patient.lastname,
          "sex": Rx.patient.sex,
          "unique_health_id": Rx.patient.unique_health_id
      },
      "complaints": complaint,
      "medicine":medicine,
      "advice":Rx.advice,
      "labtest":test,
      "follow_up_date":{
          "next":0,
          "type":"",
          "date":Rx.followup
      },
      "pdf":"",
      "picture":""
  }
}
  

  }
  return (
    <>
      <div className="leftPanel">
        <div className="medsContainer">
          <div className="assignedComplaints">
            <div className="assignedComplaints-title">
              <div className="text">Complaints:</div>
              {Rxsymptoms.length > 0 && <IoIosSettings className="icon" onClick={()=>setKey("complaints") }/>}
            </div>
            {Rxsymptoms.length > 0 ? (
              <ul className="assignedComplaints-list">
                {Rxsymptoms.map((val) => {
                  return (
                    <li
                      className={`assignedComplaints-list-item ${
                        val.severity === "MODERATE"
                          ? "assignedComplaints-list-item-moderate"
                          : ""
                      } ${
                        val.severity === "SEVERE"
                          ? "assignedComplaints-list-item-severe"
                          : ""
                      }`}
                      key={val.sctid}
                    >
                      <div className="title">{val.term}</div>
                      <div className="severity">{val.severity}</div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="empty assignedComplaints-empty">
                <div className="icon">
                  <MdAdd onClick={()=>setKey("complaints") }/>
                </div>
                <div className="text">No complaints registered!</div>
              </div>
            )}
          </div>
          <div className="assignedMeds">
            <div className="assignedMeds-title">
              <div className="text">Medicines :</div>
              {Rxmedicines.length > 0 && <IoIosSettings className="icon" onClick={()=>setKey("medicine") }/>}
            </div>
            {Rxmedicines.length > 0 ? (
              <ul className="assignedMeds-list">
                {Rxmedicines.map((val) => {
                  return (
                    <li className="assignedMeds-list-item" key={val.medSCTID}>
                      <div className="head">
                        <div className="head-title">{val.term}</div>
                      </div>

                      <div className="details">
                        <div className="details-stats">
                          <div className="details-stats-item">
                            <div className="heading">{val.quantity}</div>
                            <div className="subHeading">Quantity</div>
                          </div>
                          <div className="details-stats-item">
                            <div className="heading">{val.dosage}</div>
                            <div className="subHeading">Dosage</div>
                          </div>
                          <div className="details-stats-item">
                            <div className="heading">
                              {val.duration + " " + val.durationtype}
                            </div>
                            <div className="subHeading">Duration</div>
                          </div>
                          <div className="details-stats-item">
                            <div className="heading">{val.when}</div>
                            <div className="subHeading">Timing</div>
                          </div>
                        </div>
                        {val.additional_info && (
                          <div className="details-advice">
                            * {val.additional_info}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="empty assignedMeds-empty">
                <div className="icon">
                  <MdAdd onClick={()=>setKey("medicine") }/>
                </div>
                <div className="text">No medicine assigned!</div>
              </div>
            )}
          </div>
          <div className="assignedTests">
            <div className="assignedTests-title">
              <div className="text">Lab Tests :</div>
              {Rxlabtest.length > 0 && <IoIosSettings className="icon" onClick={()=>setKey("labtest") }/>}
            </div>
            {Rxlabtest.length > 0 ? (
              <ul className="assignedTests-list">
                {Rxlabtest.map((val, index) => {
                  return (
                    <li
                      className="assignedTests-list-item"
                      key={"prevLabTest" + val.term + index}
                    >
                      <div className="title">{val.term}</div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="empty assignedTests-empty">
                <div className="icon">
                  <MdAdd onClick={()=>setKey("labtest") }/>
                </div>
                <div className="text">No lab test assigned!</div>
              </div>
            )}
          </div>
          <div className="additionalPrev">
            <div className="additionalPrev-title">
              <div className="text">Additional :</div>
              <IoIosSettings className="icon" onClick={()=>setKey("additioninfo") }/>
            </div>
            <ul className="additionalPrev-list">
              <li className="additionalPrev-list-item">
                <div className="head">
                  <div className="head-title">Advice</div>
                </div>
                <div className="details">
                  {Rxadvice.length > 0 ? (
                    <div className="advice">{Rxadvice}</div>
                  ) : (
                    <div className="empty">
                      <div className="icon">
                        <MdAdd onClick={()=>setKey("additioninfo") }/>
                      </div>
                      <div className="text">No advice given!</div>
                    </div>
                  )}
                </div>
              </li>
              <li className="additionalPrev-list-item">
                <div className="head">
                  <div className="head-title">Follow-up Date</div>
                </div>
                <div className="details">
                  {Rxfollowupdate ? (
                    <div className="followup">{Rxfollowupdate}</div>
                  ) : (
                    <div className="empty">
                      <div className="icon">
                        <MdAdd onClick={()=>setKey("additioninfo") }/>
                      </div>
                      <div className="text">No followup date set!</div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <br/>
        <Button variant="primary" onClick={createRx}>
            Submit
          </Button>
      </div>
      {/* <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label><h3>Complaints</h3></Form.Label>
          <br />
            {Rxsymptoms.map((val) => (
                <Card >
                <Card.Body>
                  <Card.Title>{val.term}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          <br/>
          <Button variant="secondary" size="sm" onClick={()=>setKey("complaints") }>Add Complaints</Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label><h3>Medicines</h3></Form.Label>
          <br />
        {Rxmedicines.map((val) => (
                <Card >
                <Card.Body>
                  <Card.Title>{val.term}</Card.Title>
                </Card.Body>
              </Card>
            ))}
      <br />
          <Button variant="secondary" size="sm" onClick={()=>setKey("medicine")}>Add Medicines</Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label><h3>Lab Test</h3></Form.Label>
          <br/>
          {Rxlabtest.map((val) => (
                <Card >
                <Card.Body>
                  <Card.Title>{val.term}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          <br/>
          <Button variant="secondary" size="sm" onClick={()=>setKey("labtest")}>Add Lab Test</Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label><h3>Advice</h3></Form.Label>
          <br />
          <Form.Text>{Rxadvice}</Form.Text>
          <br/>
          <Button variant="secondary" size="sm" onClick={()=>setKey("additioninfo")}>Edit Advice</Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label><h3>Follow Up Date</h3></Form.Label>
          <br />
          <Form.Text>{Rxfollowupdate}</Form.Text>
          <br/>
          <Button variant="secondary" size="sm" onClick={()=>setKey("additioninfo")}>Edit Follow Up Date</Button>
        </Form.Group>
      </Form> */}
    </>
  );
};

export default RxScreen;
