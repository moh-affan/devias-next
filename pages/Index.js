import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import SignIn from "views/SignIn/SignIn";
import Blank from "layouts/Blank";

const Index = props => {
    return (<WithLayout component={SignIn} layout={Blank} />);
}
export default Index;