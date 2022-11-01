import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./Menu.css"

const Menu = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className='navBar  fixed-top'>
        <NavbarBrand href="/"  className="navBrand" ><img src="./imagens/logogauss.png" alt=""></img></NavbarBrand>
      
      </Navbar>
    </div>
  );
}

export default Menu;

