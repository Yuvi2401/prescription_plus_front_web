import React from 'react'
import {Button} from 'react-bootstrap'
import {useState} from "react";
import { Navigate } from "react-router-dom";
import LoginForm from './loginform';

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setDoctor } from "../../redux/actions";
import { server_url } from '../../config'


// export default function Login() {
//   return (
//     <div>
//         <Button>Login</Button>
        
//     </div>
//   )
// }






export default function Login() {
    const dispatch = useDispatch()
    const Rx = useSelector(state=>state.RxReducer);
    const onPressHandler = async() =>{
            const url = server_url+'/doctor/_id/?id=62de6d5ee28cf48b1819618b'
            
            // const url = server_url+'/doctor/_id/?id=62de6d5ee28cf48b1819618b'
           
            console.log(url)
            await axios.get(url)
            .then(async response => {
                var doc = response.data.data
                // console.log("----------doc--------------",response.data.data)
                dispatch(setDoctor({
                    mci: doc.mci, 
                    firstname: doc.firstname, 
                    lastname: doc.lastname, 
                    email:doc.email, 
                    mobile: doc.mobile, 
                    degree:doc.degree,
                    councilstate: doc.council.state, 
                    councilid: doc.council.id, 
                    visitngcard:doc.visitingcard, 
                    signature: doc.signature,
                    sex: doc.sex, 
                    age: doc.age, 
                    documents:doc.documents, 
                    addresscity: doc.address.city, 
                    addresslocality: doc.address.locality,
                    addresspincode: doc.address.pincode, 
                    addressstate: doc.address.state
                  }))
                // navigation.navigate('main_screen');
            })
            .catch(err => console.log(err.response)) 
    }
    return (
      <>
        <div>
        <LoginForm/>
        <Button  onChange= {onPressHandler()}>
        <p className="text-center">
            Login Doctor
          </p>
        </Button>
    </div>
      <div>
        <Button >
        <p className="text-center">
            Register Doctor
          </p>
        </Button>
    </div>
    </>

    // <div>
    //      <Button>Login</Button>
    // </div>
    )
  }

  