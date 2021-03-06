import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

class GlobalNavbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }
  
  handleChange(pageName) {
    this.props.onPageChange(pageName);
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  close () {
    this.setState({
      isOpen: false
    });
  }
  

  render() {
    // Selected
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
        <Navbar color="dark" dark expand="md" fixed="top">
          <NavbarBrand href="/">William's Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#"  onClick={() => {
                  this.close();
                  this.handleChange('Home');
                }
                }>
                  <span style={(this.props.currentPage !== 'Home')?{ fontWeight: 'normal' } : { fontWeight: 'bold' }}>
                    About Me
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"  onClick={() => {
                  this.close();
                  this.handleChange('BlogPosts');
                }
                 }>
                  <span style={(this.props.currentPage !== 'BlogPosts')?{ fontWeight: 'normal' } : { fontWeight: 'bold' }}>
                    Blogs
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"  onClick={() => {
                  this.close();
                  this.handleChange('Projects');
                }
                }>
                  <span style={(this.props.currentPage !== 'Projects')?{ fontWeight: 'normal' } : { fontWeight: 'bold' }}>
                    Projects
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"  onClick={() => {
                  this.close();
                  this.handleChange('More');
                }
                }>
                  <span style={(this.props.currentPage !== 'More')?{ fontWeight: 'normal' } : { fontWeight: 'bold' }}>
                    More
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default GlobalNavbar;