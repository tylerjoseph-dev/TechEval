import React from "react";
// import Menu from './Menu'
import Routes from "./Routes";
import Header from "../shared/Header";

export default function Layout(){
    return (
        <div>
                <Header/>
            
            <div className="">
                <Routes/>
            </div>
        </div>
    )
}
