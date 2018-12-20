import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from "../pages/home.js";
import howto from "../pages/howto.js";
import infor from "../pages/information.js";
import contact from "../pages/contact.js";
import login from "../pages/login.js";
import signupuser from "../pages/signup_user.js";
import signupadmin from "../pages/signup_admin.js";

export default () => (
    <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/howto" component={howto} />
        <Route exact path="/infor" component={infor} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/login" component={login} />
        <Route exact path="/signup_user" component={signupuser} />
        <Route exact path="/signup_admin" component={signupadmin} />
    </Switch>
)