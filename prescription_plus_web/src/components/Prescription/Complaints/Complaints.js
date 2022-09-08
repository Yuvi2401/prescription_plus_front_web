import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setComplaints, removeComplaints, updateComplaints } from "../../../redux/actions";
import {Button,Col,Form,Row,ListGroup,Collapse,InputGroup,ButtonGroup,Card, Dropdown, DropdownButton} from 'react-bootstrap';
import {server_url} from "../../../config";
import { FiSearch } from "react-icons/fi";
import { GiMedicines } from "react-icons/gi";
import { IoChevronDown } from "react-icons/io5";
import { MdModeEdit, MdDelete } from "react-icons/md";

const Complaints = () =>{
    const dispatch = useDispatch()
    const [symptoms, setSymptoms] = useState([])
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(false);
    const [severity, setSeverity] = useState("MILD");
    const [complaint,setComplaint] = useState([]);
    const [open, setOpen] = useState(false);
    const [duration, setDuration] = useState("1");
    const [durationtype,setDurationType] = useState("Days")
    const [advice,setAdvice]= useState("");
    const Rx = useSelector(state=>state.RxReducer);

    var Rxsymptoms = []
    if(Rx.complaint){
      Rxsymptoms = Rx.complaint;
    }

    const Severity = [
        { name: 'MILD', value: '1' },
        { name: 'MODERATE', value: '2' },
        { name: 'SEVERE', value: '3' },
      ];
    const Duration= [
        { name: 'Days', value: '1' },
        { name: 'Weeks', value: '2' },
        { name: 'Months', value: '3' },
        { name: 'Year', value: '4' }
      ];
      const testJson = [
        {
          key: 1,
          value: "Fever",
        },
        {
          key: 2,
          value: "Headache",
        },
        {
          key: 3,
          value: "Stomach Ache",
        },
        {
          key: 4,
          value: "Back pain",
        },
      ];
    useEffect(() => {
    const fetchSymptoms = async () => {
        setLoading(true);
        var url = `${server_url}/search/symptoms?data=${query}`
        let res = await axios.get(url);
        res = res.data;
        res = res.data;
        
        let symptomData = []
        for (let [k, val] of Object.entries(res)) {
            
            symptomData.push({
            key: val['Identifier'],
            value: val['Brand Name']});
            
        }
        setSymptoms(symptomData)
        // setSymptoms(testJson);
        setLoading(false);
        };
        if (query.length > 2) fetchSymptoms();
        if(query.length <= 0)setSymptoms([])
    }, [query]);

    const onPressHandler = (key,value) =>{
        setComplaint({term:value,key})
        setSymptoms([])
        setOpen(!open)
        setSearch(!search)
    }

    const removesymptom = (k) =>{
        dispatch(removeComplaints(k));
    } 
    
    const AddComplaints = ()=>{
        dispatch(setComplaints({
            sctid: complaint.key,
            term: complaint.term, 
            severity: severity,
            duration: duration, 
            durationtype: durationtype, 
            additionalinfo: advice
        }));
        var comp = {
            sctid: complaint.key,
            term: complaint.term, 
            severity: severity,
            duration: duration, 
            durationtype: durationtype, 
            additionalinfo: advice
        }
        console.log(comp)
        setDurationType("")
        setAdvice("")
        setSeverity("")
        setDuration("")
        setComplaint([])
        setOpen(!open)
        setSearch(!search)
        setSymptoms([])
    }
      
    return (
        <div className="leftPanel">
               <div className="medsContainer">
        {!search && (
          <div className="search">
            <div className="search-inputSec">
              <FiSearch className="search-inputSec-icon" />
              <input
                type="text"
                className="search-inputSec-text"
                placeholder="Search Symptoms..."
                onChange={(e) => setQuery(e.target.value)}
                disabled={search}
              />
            </div>
            {!loading && symptoms.length > 0 && query.length > 2 && (
              <ul className="search-resultSec">
                {symptoms.slice(0, 6).map((item) => {
                  return (
                    <li
                      className="search-resultSec-item"
                      onClick={() => {
                        onPressHandler(item.key, item.value);
                        setQuery("");
                      }}
                    >
                      {item.value}
                    </li>
                  );
                })}
              </ul>
            )}
            {loading && (
              <div className="search-loadingSec">
                <div class="lds-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
        )}
        {Rxsymptoms.length === 0 && !search && (
          <div className="noMeds">
            <div className="noMeds-icon">
              <GiMedicines />
            </div>
            <div className="noMeds-heading">No Symptoms assigned</div>
            <div className="noMeds-subHeading">
              Search and select details to assign Symptoms to patient
            </div>
          </div>
        )}
        {!search && Rxsymptoms.length > 0 && (
          <div className="assignedMeds">
            <div className="assignedMeds-title">Complaints :</div>
            <ul className="assignedMeds-list">
              {Rxsymptoms.map((val) => {
                return (
                  <li className="assignedMeds-list-item" key={val.medSCTID}>
                    <div className="head">
                      <div className="head-title">{val.term}</div>
                      <div className="head-icons">
                       
                        <MdDelete
                          className="delete"
                          onClick={()=>{removesymptom(val.term)}}
                        />
                        
                      </div>
                    </div>
                   
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {open && (
        <div className="medsEditSec">
          <div className="medsEditSec-title">{complaint.term}</div>
          <div className="medsEditSec-infoContainer">
            <div className="medsEditSec-info">
              <div className="medsEditSec-info-label">Timing:</div>
              <div className="medsEditSec-info-input">
                <select
                  className="custom-select"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                >
                  <option value={null}>Select...</option>
                  {Severity.map((val) => (
                    <option value={val.name}>{val.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="medsEditSec-info">
              <div className="medsEditSec-info-label">Duration:</div>
              <div className="medsEditSec-info-input">
                <input
                  className="custom-input custom-input-number"
                  type="number"
                  placeholder="Enter..."
                  onChange={(e) => setDuration(e.currentTarget.value)}
                  value={Rxsymptoms.duration}
                />
                <select
                  className="custom-select custom-select-small"
                  value={durationtype}
                  onChange={(e) => setDurationType(e.target.value)}
                >
                  <option value={null}>Select...</option>
                  {Duration.map((val) => (
                    <option value={val.name}>{val.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="medsEditSec-info">
              <div className="medsEditSec-info-input medsEditSec-info-input-textarea">
                <textarea
                  name=""
                  id=""
                  rows="4"
                  placeholder="Advice..."
                  className="textarea"
                  onChange={(e) => setAdvice(e.currentTarget.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="medsEditSec-actions">
            <div className="button button-submit" onClick={AddComplaints}>
              Submit
            </div>
            <div className="button button-cancel">Cancel</div>
          </div>
        </div>
      )}
       {/* <>
        <Collapse in={open}>
        <div className="medsEditSec">
        <Card style={{ width: 'auto', flex: 'top' }}>
        <Card.Body>
         <Form>
            <Form.Group className="mb-3" controlId="formGridSymptom">
              <Form.Label><h3>Symptoms</h3></Form.Label>
              <InputGroup.Text>{complaint.term}</InputGroup.Text>
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formGridSeverity">
                <Col><Form.Label><h3>Severity: {severity}</h3></Form.Label></Col>
                <ButtonGroup className="mb-3">
                    {Severity.map((val) => (
                    <Button variant="secondary" onClick={()=>setSeverity(val.name)}>
                        {val.name}
                    </Button>
                    ))}
            </ButtonGroup>
        <br />
        </Form.Group>
          <Form.Group className="mb-3" controlId="formGridDuration">
            <Form.Label><h3>Duration</h3></Form.Label>
            <InputGroup className="mb-3">
            <Form.Control placeholder="" onChange={(e) => setDuration(e.currentTarget.value)} />
            <InputGroup.Text id="basic-addon2">{durationtype}</InputGroup.Text>
            </InputGroup>
            <br />
            <ButtonGroup className="mb-3">
                {Duration.map((val) => (
                  <Button variant="secondary" onClick={()=>setDurationType(val.name)}>
                    {val.name}
                  </Button>
                ))}
      </ButtonGroup>
      <br />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAdditionalInfo">
            <Form.Label>Advice</Form.Label>
            <Form.Control placeholder="" onChange={(e) => setAdvice(e.currentTarget.value)}/>
          </Form.Group>

          <Button variant="primary" onClick={AddComplaints}>
            Submit
          </Button>
          </Form>  
          </Card.Body>
          </Card>
          </div>
          </Collapse>
     </> */}
      </div>
    )
}

export default Complaints;