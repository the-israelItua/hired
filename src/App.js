import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./layouts/Homepage";
import Dashboard from "./components/Dashboard";
import DeskDetails from "./components/DeskDetails";
import ProfilePage from "./components/ProfilePage";
import StarJobsPage from "./components/StarJobsPage";
import TopJobs from "./components/TopJobs";
import Login from "./auth/Login";
import SignUp from "./auth/SignIn";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/job/details/:id" component={DeskDetails} />
        <Route path="/star" component={StarJobsPage} />
        <Route path="/companies/top" component={TopJobs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
