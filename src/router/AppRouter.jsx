import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login } from '../components/Auth/Login';
import { SingUp } from '../components/Auth/SingUp';

export const AppRouter = () => {
    return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sing-up">
            <SingUp />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}
