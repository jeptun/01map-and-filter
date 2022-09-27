import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MapFilter from "./components/MapFilter";
import Home from "./components/Home";
import States from "./components/States";
import Props from "./components/Props";
import TernaryOperator from "./components/TernaryOperator";
import EventHandling from "./components/EventHandling";
import KeysInReact from "./components/KeysInReact";
import Forms from "./components/Forms";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={MapFilter} path="/Map-filter"  />
        <Route component={States} path="/States"  />
        <Route component={Props} path="/Props"  />
        <Route component={TernaryOperator} path="/TernaryOperator"  />
        <Route component={EventHandling} path="/EventHandling"  />
        <Route component={KeysInReact} path="/KeysInReact"  />
        <Route component={Forms} path="/Forms"  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
