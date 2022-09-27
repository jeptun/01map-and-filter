import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function States() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [parity, setParity] = useState(true);
  const [objectMan, setObjectMan] = useState({
    nick: "Joe",
    age: 15,
  });

  const increment = () => {
    setCount(count + 1);
    setParity(!parity);
    setName("Tomasito");

    setObjectMan({ nick: "Sisi", age: 64 });
  };
  return (
    <div className="container">
      <h1> Stav v react</h1>
      <h2>Count: {count}</h2>
      {parity ? <h5>Parity: Lichý</h5> : <h5>Parity: Sudý</h5>}
      <p>Name: {name}</p>

      <Card className="my-2" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Nick: {objectMan.nick}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Age:{objectMan.age}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={increment}>
        Change State
      </Button>
    </div>
  );
}
