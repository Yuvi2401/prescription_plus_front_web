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
import {MdAdd} from 'react-icons/md';

const RxScreen = ({ setKey }) => {
  const Rx = useSelector((state) => state.RxReducer);
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
