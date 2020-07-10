import React,{useState} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import './Main.css';
import { Link } from '@reach/router';
import Pic from '../quizpic.png';
import Pic2 from '../Contract.png';
import Pic3 from '../OverTime.jpg';
import Logo1 from '../LinkedIn2.png';
import Logo2 from '../Github2.png';
import Logo3 from '../mail2.png';
import ReactTooltip from "react-tooltip";
import FadeIn from 'react-fade-in';
import Fade from 'react-reveal/Fade';


export default () =>{

    const HoverIn = (e) => {};
    const HoverOut = (e) => {};
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <div>
                <Navbar className="navbar navbar-dark bg-dark" light expand="md">
                    <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Fade left><NavLink><Link to = "/resume" style={{color:'white'}}> <button className='btn btn-outline-light'>My Resume</button></Link></NavLink></Fade>
                            </NavItem>
                            <li class="nav-link"> </li>
                            <Fade top><NavItem className="mt-3">  
                            <a target = "_blank" href="https://www.linkedin.com/in/kevin-chancey-a736169b/">
                                    <img src={Logo1} style={{height:"30px"}} 
                                        onMouseEnter={(e) => HoverIn(e.target.style.height = '32px', e.target.style.width ='auto')} 
                                        onMouseLeave={(e) => HoverOut(e.target.style.height = '30px', e.target.style.width ='auto')}>
                                    </img>
                                </a>
                            </NavItem></Fade>
                            <li class="nav-link"> </li>
                            <Fade bottom><NavItem className="mt-3">
                                <a href="https://github.com/R2DEV0" target = "_blank">
                                    <img src={Logo2} style={{height:"30px"}}
                                        onMouseEnter={(e) => HoverIn(e.target.style.height = '32px', e.target.style.width ='auto')} 
                                        onMouseLeave={(e) => HoverOut(e.target.style.height = '30px', e.target.style.width ='auto')}>
                                    </img>
                                </a>
                            </NavItem></Fade>
                            <li class="nav-link"> </li>
                            <Fade right><NavItem className="mt-3">
                                <a href="mailto:r2devo@gmail.com">
                                    <img src={Logo3} style={{height:"30px", borderRadius:"5px"}}
                                        onMouseEnter={(e) => HoverIn(e.target.style.height = '32px', e.target.style.width ='auto')} 
                                        onMouseLeave={(e) => HoverOut(e.target.style.height = '30px', e.target.style.width ='auto')}>
                                    </img>
                                </a>
                            </NavItem></Fade>
                        </Nav>
                        </Collapse>
                </Navbar>
            </div>
        <div className="container">
            <div className='scroll'>
            <div className="col-10 offset-1 text-center Kevin">
            <FadeIn delay='150' transitionDuration='800'>
                <h1 id="main"><span style={{color:"red", fontWeight:"bold"}}>Hey</span> I'm Kevin</h1>
                <p> I am a Full-Stack web developer with experience working in: <br/> Python(Django) - C#(asp.Net) - MongoDB, Express, React, NodeJS (MERN)
                </p>
                My Story:
                <p> After leaving my hometown of Las <span style={{color:"red", fontWeight:"bold"}}>Vegas</span> to join the Air Force, I began my life journey in Alaska, working in transportation. I spent the next 
                    four years there with one deployment to Qatar. When my military contract was over, I decided to continue my 
                    operations career in Seattle. Also, during this time, I finished my Associate's degree in Transportation and my <span style={{color:"red", fontWeight:"bold"}}>Bachelor's </span> 
                    in Business/International finance. 
                </p>
                <p> My <span style={{color:"red", fontWeight:"bold"}}>entire</span> life, I've loved working with computers, creating awesome visions out of nothing, automating & organizing operations, 
                    and creating my own works art. I realized that I wasn't happy in my field of work and, at the same time, discovered the world of computer programming. The Bellevue based school, Coding Dojo, has taught and prepared me to 
                    become a self-suficient, savvy, full-stack developer ready for anything thrown my way!
                </p>
                <h4 className="mb-3 mt-1">Some of my <span style={{color:"red", fontWeight:"bold"}}>work:</span></h4>
            </FadeIn>
            </div>
            <div className="row justify-content-between mt-1 projs">
            <Fade left><div className="col-lg-4 mt-1 text-center proj1">
                <a data-tip data-for='Quiz'><p><a href="https://github.com/R2DEV0/Quiz_of_Death" target= "_blank" style={{color:"white"}} onMouseEnter={(e) => HoverIn(e.target.style.fontWeight = 'bold')} onMouseLeave={(e) => HoverIn(e.target.style.fontWeight = 'normal')}>Quiz of Death (MERN)</a></p></a>
                <a data-tip data-for='Quiz'><a href="https://github.com/R2DEV0/Quiz_of_Death" target= "_blank"><img className="col-10" src={Pic} alt="Quiz App" style={{height:"80%", width:"auto"}}
                        onMouseEnter={(e) => HoverIn(e.target.style.height = '82%', e.target.style.width ='auto')} 
                        onMouseLeave={(e) => HoverOut(e.target.style.height = '80%', e.target.style.width ='auto')}
                    /></a></a> 
                </div></Fade>
                <Fade bottom><div className="col-lg-4 mt-1 text-center proj2">
                    <a data-tip data-for='contract'><p><a href="https://github.com/John-W-Stevens/contract_manager" target= "_blank" style={{color:"white"}} onMouseEnter={(e) => HoverIn(e.target.style.fontWeight = 'bold')} onMouseLeave={(e) => HoverIn(e.target.style.fontWeight = 'normal')}>Contract Manager (Python)</a></p></a>
                    <a data-tip data-for='contract'><a href="https://github.com/John-W-Stevens/contract_manager" target= "_blank"><img className="col-12" src={Pic2} alt="Contract Manager" style={{height:"80%", width:"97%"}}
                        onMouseEnter={(e) => HoverIn(e.target.style.height = '82%', e.target.style.width ='100%')} 
                        onMouseLeave={(e) => HoverOut(e.target.style.height = '80%', e.target.style.width ='97%')}
                    /></a></a>
                </div></Fade>
                <Fade right><div className="col-lg-4 mt-1 text-center proj3">
                        <a data-tip data-for='differenciator'><p><a href="https://github.com/R2DEV0/TheRandomizer" target= "_blank" style={{color:"white"}} onMouseEnter={(e) => HoverIn(e.target.style.fontWeight = 'bold')} onMouseLeave={(e) => HoverIn(e.target.style.fontWeight = 'normal')}>The Randomizer (C#)</a></p></a>
                            <a data-tip data-for='differenciator'><a href="https://github.com/R2DEV0/TheRandomizer" target= "_blank"><img className="col-12" draggable="false" src={Pic3} alt="TheRandomizer" style={{height:"80%", width:"auto"}}
                            onMouseEnter={(e) => HoverIn(e.target.style.height = '82%', e.target.style.width ='auto')} 
                            onMouseLeave={(e) => HoverOut(e.target.style.height = '80%', e.target.style.width ='auto')}
                        /></a></a>
                    </div></Fade>
                    <ReactTooltip id='differenciator' place="bottom" type='success' effect="float">
                        <span>
                            Small randomizer app for school curriculums <br/> being adopted accross the world!<br/>
                            * Work in progress for customer *
                        </span>
                    </ReactTooltip>
                    <ReactTooltip id='contract' place="bottom" type='info' effect="float">
                        <span>
                            Collaboration project for modernizing & organizing <br/> shipping operations <br/>
                            * Google Maps API not added to Github *
                        </span>
                    </ReactTooltip>
                    <ReactTooltip id='Quiz' place="bottom" type='warning' effect="float">
                        <span>
                            Quiz app deployed with AWS
                        </span>
                    </ReactTooltip>
                </div>
            </div>
        </div>
    </div>
    )
};