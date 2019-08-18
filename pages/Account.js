import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import { Account } from "views";
import Main from "layouts/Main";

const AccountPage = props => {
    return (<WithLayout component={Account} layout={Main} />);
}
export default AccountPage;