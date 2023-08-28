import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="*" component={Error} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
