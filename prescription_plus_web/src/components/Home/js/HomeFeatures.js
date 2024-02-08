// FeaturesSection.js
import React from 'react';
import '../css/HomeFeatures.css'; // Make sure to create a corresponding CSS file

const features = [
  { title: 'Consultation', description: 'Generate prescriptions digitally with ease', imageName: 'consultation' },
  { title: 'Calendar Management', description: 'Manage availability and appointments easily', imageName: 'calendar-management' },
  { title: 'Slot Booking Tool', description: 'Allow patients to book slots online', imageName: 'slot-booking' },
  { title: 'Past Medical Records', description: 'View medical history and records easily', imageName: 'medical-records' },
  { title: 'Patient Visibility Front', description: 'Patients can view clinics onboarded to UniHealth', imageName: 'patient-visibility' },
];

const Feature = ({ title, description, imageName }) => (
  <div className="feature">
    <div className={`feature-image ${imageName}`}></div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => (
  <div className="features-section">
    <h2>Features</h2>
    <p>We offer a comprehensive set of features for hospitals, doctors and patients, including prescription generation, calendar management, slot booking, and more</p>
    <div className="features-list">
      {features.map(feature => (
        <Feature key={feature.title} {...feature} />
      ))}
    </div>
  </div>
);

export default FeaturesSection;
