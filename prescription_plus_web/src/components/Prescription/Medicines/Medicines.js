import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setMedicine,
  removeMedicine,
  updateMedicine,
} from "../../../redux/actions";
import {
  Button,
  Col,
  Form,
  Row,
  ListGroup,
  Collapse,
  InputGroup,
  ButtonGroup,
  Card,
} from "react-bootstrap";
import { server_url } from "../../../config";
import { FiSearch } from "react-icons/fi";
import { GiMedicines } from "react-icons/gi";
import { IoChevronDown } from "react-icons/io5";
import { MdModeEdit, MdDelete } from "react-icons/md";

const Medicines = ({setKey}) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [med, setMed] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [dosage, setDosage] = useState("1-1-1");
  const [duration, setDuration] = useState("1");
  const [durationtype, setDurationType] = useState("Days");
  const [when, setWhen] = useState("After Food");
  const [advice, setAdvice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [active, setActive] = useState("");

  const Rx = useSelector((state) => state.RxReducer);

  let Rxmedicines = [];
  if (Rx.medicine) {
    Rxmedicines = Rx.medicine;
  }

  const Dosage = [
    { name: "1-1-1", value: "1" },
    { name: "1-1-0", value: "2" },
    { name: "1-0-0", value: "3" },
    { name: "1-0-1", value: "4" },
    { name: "0-1-1", value: "5" },
    { name: "0-1-0", value: "6" },
    { name: "0-0-1", value: "7" },
  ];
  const Duration = [
    { name: "Days", value: "1" },
    { name: "Weeks", value: "2" },
    { name: "Months", value: "3" },
    { name: "Year", value: "4" },
  ];

  const When = [
    { name: "Before Food", value: "1" },
    { name: "After Food", value: "2" },
  ];
  const testJson = [
    {
      key: 1,
      value: "Dolo",
    },
    {
      key: 2,
      value: "Finasteride",
    },
    {
      key: 3,
      value: "Synthroid",
    },
    {
      key: 4,
      value: "Crestor",
    },
    {
      key: 5,
      value: "Lantus",
    },
    {
      key: 6,
      value: "Spiriva",
    },
    {
      key: 7,
      value: "Januvia",
    },
  ];

  useEffect(() => {
    const fetchMedicine = async () => {
      setLoading(true);
      const url = `${server_url}/search/medicine?data=${query}`
      let res = await axios.get(url);
      console.log(res)
      res = res.data;
      res = res.data;
        
        let medicine = []
        medicine.push({key:"manual",value:query})
        for (let [k, val] of Object.entries(res)) {

            medicine.push({
            key: val['Identifier'],
            value: val['Brand Name']});
    
          }
      setPosts(medicine);
      // setPosts(testJson);
      setLoading(false);
    };
    if (query.length > 2) fetchMedicine();
    if (query.length < 2) setPosts([]);
  }, [query]);

  const onPressHandler = (key, value) => {
    setMed({ key, value });
    setPosts([]);
    setOpen(!open);
    setSearch(!search);
  };

  const removemedicine = (k) => {
    dispatch(removeMedicine(k));
  };

  const UpdateMedicineDetails = (value) => {
    removemedicine(value.term);
    setDosage(value.dosage);
    setDuration(value.duration);
    setWhen(value.when);
    setDurationType(value.durationtype);
    setAdvice(value.additional_info);
    setQuantity(value.quantity);
    setMed({ key: value.medSCTID, value: value.term });
    setOpen(!open);
    setSearch(!search);
  };
  const addMedicine = () => {
    console.log("----addMedicine-----");
    dispatch(
      setMedicine({
        medSCTID: med.key,
        term: med.value,
        dosage: dosage,
        duration: duration,
        durationtype: durationtype,
        when: when,
        quantity: quantity,
        additional_info: advice,
      })
    );
    setDosage("");
    setDuration("");
    setWhen("");
    setOpen(!open);
    setDurationType("");
    setAdvice("");
    setQuantity("");
    setSearch(!search);
  };

  const toggleMedsView = (medID) => {
    if (active === medID) {
      setActive("");
      return;
    }
    setActive(medID);
  };

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
                placeholder="Search medicines"
                onChange={(e) => setQuery(e.target.value)}
                disabled={search}
              />
            </div>
            {!loading && posts.length > 0 && query.length > 2 && (
              <ul className="search-resultSec">
                {posts.slice(0, 6).map((item) => {
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
        {Rxmedicines.length === 0 && !search && (
          <div className="noMeds">
            <div className="noMeds-icon">
              <GiMedicines />
            </div>
            <div className="noMeds-heading">No medicine assigned</div>
            <div className="noMeds-subHeading">
              Search and select details to assign medicines to patient
            </div>
          </div>
        )}
        {!search && Rxmedicines.length > 0 && (
          <div className="assignedMeds">
            <div className="assignedMeds-title">Medicines assigned :</div>
            <ul className="assignedMeds-list">
              {Rxmedicines.map((val) => {
                return (
                  <li className="assignedMeds-list-item" key={val.medSCTID}>
                    <div className="head">
                      <div className="head-title">{val.term}</div>
                      <div className="head-icons">
                        <MdModeEdit
                          className="edit"
                          onClick={() => {
                            UpdateMedicineDetails(val);
                          }}
                        />
                        <MdDelete
                          className="delete"
                          onClick={() => {
                            removemedicine(val.term);
                          }}
                        />
                        <IoChevronDown
                          className="showExtra"
                          onClick={() => toggleMedsView(val.medSCTID)}
                        />
                      </div>
                    </div>
                    {active === val.medSCTID && (
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
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {open && (
        <div className="medsEditSec">
          <div className="medsEditSec-title">{med.value}</div>
          <div className="medsEditSec-infoContainer">
            <div className="medsEditSec-info">
              <div className="medsEditSec-info-label">Dosage:</div>
              <div className="medsEditSec-info-input">
                <select
                  value={dosage}
                  onChange={(e) => setDosage(e.target.value)}
                  className="custom-select"
                >
                  <option value={null}>Select...</option>
                  {Dosage.map((val) => (
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
                  value={Rxmedicines.duration}
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
              <div className="medsEditSec-info-label">Timing:</div>
              <div className="medsEditSec-info-input">
                <select
                  className="custom-select"
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                >
                  <option value={null}>Select...</option>
                  {When.map((val) => (
                    <option value={val.name}>{val.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="medsEditSec-info">
              <div className="medsEditSec-info-label">Quantity:</div>
              <div className="medsEditSec-info-input">
                <input
                  className="custom-input custom-input-number"
                  type="number"
                  placeholder="Enter..."
                  onChange={(e) => setQuantity(e.currentTarget.value)}
                  value={Rxmedicines.duration}
                />
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
            <div className="button button-submit" onClick={addMedicine}>
              Submit
            </div>
            <div className="button button-cancel">Cancel</div>
          </div>
        </div>
      )}
       <Row>
      <Col>
      <Button variant="success" onClick={()=>setKey("home")}>
        Preview
      </Button>
      </Col>
      <Col><Button variant="success" onClick={()=>setKey("labtest")}>
        Next
      </Button>
      </Col>
      </Row>
      {/* <input type='text' 
      placeholder="Search Medicines.." 
      className="search" 
      onChange={(e) => setQuery(e.target.value)}
      disabled = {search}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts.map((item) => 
        <ListGroup defaultActiveKey={item.key}>
          <ListGroup.Item action onClick={()=>{
            onPressHandler(item.key, item.value)
          }}>
          <h6>{item.value}</h6>
          </ListGroup.Item>
        </ListGroup>
          )
      )}
      <br />
        {Rxmedicines.map((val) => (
                <Card >
                <Card.Body>
                  <Card.Title>{val.term}</Card.Title>
                  <Button variant="secondary" disabled = {search} onClick={()=>{removemedicine(val.term)}} >Remove Medicine</Button>
                  <Button variant="secondary" disabled = {search} onClick={()=>{UpdateMedicineDetails(val)}} >Edit Medicine</Button>
                </Card.Body>
              </Card>
            ))}
      <br />
       <>
          <Collapse in={open}>
        <div className="centered-div-auto">
        <Card style={{ width: 'auto', flex: 'top' }}>
        <Card.Body>
         <Form>
            <Form.Group className="mb-3" controlId="formGridMedicine">
              <Form.Label><h3>Medicines</h3></Form.Label>
              <InputGroup.Text>{med.value}</InputGroup.Text>
            </Form.Group> 
          <Form.Group className="mb-3" controlId="formGridDosage">
            <Form.Label><h3>Dosage</h3></Form.Label>
            <Button className="mb-1" variant="outline-dark">
              {dosage}
            </Button>
            <br />
            <ButtonGroup className="mb-3">
                {Dosage.map((val) => (
                  <Button variant="secondary" onClick={()=>setDosage(val.name)}>
                    {val.name}
                  </Button>
                ))}
      </ButtonGroup>
      <br />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridDuration">
            <Form.Label><h3>Duration</h3></Form.Label>
            <InputGroup className="mb-3">
            <Form.Control placeholder="" defaultValue={Rxmedicines.duration} onChange={(e) => setDuration(e.currentTarget.value)} />
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

          <Form.Group className="mb-3" controlId="formGridWhen">
            <Form.Label> <h3>When</h3></Form.Label>
            <Button className="mb-1" variant="outline-dark">
              {when}
            </Button>
            <br />
            <ButtonGroup className="mb-3">
                {When.map((val) => (
                  <Button variant="secondary" onClick={()=>setWhen(val.name)}>
                    {val.name}
                  </Button>
                ))}
      </ButtonGroup>
      <br />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formGridQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control placeholder="" onChange={(e) => setQuantity(e.currentTarget.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAdditionalInfo">
            <Form.Label>Advice</Form.Label>
            <Form.Control placeholder="" onChange={(e) => setAdvice(e.currentTarget.value)}/>
          </Form.Group>

          <Button variant="primary" onClick={addMedicine}>
            Submit
          </Button>
          </Form>  
          </Card.Body>
          </Card>
          </div>
          </Collapse>
     </> */}
    </div>
  );
};
export default Medicines;
