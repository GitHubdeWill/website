import React, { useState, Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

class GlobalNavbar extends Component {
  constructor (props) {
    super(props);
  }
  
  handleChange(pageName) {
    this.props.onPageChange(pageName);
  }
  

  render() {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">William He</NavbarBrand>
          {/* <NavbarToggler onClick={toggle} /> */}
          {/* <Collapse isOpen={isOpen} navbar> */}
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#"  onClick={() => this.handleChange('Home')}>
                  {(this.props.currentPage === 'Home')?'>Home<':' Home '}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"  onClick={() => this.handleChange('BlogPosts')}>
                {(this.props.currentPage === 'BlogPosts')?'>BlogPosts<':' BlogPosts '}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"  onClick={() => this.handleChange('Projects')}>
                {(this.props.currentPage === 'Projects')?'>Projects<':' Projects '}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple</NavbarText>
          {/* </Collapse> */}
        </Navbar>
      </div>
    );
  }
}

export default GlobalNavbar;