import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Nav
      activeKey="/"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className=" gap-4 p-5"
    >
      <Nav.Item>
        <NavLink to="/">Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/Map-filter">Map-Filter</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/KeysInReact">Keys In React</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/States">States in React</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/Props">Props in React</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/TernaryOperator">Ternary operators</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/EventHandling">Event Handling</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/Forms">Forms </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
