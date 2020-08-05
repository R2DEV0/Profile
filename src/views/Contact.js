import React, {useState} from 'react';
import axios from 'axios';
import './Contact.css';
import { Alert } from 'reactstrap';
import { Link, navigate } from '@reach/router';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,NavLink} from 'reactstrap';
import Logo1 from '../LinkedIn2.png';
import Logo2 from '../Github2.png';
import Logo3 from '../mail2.png';
import Fade from 'react-reveal/Fade';
import FadeIn from 'react-fade-in';


export default () =>{
    const[message, setMessage] = useState('');
    const[name, setName] = useState('');
    const[email, setEmail] = useState('')
    const [sent,setSent] = useState(false);
    const [show, setShow] = useState(false);

    const HoverIn = (e) => {};
    const HoverOut = (e) => {};
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const formSubmit = (e, message, email, name) =>{
        e.preventDefault()
        axios.post('http://localhost:4444/api/v1', {message, email, name})
        .then( res => {
            {setName('') 
            setEmail('') 
            setMessage('')
            setShow(true)}
        })
        .catch( () => {
            console.log('Message not sent')
        })
    }

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
                                <a href="/contactme">
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

            {show ?
            <Alert variant="success" className='alert' onClose={() => setShow(false)} dismissible >
                    <h4 className='text-center'>
                        Email Sent! <br/> I will get back to you as soon as possible
                    </h4>
            </Alert>
            :
            <></>
            }
            <FadeIn delay='150' transitionDuration='800'>
            <div className='col-12 text-center'>
                <form className="col-lg-4 form col-centered" onSubmit={(e) => {formSubmit(e, message, email, name)}}>
                    <div className='form-group'>
                        <input onChange={(e) => setName(e.target.value)} name="name" type="text" className='form-control' value={name} placeholder="Your Name" required/>
                    </div>
                    <div className='form-group'>
                        <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" className='form-control' value={email} placeholder="Your Email Address" required/>
                    </div>
                    <div className='form-group'>
                        <textarea onChange={(e) => setMessage(e.target.value)} name="message" rows='5' className='form-control' value={message} type="text" placeholder="Please write your message here" required/>
                    </div>
                    <button className="col-12 btn btn-info btn-lg">Contact Me!</button>
                </form>
            </div>
            </FadeIn>
            <footer className='footer'>
                <p>© 2020 Kevin Chancey - <a href="http://kevinchancey.xyz" target="_blank" rel="noopener noreferrer">Check Me Out</a></p>
            </footer>
        </div>
    )
}