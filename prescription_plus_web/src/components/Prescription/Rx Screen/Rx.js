import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useContext } from "react";
import { Button,Form,Col,Card } from "react-bootstrap";
import { StateContext ,Prescription} from "../PrescriptionHomeScreen"

const RxScreen = ({setKey}) =>{
    const Rx = useSelector(state=>state.RxReducer);
    var Rxsymptoms = []
    var Rxmedicines =[]
    var Rxadvice = Rx.advice
    var Rxfollowupdate = Rx.followup
    if(Rx.complaint){
      Rxsymptoms = Rx.complaint;
    }
    if(Rx.medicine){
        Rxmedicines = Rx.medicine;
    }
    var Rxlabtest = []
    if(Rx.test){
      Rxlabtest = Rx.test;
    }
    return (
        <Form>
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
      </Form>
    )
}

export default RxScreen;




