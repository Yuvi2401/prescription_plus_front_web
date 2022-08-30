import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAdvice,setFollowup} from "../../../redux/actions";
import Calendar from 'react-calendar';
import {Button,Col,Form,Row,ListGroup,Collapse,InputGroup,ButtonGroup,Card} from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';

const Additionalinfo = () =>{
    const dispatch = useDispatch()
    const Rx = useSelector(state=>state.RxReducer);
    const [additionalinfo, setAdditionalinfo] = useState(Rx.advice)
    const [foldate, setfolDate] = useState(Rx.followup=='' ? new Date().toDateString(): new Date(Rx.followup).toDateString())
    const [date,setDate] = useState('')

    const summitPage = () =>{
        console.log(foldate)
        dispatch(setAdvice(additionalinfo));
        dispatch(setFollowup(foldate));
    }
    if(date){
        setfolDate(date.toDateString())
        setDate('')
    }
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formGridAdditionalInfo">
            <Form.Label><h3>Advice</h3></Form.Label>
            <Form.Control  as="textarea"  placeholder= "Any Advice for Patient..." onChange={(e) => setAdditionalinfo(e.currentTarget.value)}/>
        </Form.Group>
        <br/>
        <Form.Group className="mb-3" controlId="formGridDuration">
            <Form.Label><h3>Follow Up Date</h3></Form.Label>
            <InputGroup.Text>{foldate}</InputGroup.Text>
                <br />
                <Form.Label><h4>Pick a Date manually</h4></Form.Label>
                <Calendar onChange={setDate}/>
        </Form.Group>
        <Button variant="primary" onClick={()=>summitPage()}>
            Submit
          </Button>
          </Form>
    )

}

export default Additionalinfo;