import Nav from 'react-bootstrap/Nav';

function HomeNav() {
  return (
    <Nav
    //   activeKey="/home"
    //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/doctor-registration">Add more info</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/create-Rx">Create Rx</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default HomeNav;