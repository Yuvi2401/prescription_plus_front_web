import React from 'react'
import {Button} from 'react-bootstrap'

import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'




// export default function Login() {
//   return (
//     <div>
//         <Button>Login</Button>
        
//     </div>
//   )
// }






export default function Login() {
    
    return  (
      <div className='centered-div'>
        <div>
        <Link className="nav-link" to={'/loginform'}>
        <Button>
        <p className="text-center">
       
            Login Doctor
           
          </p>
        </Button>
        </Link>
    </div>
      <div>
      <Link className="nav-link" to={'/registerform'}>
        <Button >
          <p className="text-center">
         
                Register Doctor
           
          </p>
        </Button>
        </Link>
    </div>
    </div>

    // <div>
    //      <Button>Login</Button>
    // </div>
    )
  }

  