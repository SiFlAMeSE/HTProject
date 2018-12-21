import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from "../pages/home.js";
import howto from "../pages/howto.js";
import infor from "../pages/information.js";
import contact from "../pages/contact.js";
import login from "../pages/login.js";
import signupuser from "../pages/signup_user.js";
import signupadmin from "../pages/signup_admin.js";


import report from "../pages/admin/report.js";
import setting from "../pages/admin/setting.js";

import dashboard from "../pages/user/dashboard.js";
import history from "../pages/user/history.js";
import monitoring from "../pages/user/monitoring.js";
import notification from "../pages/user/notification.js";

import test from "../pages/test.js";

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