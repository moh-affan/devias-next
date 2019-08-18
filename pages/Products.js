import React, { Component } from "react";
import WithLayout from "components/WithLayout/WithLayout";
import { ProductList } from "views";
import Main from "layouts/Main";

const Products = props => {
    return (<WithLayout component={ProductList} layout={Main} />);
}
export default Products;