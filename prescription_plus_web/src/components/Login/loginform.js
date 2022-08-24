import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../../App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function LoginForm() {
  return (
 
    <div className='centered-div'>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
      </Form.Group>
     
      <Button variant="primary" type="submit">
      <Link className="nav-link" to={'/login'}>
        Login
        </Link>
      </Button>
      
    </Form>
    </Card.Body>
    </Card>
    </div>
   
 

  );
}

export default LoginForm;