import React from 'react';
import {NavLink} from "react-router-dom";

const AsideBar = () => {
    return (
        <aside className="aside-bar">
            <img className="logo" src="https://mimc.education/images/tild3363-3465-4136-b632-623034323164__mimc-logoeng-main-rg.png" alt="logo medical"/>
            <ul className='list'>
                <li className='list-item'><NavLink to='/tasks'><i className='bx bx-grid-alt me-2'/>Задачи и работы</NavLink></li>
                <li className='list-item'><NavLink to='/projects'><i className='bx bx-grid-alt me-2'/>Проекты</NavLink></li>
                <li className='list-item'><NavLink to='/calendar'><i className='bx bx-grid-alt me-2'/>Календарь</NavLink></li>
                <li className='list-item'><NavLink to='/possibilities'><i className='bx bx-grid-alt me-2'/>Возможности</NavLink></li>
            </ul>
        </aside>
    );
};

export default AsideBar;