import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LoginForm from './loginform';
import RegisterForm from './registerform';
import Reg_doctor from './doctorReg';
import { useState } from 'react';



function SignIn() {
  const [key, setKey] = useState('login')
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
    <Card style={{ width: 'auto' , height: 'auto' }}>
    <Card.Body>
    <Tabs
      activeKey={key} onSelect={(k) => setKey(k)} className="cTabs"
      defaultActiveKey="login"
      id="fill-tab-example"
    >
      <Tab eventKey="login" title="Login">
      <LoginForm/>
      </Tab>
      <Tab eventKey="register" title="Register">
      <Reg_doctor/>
      </Tab>
      
    </Tabs>
    </Card.Body>
    </Card>
    </div>
  );
}

export default SignIn;