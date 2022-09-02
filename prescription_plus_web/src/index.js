import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './components/Login/loginform';
import Login from './components/Login/Login';
import RegisterForm from './components/Login/registerform';

import {Provider} from 'react-redux';
import {Store} from './redux/store'
import Reg_doctor from './components/Login/doctorReg';
import HomePage from './components/Home/Home';
import Add_patient from './components/Patient/patient';
import DocHomePage from './components/DoctorHomePage/DocHomeScreen';
import Prescription from './components/Prescription/PrescriptionHomeScreen';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <React.StrictMode>
    <Router>
        <Routes>
            <Route exact path="/login_register" element={<App/>} />
            <Route exact path="/loginform" element={<LoginForm/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/registerform" element={<RegisterForm/>} />
            <Route exact path="/doctor-registration" element={<Reg_doctor/>} />
            <Route exact path= "/" element= {<HomePage/>} />
            <Route exact path= "/patientinfo" element= {<Add_patient/>} />
            <Route exact path= "/doctorhome" element= {<DocHomePage/>}/>
            <Route exact path= "/createRx" element = {<Prescription/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
