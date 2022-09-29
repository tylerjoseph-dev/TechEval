import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import CreateProduct from "../products/CreateProduct";
import HomeView from "../products/HomeView";
import UpdateProduct from "../products/UpdateProduct";
import ProductView from "../products/ProductView";
import NotFound from "./NotFound";


export default function Routes(){
    return (
        <Switch>
            <Route exact={true} path="/">
                <Redirect to={"/products"}/>
            </Route>

            <Route exact={true} path="/products">
                <HomeView/>
            </Route>

            <Route exact={true} path="/products/create">
                <CreateProduct/>
            </Route>

            <Route exact={true} path="/products/:product_id/update">
                <UpdateProduct/>
            </Route>

            <Route exact={true} path="/products/:product_id">
                <ProductView/>
            </Route>

            

            <Route>
                <NotFound/>
            </Route>

        </Switch>
    )
}