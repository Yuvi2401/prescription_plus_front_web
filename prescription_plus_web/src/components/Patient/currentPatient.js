import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Provider, useSelector } from 'react-redux';
import { Store } from '../../redux/store';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {useDispatch } from "react-redux";
import { setPatient,removePatient, updateDoctor} from "../../redux/actions";
import Modal from 'react-bootstrap/Modal';
import Add_patient from './patient';

function CurrentPatient() {
  const dispatch=useDispatch()
    const Rx = useSelector(state=>state.RxReducer);
    let Rxpatient = [{}]
    const [name, setName] = useState('Patient info not found');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [mobile, setMobile] = useState('');
    const [isPatientAvailable, setIsPatientAvailable] = useState(false);
    const [button_text, setButton_text] = useState("Add patient info")
    const [flag, setFlag] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false)
    };
    const handleShow=() => {
      setShow(true)
      // console.log(Rx.patient.isAdded, "--------------------adadagvsdb-------------")

     
    };
    console.log("--------------Rx patient---------", Object.keys(Rx.patient).length, isPatientAvailable, Rx.patient.isAdded, flag)

    
    // if(Object.keys(Rx.patient).length !== 0 && Rx.patient.isAdded === true){
    //   console.log(Rx.patient.isAdded)
    //   Rx.patient.isAdded =false
    //   console.log(Rx.patient.isAdded)
    //   dispatch(setPatient(Rx.patient))
    //   console.log(Rx.patient)
    //   console.log(Rx.patient.isAdded, "--------------------adadagvsdb-------------")
    //   handleClose()
    // }
    if(Object.keys(Rx.patient).length !== 0 && isPatientAvailable!==true){
      setFlag(true);
      setIsPatientAvailable(true)
      console.log("falg set to true")

  }
    
    useEffect(()=>{
      
      const setVars=()=>{
        
        Rxpatient = Rx.patient;
        
        console.log("--------------Rxpatient---------",Rxpatient.age)
        setName(Rxpatient.firstname+" "+Rxpatient.lastname)
        setAge(Rxpatient.age)
        setSex(Rxpatient.sex)
        setMobile(Rxpatient.mobile)
        setButton_text("Update patient info")
        console.log(Rx.patient.isAdded, "--------------------agvsdb-------------")
        console.log(age)
        // if(Rx.patient.isAdded === true){
        //   handleClose()
        // }
        Rx.patient.isAdded =false
        
        dispatch(setPatient(Rx.patient))
        console.log("andar tpgh aye")
        setIsPatientAvailable(false)
        setShow(false)
        setFlag(false)
      }
      if(flag){
        setVars()
      }
     
      // if(show){
      //   setmodal()
      // ;
    // });
    },[Rx.patient]);
    
  return (
    // <>
    // hello
    // </>
    <Provider store = {Store}>
        <div className='top-centered-div'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="profile.png" />
      <Card.Body>
        <Card.Title>{isPatientAvailable ? name: "Patient info not found"}</Card.Title>
        <Card.Text>{isPatientAvailable? "Age: "+age:""}</Card.Text>
        <Card.Text>{isPatientAvailable? "Sex: "+sex:""}</Card.Text>
          <Card.Text>{isPatientAvailable? "Contact: "+mobile:""}</Card.Text>
        {/* <Link className="nav-link" to={'/patientinfo'}> */}
        <Button variant="primary" onClick={handleShow}>{button_text}</Button>
        {/* </Link> */}
      </Card.Body>
    </Card>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Patient info</Modal.Title>
        </Modal.Header>
        <Modal.Body><Add_patient/></Modal.Body>
      </Modal>
    </Provider>
  );
}

export default CurrentPatient;