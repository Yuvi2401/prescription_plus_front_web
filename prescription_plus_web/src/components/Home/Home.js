// import NavBar from '../NavBar/HomeNavBar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css';

// const HomePage = () =>{
  
//   return (
//     <div className='App'>
//       <NavBar/>
//     </div>
//   );
// }

// export default HomePage;

import React from 'react';
import NavBar from "../NavBar/HomeNavBar";
import TopSearch from "./js/HomePageTopSearch";
import HomeBottom from "./js/HomeBottom";
import TopFeatures from "./js/HomeFeatures";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../Home/css/home.css";


const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavBar/>
      <TopSearch/>
      <TopFeatures/>
      <HomeBottom/>
    
      
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default HomePage;