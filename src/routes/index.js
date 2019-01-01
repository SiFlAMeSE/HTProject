import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from "../pages/home";
import howto from "../pages/howto";
import infor from "../pages/information";
import contact from "../pages/contact";
import login from "../pages/login";
import signupuser from "../pages/signup_user";
import signupadmin from "../pages/signup_admin";


import report from "../pages/admin/report";
import setting from "../pages/admin/setting";

import dashboard from "../pages/user/dashboard";
import history from "../pages/user/history";
import monitoring from "../pages/user/monitoring";
import notification from "../pages/user/notification";

import test from "../test";


export default () => (
    <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/howto" component={howto} />
        <Route exact path="/infor" component={infor} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/login" component={login} />
        <Route exact path="/signup_user" component={signupuser} />
        <Route exact path="/signup_admin" component={signupadmin} />

        <Route exact path="/report" component={report} />
        <Route exact path="/setting" component={setting} />

        <Route exact path="/dashboard" component={dashboard} />
        <Route exact path="/history" component={history} />
        <Route exact path="/monitoring" component={monitoring} />
        <Route exact path="/notification" component={notification} />


        <Route exact path="/test" component={test} />

    </Switch>
)