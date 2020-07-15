import React, {Component} from 'react';
import './ProjectPage.scss';
import {Container } from 'react-bootstrap';


import invD from '../../assets/img/projects/invareal/desktop.jpg';
import invl from '../../assets/img/projects/invareal/logo.jpg';
import invd from '../../assets/img/projects/invareal/desc.jpg';
import invM from '../../assets/img/projects/invareal/mobile.jpg';

import ggD from '../../assets/img/projects/goldenglades/desktop.jpg';
import ggl from '../../assets/img/projects/goldenglades/logo.jpg';
import ggd from '../../assets/img/projects/goldenglades/desc.jpg';
import ggM from '../../assets/img/projects/goldenglades/mobile.jpg';

import bruD from '../../assets/img/projects/bruedergrimm/desktop.jpg';
import brul from '../../assets/img/projects/bruedergrimm/logo.jpg';
import brud from '../../assets/img/projects/bruedergrimm/desc.jpg';
import bruM from '../../assets/img/projects/bruedergrimm/mobile.jpg';

class ProjectPage extends Component{


    constructor(props)
    {
        super(props);
        this.state = {
            pid: 0
        }

        this.content = {
            titles: ["Invareal", "Golden Glades", "Bruedergrimm"],
            imgD: [invD,ggD,bruD],
            imgl: [invl,ggl,brul],
            imgd: [invd,ggd,brud],
            imgM:[invM,ggM,bruM],
            desc:[
                    ["Inavreal is a Real Estate asset management firm, whose expertise lies in developing and applying their proven experience in Management and Investment for national and international Investors with the purpose of increasing the value of your assets and portfolios.",
                    "The combination of creative ideas and well founded analysis is the bedrock of their approach. They are confident in negotiations and with a hands-on mentality, and also take care of all operative areas around your real estate."
                    ],
                    [
                        "Golden Glades is beauty parlor based in Kerala, India. Providing a range of services from hair care to skin care to Bridal services, each with their own specialists and teams. With over a decade of experience in the field of beauty services with a presence in the heart of the city they are among the leaders in the industry and have been for years.",
                        "With over a decade of experience in the field of beauty services with a presence in the heart of the city they are among the leaders in the industry and have been for years."
                    ],
                    [
                        "The Brüder Grimm Bildungszentrum eV was started with the aim to support children in the various subjects at school and beyond to give them better opportunities in education as well as with cultural and social activities.",
                        "With a team of professional teachers, Brüder Grimm, has now included integration courses and further training such as job-related language courses and coaching.  This being in addition to the already fantastic tutoring programs. They also offer projects that can make a positive contribution to the equal opportunities and participation of refugee children and young people in Germany."

                    ]
                    
            ]

        }
    }

    componentDidMount()
    {
        let pid = 0;
        const pname = this.props.match.params.pname;
        switch(pname)
        {
            case "invareal": pid = 0; break;
            case "goldenglades": pid = 1; break;
            case "bruedergrimm": pid = 2; break;
            default: pid = 0; break;
        
        }
        this.setState({pid: pid})
    }

    render()
    {
        const pid = this.state.pid;

        return(
            <div className = "pp_s">
                <div className = "img_w_D">
                    <img src = {this.content.imgD[pid]} alt = "" />
                </div>
                <div className = "m_content">
                    {/* <Container> */}
                    <div className = "p_title">
                        {this.content.titles[pid]}
                    </div>
                    <div className = "p_desc_1">
                        <div className = "p_link">
                            <div>
                            Take me to Project
                            </div>
                        </div>
                        <div className = "p_desc">
                            {this.content.desc[pid][0]}
                        </div>
                    </div>
                    <div className = "padded_content">
                    <div className = "img_w_l">
                    <img src = {this.content.imgl[pid]} alt = "" />
                    </div>
                    <div className = "img_w_d">
                    <img src = {this.content.imgD[pid]} alt = "" />
                    </div>
                    <div className = "p_desc_2">
                        {this.content.desc[pid][1]}
                    </div>
                    <div className = "img_w_d">
                    <img src = {this.content.imgd[pid]} alt = "" />
                    </div>
                    </div>
                    <div className = "p_mobile">
                        <div className = "img_w_M">
                        <img src = {this.content.imgM[pid]} alt = "" />
                        </div>
                        <div className = "img_w_M">
                        <img src = {this.content.imgM[pid]} alt = "" />
                        </div>
                    </div>
                    {/* </Container> */}
                </div>
            </div>

        );
    }

}


export default ProjectPage;