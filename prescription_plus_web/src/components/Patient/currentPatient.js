import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Provider, useSelector } from 'react-redux';
import { Store } from '../../redux/store';
import { Link } from 'react-router-dom';

function CurrentPatient() {
    const Rx = useSelector(state=>state.RxReducer);
    let Rxpatient = [{}]
    var name = "Patient Info not found"
    var age = '22'
    var sex = ''
    var mobile = ''
    var isPatientAvailable = true
    var button_text = "Add patient info"
    // boolean isPatientAvailable = false
    console.log(name)
    if(Rx.patient && Rx.patient.length>0){
        Rxpatient = Rx.patient;
        console.log(Rxpatient)
        name = Rxpatient.firstname+Rxpatient.lastname;
        button_text = "update patient info"
        isPatientAvailable=true

    }
    console.log(Rx.patient)
   
    
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
        <Card.Text>
        <p> {isPatientAvailable? "Age: "+age:""}</p>
          <p>{isPatientAvailable? "Sex: "+sex:""}</p>
          <p>{isPatientAvailable? "Contact: "+mobile:""}</p>
          
         


        </Card.Text>
        <Link className="nav-link" to={'/patientinfo'}>
        <Button variant="primary">{button_text}</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    </Provider>
  );
}

export default CurrentPatient;