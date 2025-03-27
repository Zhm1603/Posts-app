import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router"
import "./style.css";

const DefaultLayout = () => {
    return (
        <div className="layout">
            <Header />
            
                <Outlet />
            
        </div>
    );
};

export default DefaultLayout;
