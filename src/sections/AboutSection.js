import React, { Component } from 'react';
import '../../../assets/scss/LandingPage/AboutSection.scss';
class AboutSection extends Component
{
    constructor(props)
    {
        super(props);
    }

    call_form = ()=> { 
        var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; 
        if(!gi.call(d,id)) 
        { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) }
         }
    componentDidMount(){
        this.call_form();
    }
    render()
    {
        
        return(
            <div className="section">
                <div className="container">
                <div className="typeform-widget" data-url="https://divitkarnawat1.typeform.com/to/bYBFVS" >
                </div>
                </div>
                </div>
       
        );
    }
}

export default AboutSection;