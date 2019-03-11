import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from "../pages/home";
import howto from "../pages/howto";
import infor from "../pages/information";
import contact from "../pages/contact";
import loginp from "../pages/login";
import signup from "../pages/signup";

import report from "../pages/admin/report";
import set_build from "../pages/admin/set_build";
import set_detail from "../pages/admin/set_detail";
import set_location from "../pages/admin/set_location";

import dashboard from "../pages/user/dashboard";
import history from "../pages/user/history";
import monitoring from "../pages/user/monitoring";
import notification from "../pages/user/notification";

import test from "../pages/testHTPPSget";
import testcode from "../testcode";
import testcount from "../pages/testCount";


export default () => (
    <Switch>

        <Route exact path="/" component={home} />
        <Route exact path="/howto" component={howto} />
        <Route exact path="/infor" component={infor} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/login" component={loginp} />
        <Route exact path="/signup" component={signup} />

        <Route exact path="/report" component={report} />
        <Route exact path="/setbuild/:id" component={set_build} />
        <Route exact path="/setdetail/:id" component={set_detail} />
        <Route exact path="/setlocation" component={set_location} />

        <Route exact path="/dashboard" component={dashboard} />
        <Route exact path="/dashboard/:id" component={dashboard} />
        <Route exact path="/history" component={history} />
        <Route exact path="/history/:id/:date" component={history} />
        <Route exact path="/monitoring" component={monitoring} />
        <Route exact path="/monitoring/:id" component={monitoring} />
        <Route exact path="/notification" component={notification} />


        <Route exact path="/test" component={test} />
        <Route exact path="/testcode" component={testcode} />
        <Route exact path="/testcount" component={testcount}/>

        

    </Switch>
)