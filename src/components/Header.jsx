import React, { Component } from 'react';
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
    DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


const cookies = new Cookies();

class HeaderBertasbih extends Component {
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

      componentDidMount() {
        const username = cookies.get('dataUser');
        if(username !== undefined) {
          this.props.keepLogin(username);
        }
      }

      onLogoutSelect = () => {
        this.props.onUserLogOut();
        cookies.remove('dataUser');
      }

    render() { 
        if (this.props.username === "") {
        return(
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">{this.props.navBrand}</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/register">Register</NavLink>
                  </NavItem>
                  <NavItem>
                    <Link to="/login">
                    <NavLink href="">Login</NavLink> 
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>

        )
    }
    return (
    <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">{this.props.navBrand}</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Hello, {this.props.username}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
    )
    }
}

const mapStateToProps = (state) => {
  return { username: state.auth.username };
}

export default connect (mapStateToProps)(HeaderBertasbih);