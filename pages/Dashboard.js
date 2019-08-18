import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import { Dashboard as DashboardView } from "views";
import Main from "layouts/Main";

const Dashboard = props => {
    return (<WithLayout component={DashboardView} layout={Main} />);
}
export default Dashboard;