import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

function MapFilter() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const filterLetter = () => {
    let filteredData = users.filter((user) => {
      return user.name.includes("E")
    });
   setUsers(filteredData)
  };
  const filterFiveNumbers = () => {
    let filteredData = users.filter((user) => {
      return user.id > 5
    });
   setUsers(filteredData)
  };


  return (
    <div>
      <div className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h3 className="fw-light">React metody map a filter</h3>
            <Button className="my-3 mx-2" variant="primary" onClick={filterLetter}>Filter pismen</Button>
            <Button className="my-3  mx-2" variant="success" onClick={filterFiveNumbers}>Zobraz 5</Button>
          </div>
        </div>
      </div>
      <Container>
        <div className="row g-4">
          {users.map((user, index) => (
            <div className="col-md-4" key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {user.username}
                  </Card.Subtitle>
                  <Card.Text>{user.company.name}</Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    {user.address.geo.lat}
                  </Card.Text>
                  <Card.Text className="mb-2 text-muted">
                    {user.address.geo.lng}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      
      </Container>
    </div>
  );
}

export default MapFilter;
