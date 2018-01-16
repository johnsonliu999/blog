import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'

const Navigator = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                {/*<a href={"/blog"}>Glyn's Blog</a>*/}
                <Link to={"/blog"}>Glyn's Blog</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav bsStyle={"pills"} className={"navbar-right"}>
                <LinkContainer to={'/blogs'}>
                    <NavItem eventKey={1}>Home</NavItem>
                </LinkContainer>
                <LinkContainer to={'/about'}>
                    <NavItem eventKey={2}>About</NavItem>
                </LinkContainer>
                <LinkContainer to={'/contact'}>
                    <NavItem eventKey={3}>Contact</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>

    </Navbar>
);

export default Navigator;