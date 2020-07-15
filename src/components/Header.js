import React, { Component } from 'react';
import '../assets/scss/Header.scss';


class Header extends Component
{
    render()
    {
        const nav_items_list = ["Home","About","Projects","Team","Contact"];
        const nav_items = nav_items_list.map((nav_item)=>
        {
            var link = "#"+nav_item;
            return(
                <a className="nav_item" href={link}>{nav_item}</a>
            );
        });
        return(
            <div className="custom_nav">
                <div className="brand">PermatechIT</div>
                <div className="collapse_nav_items">
                    {nav_items}
                </div>
            </div>
        );
    }
}

export default Header;