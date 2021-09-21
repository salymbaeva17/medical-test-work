import React from 'react';
import Header from "../Header";
import "./style.css"
import AsideBar from "../AsideBar";

const Layout = ({children}) => {
    return (
        <main className="main">
            <AsideBar/>
            <div className="right-side">
                <Header/>
                <div className="container">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;