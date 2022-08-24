import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {Store} from './redux/store'

import Login from './components/Login/Login';
import LoginForm from './components/Login/loginform';

function App() {
  return (
   
    <Provider store={Store}>
    <div >
      <Login/>
    </div>
    <div className="auth-wrapper">
          <div className="auth-inner">
            
          </div>
        </div>
       
    </Provider>
    
  );
}

export default App;
