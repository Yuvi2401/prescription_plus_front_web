import React from 'react';
import './DoctorDetails.css'; // Assume you have a CSS file for styling

const DoctorDetails = () => {
  const patientBookingDetails = [{name: "Jakkam", Specialization: "Neurology", Summary: "", Attachments: "", hospital :"Manipal"},
  {name: "Jakkam", Specialization: "Neurology", Summary: "", Attachments: "", hospital :"Manipal"}];

  return (
    <div className='main-Container'>
        <div className='full-Container'>
            {patientBookingDetails.map((patient) => (
            <div className="general-form">
            <div className="general-form-row">
                <label>
                Name : {patient.name}
                </label>
                <label>
                Hospital : {patient.hospital}
                </label>
                <label>
                Specialization : {patient.Specialization}
                </label>
            </div>
            <div className="general-form-row">
                <label>
                    Summary : {patient.Summary}
                </label>
            </div>
            <div className="general-form-row">
                <button className="save-btn">Book Slot</button>
            </div>
            </div>
            ))
            }
        </div>
    </div>);
};

export default DoctorDetails;