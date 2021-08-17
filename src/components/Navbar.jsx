import React, { useState } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Recordings from './pages/Recordings'
import Videos from './pages/Videos'
import Contact from './pages/Contact'

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeActive, setHomeActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [eventsActive, setEventsActive] = useState(false);
  const [recordingsActive, setRecordingsActive] = useState(false);
  const [videosActive, setVideosActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navStyle = { 
    
}
  const textStyle = {fontFamily: 'Fira Code', color: 'black', textDecoration: 'none'}
  // const hover = onHover=((e)=>e.target.style.color='red')
  return (
  <div className='navWrapper'>
    <Navbar dark expand="md" className="navbar">
      
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
      
        <Nav className="mr-auto navbar" navbar style={navStyle}>
          <NavItem>
            <Link  to="/home">Home</Link>
          </NavItem>
          <NavItem>
            <Link  to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link  to="/events">Events</Link>
          </NavItem>
          {homeActive ? null : (<NavbarBrand className='navBrand'>
             <div  className='navTitle'>
               <h3>NICK TUCKER</h3>
               <h5>bassist · composer</h5>
             </div>
          </NavbarBrand>)}
          <NavItem>
            <Link  to="/Recordings">Recordings</Link>
          </NavItem>
          <NavItem>
            <Link  to="/videos">Videos</Link>
          </NavItem>
          <NavItem>
            <Link  to="/contact">Contact</Link>
          </NavItem>
        </Nav>
        
      </Collapse>
      
    </Navbar>
    <div className="navbar-route">
         <Switch>
           <Route exact path="/home"><Home/></Route>
           <Route exact path="/about"><About/></Route>
           <Route exact path="/events"><Events/></Route>
           <Route exact path="/recordings"><Recordings/></Route>
           <Route exact path="/videos"><Videos/></Route>
           <Route exact path="/contact"><Contact/></Route>
         </Switch>
       </div>
  </div>
  )
}

export default NavbarComponent;
