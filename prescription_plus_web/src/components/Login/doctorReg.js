import React, {useState} from "react";
import axios from "axios";
import {Provider} from 'react-redux';
import {Store} from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setDoctor,removeDoctor,updateDoctor} from "../../redux/actions";
import { server_url } from '../../config'
import { Form, Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';




export default function Reg_doctor({navigation}){

  const Rx = useSelector(state=>state.RxReducer);
  let Rxdoctor = [{}]
  Rxdoctor = Rx.doctor;
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [mci,SetMci] = useState()
  const [email,SetEmail] = useState()
  const [mobile,SetMobile] = useState()
  const [degree, SetDegree] = useState()
  const [councilstate, SetCouncilstate] = useState()
  const [councilid,SetCouncilid] = useState()
  const [visitingCard,SetVisitingCard]= useState()
  const [signature,SetSignature] = useState()
  const [sex,SetSex] = useState()
  const [age,SetAge] = useState()
  const [documents,SetDocuments] = useState()
  const [addresslocality,SetAddresslocality] = useState()
  const [addresspincode,SetAddresspincode] = useState()
  const [addresscity,SetAddresscity] = useState()
  const [addressstate,SetAddressstate] = useState()

  const setdoctor= async()=>{
    dispatch(setDoctor({
      mci:mci, 
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobile: mobile,
      degree: degree,
      councilstate: councilstate,
      councilid: councilid,
      visitingcard: visitingCard,
      signature: signature,
      sex: sex,
      age: age,
      documents: documents,
      addresscity: addresscity,
      addresslocality: addresslocality,
      addresspincode: addresspincode,
      addressstate: addressstate}));
    const options = {
    url: server_url+'/doctor/addDoc',
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    data:{
            firstname,
            lastname,
            mci,
            email,
            mobile,
            degree,
            visitingCard,
            signature,
            sex,
            age,
            "documents":[""],
            "address":{
                "locality":addresslocality,
                "pincode":addresspincode,
                "city":addresscity,
                "state":addressstate
            },
            "council":{
                "id":councilid,
                "state":councilstate
            }
        }
    };
    await axios(options)
    .then(response => {
        console.log(response.status)
        navigation.navigate('main_screen');
    })
    .catch(err => console.log(err.response))                                        
  }



    return(
        <div className='centered-div'>
        <Card style={{ width: '22rem' }}>
        <Card.Body>
        <Form>
            
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" onChange={(e)=>setFirstname(e.currentTarget.value)}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        
          <Row>
            <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name</Form.Label>
            <Form.Control type="firstname" placeholder="First name" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="lastname" placeholder="Last name" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="mobile_number" placeholder="Mobile Number" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          </Col>

          </Row>
         
          <Button variant="primary" type="submit">
          <Link className="nav-link" to={'/login'}>
            Login
            </Link>
          </Button>
          
        </Form>
        </Card.Body>
        </Card>
        </div>
       
    )
    
}


