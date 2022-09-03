import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Provider, useSelector } from 'react-redux';
import { Store } from '../../redux/store';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function CurrentPatient() {
    const Rx = useSelector(state=>state.RxReducer);
    let Rxpatient = [{}]
    const [name, setName] = useState('Patient info not found');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [mobile, setMobile] = useState('');
    const [isPatientAvailable, setIsPatientAvailable] = useState(false);
    const [button_text, setButton_text] = useState("Add patient info")
    const [flag, setFlag] = useState(false)
    console.log("--------------Rx patient---------", Object.keys(Rx.patient).length, isPatientAvailable)

    if(Object.keys(Rx.patient).length !== 0 && !isPatientAvailable){
        setFlag(true);
        setIsPatientAvailable(true)
        console.log("falg set to true")
    }
    useEffect(()=>{
      const setVars=()=>{
        Rxpatient = Rx.patient;
        setFlag(false)
        console.log("--------------Rxpatient---------",Rxpatient.age)
        setName(Rxpatient.firstname+" "+Rxpatient.lastname)
        setAge(Rxpatient.age)
        setSex(Rxpatient.sex)
        setMobile(Rxpatient.mobile)
        setButton_text("Update patient info")
        console.log(age)
      }
      if(flag){
        setVars()
      }
    },[flag]);
    
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
        <Link className="nav-link" to={'/patientinfo'}>
        <Button variant="primary" onClick={()=>setFlag(true)}>{button_text}</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    </Provider>
  );
}

export default CurrentPatient;