// import React from 'react';
// import NavBar from '../NavBar/NavBar'; // Adjust the import path as needed
// import './HomePage.css'; // Your stylesheet path here

// const HomePage = () => {
//   // Handler functions for button clicks
//   const handleSearchClick = () => {
//     // Implement search functionality or navigate to search page
//     console.log('Search button clicked');
//   };

//   const handleDoctorGetStartedClick = () => {
//     // Implement get started functionality for doctors
//     console.log('Doctor get started button clicked');
//   };

//   const handleDoctorLearnMoreClick = () => {
//     // Implement learn more functionality for doctors
//     console.log('Doctor learn more button clicked');
//   };

//   const handlePatientGetStartedClick = () => {
//     // Implement get started functionality for patients
//     console.log('Patient get started button clicked');
//   };

//   const handlePatientLearnMoreClick = () => {
//     // Implement learn more functionality for patients
//     console.log('Patient learn more button clicked');
//   };

//   return (
//     <div className="homePage">
//       <NavBar />
//       <section className="heroSection">
//         <h1>Unified healthcare management system for patients, doctors and hospitals</h1>
//         <div className="searchBar">
//           <input type="text" placeholder="Find a doctor, clinic, hospital" />
//           <button onClick={handleSearchClick}>Search</button>
//         </div>
//       </section>
      
//       <section className="features">
//         <h2>Features</h2>
//         <p>We offer a comprehensive set of features for hospitals, doctors and patients, including prescription generation, calendar management, slot booking, and more</p>
//         {/* Feature items */}
//         <div className="featureItems">
//           {/* Repeat this block for each feature, ensure to replace src with your images */}
//           <div className="featureItem">
//             <img src="path-to-prescription-tool-image.png" alt="Prescription Tool" />
//             <h3>Prescription Generation Tool</h3>
//             <p>Generate prescriptions digitally with ease</p>
//           </div>
//           {/* ... other feature items */}
//         </div>
//       </section>
      
//       <section className="forDoctors">
//         <h2>For Doctors</h2>
//         <p>Manage calendars, take appointments, view patient details and medical history etc.</p>
//         <button onClick={handleDoctorGetStartedClick}>Get started</button>
//         <button onClick={handleDoctorLearnMoreClick}>Learn more</button>
//       </section>
      
//       <section className="forPatients">
//         <h2>For Patients</h2>
//         <p>Discover hospitals/doctors, book appointments, view medical history and analysis etc.</p>
//         <button onClick={handlePatientGetStartedClick}>Get started</button>
//         <button onClick={handlePatientLearnMoreClick}>Learn more</button>
//       </section>
      
//       <footer className="footer">
//         {/* Footer content */}
//       </footer>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import NavBar from "../NavBar/DoctorNavBar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    // Add search functionality or redirection to search results
    console.log("Search function not implemented yet.");
  };

  const handleDoctorGetStarted = () => {
    navigate("/doctors/get-started"); // Update with your actual path
  };

  const handleDoctorLearnMore = () => {
    navigate("/doctors/learn-more"); // Update with your actual path
  };

  const handlePatientGetStarted = () => {
    navigate("/patients/get-started"); // Update with your actual path
  };

  const handlePatientLearnMore = () => {
    navigate("/patients/learn-more"); // Update with your actual path
  };

  return (
    <div className="App">
      <NavBar />
      <div className="heroSection">
        <h1>Unified healthcare management system for patients, doctors and hospitals</h1>
        <div className="searchBar">
          <input type="text" placeholder="Find a doctor, clinic, hospital" />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>
      
      <div className="features">
        <h2>Features</h2>
        <p>We offer a comprehensive set of features for hospitals, doctors and patients, including prescription generation, calendar management, slot booking, and more</p>
        {/* Assume you have a Feature component */}
        {/* <Feature title="Prescription Generation Tool" description="Generate prescriptions digitally with ease" /> */}
        {/* ... other features */}
      </div>
      
      <div className="forDoctors">
        <h2>For Doctors</h2>
        <p>Manage calendars, take appointments, view patient details and medical history etc.</p>
        <Button onClick={handleDoctorGetStarted}>Get started</Button>
        <Button onClick={handleDoctorLearnMore}>Learn more</Button>
      </div>
      
      <div className="forPatients">
        <h2>For Patients</h2>
        <p>Discover hospitals/doctors, book appointments, view medical history and analysis etc.</p>
        <Button onClick={handlePatientGetStarted}>Get started</Button>
        <Button onClick={handlePatientLearnMore}>Learn more</Button>
      </div>
      
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default HomePage;
