import React from 'react';
import '../css/HomeBottom.css'; // Make sure to create a corresponding CSS file

// Assuming you have an image in your project's public folder or src folder
import hospitalBannerImage from '../../../assests/images/uhbotdoc.webp'; // Replace with your actual image path
import PatientBannerImage from '../../../assests/images/uhbotpat.webp'; // Replace with your actual image path

const HospitalBanner = () => (
    <div>

<div className="hospital-banner">
    <div className="hospital-banner-image">
      <img src={PatientBannerImage} alt="Hospital Management System" style={{borderRadius:20}}/>
    </div>
    <div className="hospital-banner-content">
      <h1>For Patients</h1>
      <p>Seamlessly discover doctors and book appointments, view past medical records,  </p>
      <p>and get AI powered tools for better healthcare etc.</p>
<div className='hospital-banner-buttons'>
        <button className="btn-get-started">Get started</button>
        <button className="btn-learn-more">Learn more</button>
        </div>
    </div>
  </div>

  <div className="hospital-banner">
    <div className="hospital-banner-image">
      <img src={hospitalBannerImage} alt="Hospital Management System" style={{borderRadius:20}}/>
    </div>
    <div className="hospital-banner-content">
      <h1>For Hospitals</h1>
      <p>Manage calendars, take appointments, view patient details </p>
      <p>and medical history etc.</p>
<div className='hospital-banner-buttons'>
        <button className="btn-get-started">Get started</button>
        <button className="btn-learn-more">Learn more</button>
        </div>
    </div>
  </div>
  
  </div>
  
);

export default HospitalBanner;
