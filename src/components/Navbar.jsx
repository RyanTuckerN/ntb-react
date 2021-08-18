import React, { useState, useLocation } from 'react'
import { Route, Link, Switch, NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

import Home from './pages/Home'
import About from './pages/About'
import Calendar from './pages/Calendar'
import Recordings from './pages/Recordings'
import Videos from './pages/Videos'
import Contact from './pages/Contact'

const NavbarComponent = (props) => {
  const location = useLocation
  const [isOpen, setIsOpen] = useState(false);
  const [homeActive, setHomeActive] = useState(true);

  const activeStyle={color: 'var(--light)',  fontSize:'1.2em'}

  const toggle = () => setIsOpen(!isOpen);
  const homeInactive = () => setHomeActive(false)
  
  return (
  <div className='navWrapper'>
    <Navbar dark expand="md" className="navbar">
      
      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
      
        <Nav className="mr-auto navbar" navbar >
          <NavItem>
            <NavLink  to="/home" onClick={()=>setHomeActive(true)} activeStyle={activeStyle}><strong>Home</strong></NavLink>
          </NavItem>
          <NavItem>
            <NavLink  to="/about" onClick={homeInactive} activeStyle={activeStyle} ><b><strong>About</strong></b></NavLink>
          </NavItem>
          <NavItem>
            <NavLink  to="/calendar" onClick={homeInactive} activeStyle={activeStyle}><strong>Calendar</strong></NavLink>
          </NavItem>
          {homeActive ? null : (<NavbarBrand className='navBrand'>
             <Link to="/home">
               <div  className='navTitle' onClick={()=>setHomeActive(true)}>
                 <h3>NICK TUCKER</h3>
                 <h6>bassist · composer</h6>
               </div>
             </Link>
          </NavbarBrand>)}
          <NavItem>
            <NavLink  to="/recordings" onClick={homeInactive} activeStyle={activeStyle}><strong>Recordings</strong></NavLink>
          </NavItem>
          <NavItem>
            <NavLink  to="/videos" onClick={homeInactive} activeStyle={activeStyle}><strong>Videos</strong></NavLink>
          </NavItem>
          <NavItem>
            <NavLink  to="/contact" onClick={homeInactive} activeStyle={activeStyle}><strong>Contact</strong></NavLink>
          </NavItem>
        </Nav>
        
      </Collapse>
      
    </Navbar>
    <div className="navbar-route">
         <Switch>
           <Route exact path="/home"><Home/></Route>
           <Route exact path="/about"><About/></Route>
           <Route exact path="/calendar"><Calendar/></Route>
           <Route exact path="/recordings"><Recordings/></Route>
           <Route exact path="/videos"><Videos/></Route>
           <Route exact path="/contact"><Contact/></Route>
         </Switch>
       </div>
  </div>
  )
}

export default NavbarComponent;
