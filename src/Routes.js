import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import App from "./App";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<App />} />
        <Route path="/:location" exact element={<App />} />
        <Route path="/:location/:cuisine" exact element={<App />} />
        <Route path="/cuisine/:cuisine" exact element={<App />} />
      </Switch>
    </Router>
  );
}

export default Routes;
