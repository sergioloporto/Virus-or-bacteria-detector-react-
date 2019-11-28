import React from 'react';
import Login from "./index";
import { storiesOf } from "@storybook/react";
import {BrowserRouter, Switch} from "react-router-dom";


storiesOf("Login", module)
    .add("default", () => (
        <BrowserRouter>
            <Switch>
                <Login />
            </Switch>
        </BrowserRouter>));


