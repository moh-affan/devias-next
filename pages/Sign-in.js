import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import SignIn from "views/SignIn/SignIn";
import Minimal from "layouts/Minimal";

const SignInPage = props => {
    return (<WithLayout component={SignIn} layout={Minimal} />);
}
export default SignInPage;