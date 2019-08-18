import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import { Typography } from "views";
import Main from "layouts/Main";

const TypographyPage = props => {
    return (<WithLayout component={Typography} layout={Main} />);
}
export default TypographyPage;