import logo from './logo.svg';
import './App.css';


import Login from './components/Login/Login';
import LoginForm from './components/Login/loginform';
import HomeNav from './components/Login/homenav';
import SignIn from './components/Login/signin';
import HomePage from './components/Home/Home';

function App() {
  return (
   
    <>
    <div>
      <HomeNav/>
    </div>
    <div>
      <SignIn/>
    </div>
    <div >
      <Login/>
    </div>

      <div className="auth-wrapper">
        <div className="auth-inner"> 
        </div>
      </div>
      <HomePage/>
    </>
    
  );
}

export default App;
