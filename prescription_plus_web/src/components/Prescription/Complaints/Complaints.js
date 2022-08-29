import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setComplaints, removeComplaints, updateComplaints } from "../../../redux/actions";
import {Button,Col,Form,Row,ListGroup,Collapse,InputGroup,ButtonGroup,Card} from 'react-bootstrap';
import {server_url} from "../../../config";

const Complaints = () =>{
    const dispatch = useDispatch()
    const [symptoms, setSymptoms] = useState([])
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(false);
    const [severity, setSeverity] = useState("");
    const [complaint,setComplaint] = useState([]);
    const [open, setOpen] = useState(false);
    const [duration, setDuration] = useState("");
    const [durationtype,setDurationType] = useState("")
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
        setLoading(false);
        };
        if (query.length > 2) fetchSymptoms();
        if(query.length === 0)setSymptoms([])
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
        setDuration("")
        setComplaint([])
        setOpen(!open)
        setSearch(!search)
    }
      
    return (
        <div >
            <input type='text' 
            placeholder="Search.." 
            className="search" 
            onChange={(e) => setQuery(e.target.value)}
            disabled = {search}
            />
            {loading ? (
            <h4>Loading ...</h4>
            ) : (
            symptoms.map((item) => 
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
        {Rxsymptoms.map((val) => (
                <Card >
                <Card.Body>
                  <Card.Title>{val.term}</Card.Title>
                  <Button variant="secondary" disabled = {search} onClick={()=>{removesymptom(val.term)}} >Remove Medicine</Button>
                </Card.Body>
              </Card>
            ))}
      <br />
       <>
        <Collapse in={open}>
         <Form>
            <Form.Group className="mb-3" controlId="formGridSymptom">
              <Form.Label><h3>Symptoms</h3></Form.Label>
              <InputGroup.Text>{complaint.value}</InputGroup.Text>
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formGridSeverity">
                <Form.Label><h3>Severity</h3></Form.Label>
                <Button className="mb-1" variant="outline-dark">{severity}</Button>
                <br />
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
          </Collapse>
     </>
      </div>
    )
}

export default Complaints;