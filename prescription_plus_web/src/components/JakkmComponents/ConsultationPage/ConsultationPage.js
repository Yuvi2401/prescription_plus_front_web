import React, {useState} from 'react';
import './ConsultationPage.css'; // Assume you have a CSS file for styling
import Header from './../Header/Header'
import SideBar from '../SideBar/SideBar';
import PatientBooking from '../PatientBookings/PatientBooking';
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const ConsultationPage = () => {

const [isOpen, setIsOpen] = useState(false);

const onClickBookSlot = () => {
    setIsOpen(true);
}

  return (
    <div>
        <Header />
        <div className='container-row'>
            <SideBar />
            {
                isOpen ? (
                    <div>
                        <DoctorDetails />
                    </div>
                ):(
                    <div className='container-space-around'>
                        <PatientBooking />
                        <div className='book-slot-container' onClick={onClickBookSlot}>
                            <h4 className='book-slot'>Book Slot</h4>
                        </div>
                    </div>
                )
            }
        </div>
    </div>);
}

export default ConsultationPage;