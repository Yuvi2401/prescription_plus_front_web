import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LoginForm from './loginform';
import RegisterForm from './registerform';




function SignIn() {
  return (
    <div className='centered-div'>
    <Card style={{ width: '24rem' , height: 'auto' }}>
    <Card.Body>
    <Tabs
      defaultActiveKey="login"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="login" title="Login">
      <LoginForm/>
      </Tab>
      <Tab eventKey="register" title="Register">
      <RegisterForm/>
      </Tab>
      
    </Tabs>
    </Card.Body>
    </Card>
    </div>
  );
}

export default SignIn;