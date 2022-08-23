import { Route, Switch } from "react-router-dom";

import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Dashboard } from "../pages/Dashboard";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/cadastrar" component={Signup} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
};
