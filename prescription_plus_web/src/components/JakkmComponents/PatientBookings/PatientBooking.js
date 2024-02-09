import React, { useState } from 'react';
import './PatientBooking.css'; // Assume you have a CSS file for styling

const PatientBooking = () => {
  const [activeTab, setActiveTab] = useState('UPCOMING');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const patientBookingDetails = [{name: "Jakkam", bookingId: 1201001, Summary: "", Attachments: "", date :"10/5/24"},
  {name: "Jakkam", bookingId: 1201001, Summary: "", Attachments: "", date :"10/5/24"}]

  const historyBookingDetails = [{name: "Ashok", bookingId: 1201001, Summary: "", Attachments: "", date :"10/5/24"},
  {name: "yuvi", bookingId: 1201001, Summary: "", Attachments: "", date :"10/5/24"}]

  return (
    <div className="form-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'UPCOMING' ? 'active' : ''}`}
          onClick={() => handleTabClick('UPCOMING')}
        >
          UPCOMING
        </button>
        <button
          className={`tab ${activeTab === 'HISTORY' ? 'active' : ''}`}
          onClick={() => handleTabClick('HISTORY')}
        >
          HISTORY
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'UPCOMING' && (
            patientBookingDetails.map((patient) => (
            <div className="general-form">
              <div className="general-form-row">
                <label>
                  Name : {patient.name}
                </label>
                <label>
                  Date : {patient.date}
                </label>
                <label>
                  bookingId : {patient.bookingId}
                </label>
              </div>
              <div className="general-form-row">
              <label>
                Summary : {patient.Summary}
              </label>
              <label>
                Attachments : {patient.Attachments}
              </label>
              <button className="save-btn">DETAILS</button>
              </div>
            </div>
            ))
        )}
        {activeTab === 'HISTORY' && (
            historyBookingDetails.map((patient) => (
            <div className="general-form">
              <div className="general-form-row">
                <label>
                  Name : {patient.name}
                </label>
                <label>
                  Date : {patient.date}
                </label>
                <label>
                  bookingId : {patient.bookingId}
                </label>
              </div>
              <div className="general-form-row">
              <label>
                Summary : {patient.Summary}
              </label>
              <label>
                Attachments : {patient.Attachments}
              </label>
              <button className="save-btn">DETAILS</button>
              </div>
            </div>
            ))
        )}
        {/* You would add similar conditional rendering for other tabs' content */}
      </div>
    </div>
  );
};

export default PatientBooking;