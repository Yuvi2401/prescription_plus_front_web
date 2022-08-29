import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../../App.css';
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react";
import { setDoctor } from "../../redux/actions";
import { server_url } from '../../config'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from "axios";

function RegisterForm() {
  const dispatch = useDispatch()
    const Rx = useSelector(state=>state.RxReducer);
    const onPressHandler = async() =>{
            const url = server_url+'/doctor/_id/?id=62de6d5ee28cf48b1819618b'
            
            // const url = server_url+'/doctor/_id/?id=62de6d5ee28cf48b1819618b'
           
            console.log(url)
            await axios.get(url)
            .then(async response => {
                var doc = response.data.data
                // console.log("----------doc--------------",response.data.data)
                dispatch(setDoctor({
                    mci: doc.mci, 
                    firstname: doc.firstname, 
                    lastname: doc.lastname, 
                    email:doc.email, 
                    mobile: doc.mobile, 
                    degree:doc.degree,
                    councilstate: doc.council.state, 
                    councilid: doc.council.id, 
                    visitngcard:doc.visitingcard, 
                    signature: doc.signature,
                    sex: doc.sex, 
                    age: doc.age, 
                    documents:doc.documents, 
                    addresscity: doc.address.city, 
                    addresslocality: doc.address.locality,
                    addresspincode: doc.address.pincode, 
                    addressstate: doc.address.state
                  }))
                // navigation.navigate('main_screen');
            })
            .catch(err => console.log(err.response)) 
    }
  return (
    
    <div>
    <Card style={{ width: '22rem' }}>
    <Card.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

     
      <Button variant="primary" type="submit">
      <Link className="nav-link" to={'/login'}>
        Login
        </Link>
      </Button>
      
    </Form>
    </Card.Body>
    </Card>
    </div>
   
 

  );
}

export default RegisterForm;