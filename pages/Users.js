import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import { UserList as UserListView } from "views";
import Main from "layouts/Main";

const Users = props => {
    return (<WithLayout component={UserListView} layout={Main} />);
}
export default Users;