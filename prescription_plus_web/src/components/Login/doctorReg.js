import React, {useState} from "react";
import axios from "axios";
import {Provider} from 'react-redux';
import {Store} from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setDoctor,removeDoctor,updateDoctor} from "../../redux/actions";
import { server_url } from '../../config'
import { Form, Card, Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect } from "react";




export default function Reg_doctor({navigation}){
  const navigate = useNavigate()
  const Rx = useSelector(state=>state.RxReducer);
  let Rxdoctor = [{}]
  Rxdoctor = Rx.doctor;
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState('')
  const [usertname, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [lastname, setLastname] = useState('')
  const [mci,SetMci] = useState('')
  const [email,SetEmail] = useState('')
  const [mobile,SetMobile] = useState('')
  const [degree, SetDegree] = useState('')
  const [councilstate, SetCouncilstate] = useState('')
  const [councilid,SetCouncilid] = useState('')
  const [visitingCard,SetVisitingCard]= useState('')
  const [signature,SetSignature] = useState('')
  const [sex,SetSex] = useState('')
  const [age,SetAge] = useState('0')
  const [documents,SetDocuments] = useState('')
  const [addresslocality,SetAddresslocality] = useState('')
  const [addresspincode,SetAddresspincode] = useState('0')
  const [addresscity,SetAddresscity] = useState('')
  const [addressstate,SetAddressstate] = useState('')
  const [flag, setFlag] = useState(false)
  if(Object.keys(Rx.patient).length !== 0){
    setFlag(true)
  }
  useEffect(()=>{
    const setVars = ()=>{
      setFirstname(Rx.doctor.firstname)
      setLastname(Rx.doctor.lastname)
      SetEmail(Rx.doctor.email)
      SetMobile(Rx.doctor.mobile)
      SetMci(Rx.doctor.mci)
    }
    
    if(Rx.doctor.mci){
     
      setVars()
    }
  },[Rx.doctor])
  const setdoctor= async()=>{
    
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
    console.log("****************************DATA*************************", options.data)
    await axios(options)
    .then(response => {
      dispatch(setDoctor({
        id: response.data.data._id,
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
        console.log(response.status)
        console.log(response.data.data._id)
        navigate('/doctorhome');
    })
    .catch(err => console.log(err.response))                                        
  }



    return(
       
        <Card style={{ width: '30rem'}}>
        <Card.Body>
        <Form>
            
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" onChange={(e)=>setUsername(e.currentTarget.value)}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.currentTarget.value)}/>
          </Form.Group>
        
          <Row>
            <Col>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="firstname" placeholder="First name" onChange={(e)=>setFirstname(e.currentTarget.value)}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="lastname" placeholder="Last name" onChange={(e)=>setLastname(e.currentTarget.value)}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={(e)=>SetEmail(e.currentTarget.value)}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Label>Mobile number</Form.Label>
            <Form.Control type="mobile" placeholder="Mobile Number" onChange={(e)=>SetMobile(e.currentTarget.value)}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          </Col>
          
          <Row>
          <Form.Group className="mb-3" controlId="formBasicMCI">
            <Form.Label>MCI Number</Form.Label>
            <Form.Control type="mci-number" placeholder="MCI number" onChange={(e)=>SetMci(e.currentTarget.value)}/>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          </Row>

          </Row>
         
          <Button variant="secondary" onClick={()=>setdoctor()}>
          {/* <Link className="nav-link" to={'/doctorhome'}> */}
            Register
            {/* </Link> */}
          </Button>
          
        </Form>
        </Card.Body>
        </Card>
 
       
    )
    
}


