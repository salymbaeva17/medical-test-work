import React from 'react';
import "./style.css"
import avatar from "./5351552.png"

const Header = () => {
    return (
        <header className="header">
            <div className="container h-100 d-flex align-items-center">
                <img src={avatar} className="ms-auto d-block"
                     style={{width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover",}}
                     alt="user avatar"/>
            </div>
        </header>
    );
};

export default Header;