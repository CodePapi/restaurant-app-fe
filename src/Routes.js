import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import App from "./views/App/index";
import Register from "./views/Register/index";
import Login from "./views/Login/index";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact element={<App />} />
        <Route path="/:location" exact element={<App />} />
        <Route path="/:location/:cuisine" exact element={<App />} />
        <Route path="/cuisine/:cuisine" exact element={<App />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />

      </Switch>
    </Router>
  );
}

export default Routes;
