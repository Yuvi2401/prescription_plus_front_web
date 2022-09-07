import React, {useState} from "react";
import axios from "axios";
import {Provider} from 'react-redux';
import {Store} from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setPatient,removePatient, updateDoctor} from "../../redux/actions";
import { server_url } from '../../config'
import { Form, Card, Button, Col, Row } from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";
import { useEffect } from "react";




export default function Add_patient(){
  const navigate = useNavigate()
  const Rx = useSelector(state=>state.RxReducer);
  let Rxpatient = [{}]
  Rxpatient = Rx.patient;
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState()
  const [lastname, setLastname] = useState()
  const [email,setEmail] = useState()
  const [mobile,setMobile] = useState()
  const [whatsapp,setWhatsapp] = useState()
  const [uniqueHealthId,setUniqueHealthId]= useState()
  const [sex,setSex] = useState()
  const [age,setAge] = useState()
  const [addresslocality,SetAddresslocality] = useState()
  const [addresspincode,SetAddresspincode] = useState()
  const [addresscity,SetAddresscity] = useState()
  const [addressstate,SetAddressstate] = useState()
  const [flag,setflag]= useState(false)
  // console.log(Rxpatient)
  useEffect(()=>{
    if (Rxpatient){
      console.log(Rxpatient)
      setFirstname(Rxpatient.firstname)
      setLastname(Rxpatient.lastname)
      setMobile(Rxpatient.mobile)
      setEmail(Rxpatient.email)
      setSex(Rxpatient.sex)
      setAge(Rxpatient.age)
      setUniqueHealthId(Rxpatient.uniqueHealthId)
    }
    const Setpatient = async()=>{
      console.log("---first---",firstname)
     dispatch(setPatient({mobile:mobile, 
        firstname: firstname,
        lastname: lastname,
        email: email,
        whatsapp: '',
        uniqueHealthId:uniqueHealthId,
        sex: sex,
        age: age,
        addresscity: '',
        addresslocality: '',
        addresspincode: '',
        addressstate: '',
        isAdded: true}));
      console.log("aya")
      // setflag(true)
    const options = {
      url: server_url+'/patient/addPatient',
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;'
      },
      data:{
            firstname,
            lastname,
            email,
            mobile,
            whatsapp,
            uniqueHealthId,
            sex,
            age,
            "address":{
                "locality":'',
                "pincode":0,
                "city":'',
                "state":''
            }
        }
      };
      // console.log(options.data)
      await axios(options)
      .then(response => {
          console.log(response.status)
          // navigate("/createRx")
    
          
      })
      .catch(err => {
        console.log(err.response);
      //   Alert.alert("Imcomplete entry",  "Kindly enter atleast patient's name and phone number")
      })    
    }
  

    if(flag){
      setflag(false)
      Setpatient()
    }
  },[flag]);

  const setpatient = () =>{
    setflag(true)
  }

  return(

    <Card style={{ width: 'auto' }}>
    <Card.Body>
    <Form>
        
    
      <Row>
        <Col>
      <Form.Group className="mb-3" controlId="formBasicFN">
        <Form.Label>First name</Form.Label>
        <Form.Control type="firstname" defaultValue={firstname} placeholder="First name" onChange={(e) => setFirstname(e.currentTarget.value)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicLN">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="lastname" defaultValue={lastname} placeholder="Last name" onChange={(e) => setLastname(e.currentTarget.value)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      </Col>
      </Row>
      <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile number</Form.Label>
        <Form.Control type="mobile_number" defaultValue={mobile} placeholder="Mobile Number" onChange={(e) => setMobile(e.currentTarget.value)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" defaultValue={email} placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      </Col>

      </Row>

      <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="age" defaultValue={age} placeholder="age" onChange={(e) => setAge(e.currentTarget.value)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicSex">
        <Form.Label>Sex</Form.Label>
        <Form.Control type="sex" defaultValue={sex} placeholder="Sex" onChange={(e) => setSex(e.currentTarget.value)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      </Col>
      <Form.Group className="mb-3" controlId="formBasicUniqueHealthId">
        <Form.Label>Unique Health Id</Form.Label>
        <Form.Control type="uniquehealthid" defaultValue={uniqueHealthId} placeholder="Unique Health Id" onChange={(e) => setUniqueHealthId(e.currentTarget.value)}/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      </Row>
      {/* <Link className="nav-link" to={'/createRx'}> */}
      <Button variant="primary" onClick={()=>setpatient()}>
        Add Patient
      </Button>
      {/* </Link> */}
      
    </Form>
    </Card.Body>
    </Card>

   
)

}






