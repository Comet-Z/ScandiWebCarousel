import React, { Component } from 'react';
import './main-style.scss'

class Header extends React.Component {
    render() {
        return (
            <div> 
                <h1 className="header">Made by Pavel Komarov for ScandiWeb. </h1>
                <h1 className="sub-header">React Carousel </h1>

            </div>
            )
    }
}

export default Header;