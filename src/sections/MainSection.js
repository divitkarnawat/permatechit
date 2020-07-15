import React, { Component } from 'react';
import '../../../assets/scss/LandingPage/MainSection.scss';
class MainSection extends Component
{
    render()
    {
        return(
            <div className="main_section">
            <div className="parallax"></div>
                <div className="main_head">
                    <h1 className="title"> Permatech IT</h1>
                    <h4 className="description">Software is what we do</h4>
                </div>
                <a href="#AboutSection" className="nextSection">></a>
                
            </div>

        );
    }
}

export default MainSection;