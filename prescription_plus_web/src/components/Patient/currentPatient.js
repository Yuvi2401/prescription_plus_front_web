import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Provider, useSelector } from 'react-redux';
import { Store } from '../../redux/store';

function CurrentPatient() {
    const Rx = useSelector(state=>state.RxReducer);
    let Rxpatient = [{}]
    Rxpatient = Rx.patient;
    if(Rxpatient){
        var name = Rxpatient.firstname+Rxpatient.lastname;
    }
    else{
        var name = "Patient Info not found - Please add patient info"
    }
  return (
    <>
    hellp
    </>
    // <Provider store = {Store}>
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src="holder.js/100px180" />
    //   <Card.Body>
    //     <Card.Title>Hello</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    // </Provider>
  );
}

export default CurrentPatient;