import React,{useState} from 'react';
import './Resume.css';
import { Link } from '@reach/router';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import Logo1 from '../LinkedIn2.png';
import Logo2 from '../Github2.png';
import Logo3 from '../mail2.png';
import FadeIn from 'react-fade-in';
import Fade from 'react-reveal/Fade';


export default (props) =>{

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
                                <Fade left><NavLink><Link to = "/" style={{color:'white'}}> <button className='btn btn-outline-light'>Back Home</button></Link></NavLink></Fade>
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
            <div className="col-12 mt-2 resume">
            <FadeIn delay='100' transitionDuration='500'>
                <h1> Kevin R. Chancey </h1>
                <p>(206) 519-4870 - <a href="mailto:r2devo@gmail.com">Email</a></p>
                <p>Full-Stack Software Developer</p>
                <hr/>
                <h4 style={{color:'red'}}>Professional Skills</h4>
                <p>Python(Django) - C#(.Net, ASP.NET, Entity, LINQ) - (MERN) MongoDB, Express, React, Node.js, JavaScript</p>
                <p>- HTML5 - CSS - Bootstrap - MySQL - MongoDB - AWS - Git & Github - Object-oriented programming(OOP) - MVC - JSON - RESTful API<br/>
                - Software development life cycle - AJAX - Test-driven development - Postman - Responsive design - Remote work - Collaboration & team building<br/>
                - Integrate well with teams - Attention to detail - Conflict resolution - Critical thinking - Quick study - Dedicated - Career & succress oriented</p>
                <hr/>
                <h4 style={{color:'red'}}>Technical Projects</h4>
                <p><span style={{fontWeight:"bold"}}>The Randomizer - Education App (JavaScript/MERN)</span> <br/>
                    An application for teachers to use the curriculum adopted by schools all over the US and other countries for <a href='https://www.jtayloreducation.com/' target= "_blank">J Taylor Education</a> <br/>
                    The app includes features such as: <br/>
                    - Created a Random generator button for results to display on screen <br/>
                    - Used Javascript to allow user to manually change results, re-establishing the state  <br/>
                    - Added the ability for the user to turn on/off the extra icons feature <br/>
                    - Integrated JSpdf & html2canvas to allow the user to save the page as a pdf file <br/>
                    - Interactive user experience to get the results they want in a fun way and save the end result <br/>
                    Project Link: <a href='https://github.com/R2DEV0/TheRandomizer' target = "_blank"> TheRandomizer/Github </a> 
                </p>
                <p><span style={{fontWeight:"bold"}}>Contract   Manager — Shipment   Tracking   App   (Python/Django)</span> <br/>
                    A truck/shipment tracking application created by my team and I over a few days. It is intended to be used by trucking brokers for customer shipments across the US. <br/>
                    The app includes features such as: <br/>
                    - Integrated Google maps API for visual map directions and ETA estimates <br/>
                    - Constructed responsive login and registration page using Python with Django  <br/>
                    - Integrated client-side validations with HTML and server-side validations with Bcrypt for enhanced security <br/>
                    - Customer, Carrier, and Contract creating, editing, archiving, deleting, sorting, and searching. (CRUD) <br/>
                    - Designed an easy, clean, and organizational way for keeping daily operations running <br/>  
                    Project Link: <a href='https://github.com/John-W-Stevens/contract_manager' target = "_blank"> Contract Manager </a> 
                </p>
                <p><span style={{fontWeight:"bold"}}>Quiz of Death — Fun Quiz App (JavaScript/MERN)</span> <br/>
                    This is a  small quiz application built with React and MongoDB for users to answer random questions stored in the database. <br/>
                    The app includes features such as: <br/>
                    - A welcome page, moving  image, and integrated npm software to create a ﬂowing background that exist throughout the application <br/> 
                    - Constructed a random unique question generator that pulls from the mongo database using javaScript and axios <br/>
                    - The app allows for the user to add and/or delete quiz questions using API calls to the server. (CRUD)<br/>
                    - Applied npm software and reactive score display for the quiz results page after quiz has been completed <br/>
                    project Link: <a href='https://github.com/R2DEV0/Quiz_of_Death' target = "_blank"> Quiz of Death </a> 
                </p>
                <p><span style={{fontWeight:"bold"}}>Angry Duck Game (C#/Unity)</span> <br/>
                    My first game created using Unity and C#. <br/>
                    The app includes features such as: <br/>
                    - Interactive game allowing the user to launch a duck into enemies and obsticles <br/>
                    - Classes for enemies, player, objects, backgrounds, start menu, and level changes for the real game experience <br/>
                    - Added audio background throughout all levels, sound effects when an enemy is hit, and responsive level changer <br/>
                    - Project Link: <a href='https://github.com/R2DEV0/Angry_Duck_Game' target = "_blank"> Angry Duck Game </a> 
                </p>
                <p><span style={{fontWeight:"bold"}}>More Projects!</span> <br/>
                    My City Faves (Django/Python): <a href='https://github.com/R2DEV0/My_Faves' target = "_blank"> Project Link </a><br/>
                    Portfolio (MERN): <a href='https://github.com/R2DEV0/Profile' target = "_blank"> Project Link </a><br/>
                    Email Blaster 3000 (Django/Python): <a href='https://github.com/R2DEV0/Email_Blaster_3000' target = "_blank"> Project Link </a><br/>
                </p>
                <hr/>
                <h4 style={{color:'red'}}>Professional Experience</h4>
                <p><span style={{fontWeight:"bold"}}>J Taylor Education</span> / Tacoma, WA - Software Developer  June 2020 - Present (freelance) </p>
                <p><span style={{fontWeight:"bold"}}>Apex Facility Resources</span> / Kent, WA - Operations & Dispatch  Feb 2019 - March 2020 </p>
                <p><span style={{fontWeight:"bold"}}>KelTrans Freight Solutions</span> / Las Vegas, NV - Operations & Accounts Payable/Receivable  Sep 2016 - Feb 2019 </p>
                <p><span style={{fontWeight:"bold"}}>Ace Relocation Systems</span> / Kent, WA - Ops Assistant Manager Oct 2014 - March 2016 </p>
                <p><span style={{fontWeight:"bold"}}>U.S. Air Force</span> / Elmendorf AFB, AK - Vehicle Operations Feb 2011 - Nov 2014</p>
                <hr/>
                <h4 style={{color:'red'}}>Education</h4>
                <p><span style={{fontWeight:"bold"}}>Coding Dojo</span> / Seattle, WA - Full Stack Developer Certiﬁcate <br/>
                    March 2020 - July 2020 <br/>
                    Python, C#, and MERN Full-Stack Development
                </p>
                <p><span style={{fontWeight:"bold"}}>City University of Seattle</span> / Seattle, WA - B.S. Business/Finance <br/>
                    2014 -2017 <br/>
                    Bachelor's in Business with minor in International Finance
                </p>
                <p><span style={{fontWeight:"bold"}}>Community College of the Air Force</span> / JBER, AK - AAS Transportation <br/>
                    2011 - 2014 <br/>
                    Associate's degree for transportation while enlisted in the air force
                </p>
                <hr/>
                <h4 style={{color:'red'}}>Accomplishments</h4>
                <p><span style={{fontWeight:"bold"}}>Early Promotion (BTZ)</span>  - USAF <br/>
                    Rewarded for going above & beyond what is expected of me and my peers
                </p>
                <p><span style={{fontWeight:"bold"}}>Management Enrichment Searies Course</span>  - Ace Relocation Systems <br/>
                    Selected for and completed training courses
                </p>
                <p><span style={{fontWeight:"bold"}}>'Fly Like Geese' leadership course</span>  - Apex Facility Resources <br/>
                    Selected for and completed training course
                </p>
                <p><span style={{fontWeight:"bold"}}>Modernized operations</span> - Apex Facility Resources <br/>
                    Created online version of dispatch sceduling for on-the-go updating & company wide visibility <br/>
                    Created online warehouse equipment and vehicle rental tracking system for accountability leading to business savings
                </p>
            </FadeIn>
            </div>
        </div>
    </div>
    )
}