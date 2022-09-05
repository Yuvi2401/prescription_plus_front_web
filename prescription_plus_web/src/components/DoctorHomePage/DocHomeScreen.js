import Prescription from '../Prescription/PrescriptionHomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import NavBar from '../NavBar/DoctorNavBar';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {IoMdAdd} from 'react-icons/io';

const DocHomePage = () =>{
  return (
    <div className='App'>
        <NavBar/>
        <NavLink to={'/createRx'} className="navlink btn-float">
          <IoMdAdd className='icon'/>
        </NavLink>
        {/* <Button href="/createRx" variant="secondary" size="lg" active>
            Create Prescription
        </Button> */}
      
    </div>
  );
}

export default DocHomePage;
