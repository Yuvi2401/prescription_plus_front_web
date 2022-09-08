import Prescription from "../Prescription/PrescriptionHomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import NavBar from "../NavBar/DoctorNavBar";
import { Button } from "react-bootstrap";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { Provider, useSelector } from "react-redux";
import { Store } from "../../redux/store";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GiSevenPointedStar } from "react-icons/gi";

function DocHomePage() {
  const navigate = useNavigate();
  const Rx = useSelector((state) => state.RxReducer);
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [mci, setMci] = useState();
  const [flag, setFlag] = useState(false);
  const [isDoctorAvailable, setIsDoctorAvailable] = useState(false);

  // if (Object.keys(Rx.doctor).length !==0 && isDoctorAvailable!==true){
  //   console.log("********************DOCTOR AVALAIBLE*****************",Object.keys(Rx.doctor).length )
  //   setFlag(true)
  //   setIsDoctorAvailable(true)
  // }

  useEffect(() => {
    console.log(Rx);
    const setVar = () => {
      setName(Rx.doctor.firstname + " " + Rx.doctor.lastname);
      setMobile(Rx.doctor.mobile);
      setEmail(Rx.doctor.email);
      setMci(Rx.doctor.mci);
      
      setIsDoctorAvailable(true);
      
    };

    if (Rx.doctor.id) {
      setVar();
    }
  }, [Rx.doctor]);

  return (
    <Provider store={Store}>
      <div className="App">
        <NavBar />
        <NavLink to={"/createRx"} className="navlink btn-float">
          <IoMdAdd className="icon" />
        </NavLink>
        {/* <Button href="/createRx" variant="secondary" size="lg" active>
            Create Prescription
        </Button> */}
        <div className="top-centered-div">
          {isDoctorAvailable ? (
            <div className="cCard">
              {/* <div className="navLink">
              <IoIosSettings className="settings" onClick={handleShow} />
            </div> */}
              <img className="profilePic" src="profile.png" />
              <div className="nameSection">
                <div className="nameSection-name">Dr. {name}</div>
                {/* <div className="nameSection-lastCheck">
              Last check-in: 04 Jan 2022
            </div> */}
              </div>
              <div className="extraInfoSection">
                <div className="extraInfoSection-item">
                  <div className="extraInfoSection-item-label">Contact:</div>
                  <div className="extraInfoSection-item-value">{mobile}</div>
                </div>
                <div className="extraInfoSection-item">
                  <div className="extraInfoSection-item-label">email:</div>
                  <div className="extraInfoSection-item-value">{email}</div>
                </div>
                <div className="extraInfoSection-item">
                  <div className="extraInfoSection-item-label">MCI:</div>
                  <div className="extraInfoSection-item-value">{mci}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="noData">
              <div className="noData-icon">
                <AiOutlineExclamationCircle className="icon" />
              </div>
              <div className="noData-text">Doctor info not found</div>
              <div
                className="button button-submit"
                onClick={() => {
                  navigate("/login_register");
                }}
              >
                LOGIN/REGISTER
              </div>
            </div>
          )}
        </div>
      </div>
    </Provider>
  );
}

export default DocHomePage;
