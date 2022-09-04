import Prescription from '../Prescription/PrescriptionHomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import NavBar from '../NavBar/DoctorNavBar';
import { Button } from 'react-bootstrap';

const DocHomePage = () =>{
  return (
    <div className='App'>
        <NavBar/>
        
        <Button href="/createRx" variant="secondary" size="lg" active>
            Create Prescription
        </Button>
      
    </div>
  );
}

export default DocHomePage;
