import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login } from '../Auth/Login';
import { SingUp } from '../Auth/SingUp';

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
