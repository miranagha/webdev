import React from "react";
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        
        <Navbar light expand="md">
          <Link href='/'>
            <a>
              <img
                src="/static/codeyourfuture.png"
                alt="code your future"
                className='logo'
              />
            </a>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navi" navbar>
              <NavItem>
                <Link href='/' passHref><a className='a-nav' >HOME</a></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  GET INVOLVE
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link href='/apply' passHref><a className='a-nav'>APPLY</a></Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link href='/mentor' passHref><a className='a-nav'>BECOME A MENTOR</a></Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link href='/donate' passHref><a className='a-nav'>DONATE</a></Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link href='/about' passHref><a className='a-nav'>ABOUT </a></Link>
              </NavItem>
              <NavItem>
                <Link href='/events' passHref><a className='a-nav'>EVENTS</a></Link>
              </NavItem>
              <NavItem>
                <Link href='/contact' passHref><a className='a-nav'>CONTACT US</a></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}