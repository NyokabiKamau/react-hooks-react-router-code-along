import { Route, Switch } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";

export default function App() {
    return (
      <Switch>
        <Route path="/about"><About /></Route>
        <Route path="/login"><Login /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch>
    );
  }