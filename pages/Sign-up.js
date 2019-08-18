import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import SignUp from "views/SignUp/SignUp";
import Minimal from "layouts/Minimal";

const Index = props => {
    return (<WithLayout component={SignUp} layout={Minimal} />);
}
export default Index;