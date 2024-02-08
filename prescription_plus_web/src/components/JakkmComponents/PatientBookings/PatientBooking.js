import React, { useState } from 'react';
import './PatientBooking.css'; // Assume you have a CSS file for styling

const PatientBooking = () => {
  const [activeTab, setActiveTab] = useState('UPCOMING');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const patientBookingDetails = {name: "Jakkam", bookingId: 1201001, Summary: "", Attachments: "", date :"10/5/24"}

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
          <div className="general-form">
            <label>
              Name : {patientBookingDetails.name}
            </label>
            <label>
              Date : {patientBookingDetails.date}
            </label>
            <label>
              bookingId : {patientBookingDetails.bookingId}
            </label>
            <label>
              Summary : {patientBookingDetails.Summary}
            </label>
            <label>
              Attachments : {patientBookingDetails.Attachments}
            </label>
            <button className="save-btn">DETAILS</button>
          </div>
        )}
        {/* You would add similar conditional rendering for other tabs' content */}
      </div>
    </div>
  );
};

export default PatientBooking;