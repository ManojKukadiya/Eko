import React, { Component } from 'react';
import navlink from '../../api/navlinks';
import { Link } from 'react-router-dom';
import {
    Col, 
    Container, 
    Row, 
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'
import Headertop from './siteheader/header-top';
import Headerlogo from './siteheader/header-logo';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleClick(event) {
        var elems = document.querySelectorAll(".childsubmenu");
        [].forEach.call(elems, function (el) {
            el.classList.remove("show");
        });
    }
    render() {
        return (
            <header className="site-header">
                <Headertop />
                <Headerlogo />
                <div id="header-wrap" className="shadow-sm">
                    <Container>
                        <Row>
                            <Col>
                                <Navbar className="navbar-expand-lg navbar-light position-static">
                                    <Link className="navbar-brand logo d-lg-none" to="/">
                                        <img className="img-fluid" src={require(`../../assets/images/logo.png`)} alt="" />
                                    </Link>
                                    <NavbarToggler onClick={this.toggle} />
                                    <Collapse isOpen={this.state.isOpen} className="navbar-collapse" navbar>
                                        <Nav className="navbar-nav" navbar>
                                            {navlink.map((navlink, index) => (
                                                (navlink.type && navlink.type === 'subMenu') ?
                                                    <UncontrolledDropdown nav inNavbar key={index}>
                                                        <DropdownToggle nav caret >
                                                            {navlink.menu_title}
                                                        </DropdownToggle>
                                                        <DropdownMenu id={`submenu_${index}`} className="childsubmenu">
                                                            {navlink.child_routes && navlink.child_routes.map((subnavlink, index) => (
                                                                (subnavlink.type && subnavlink.type === 'childsubMenu') ?
                                                                    <UncontrolledDropdown nav inNavbar key={index}>
                                                                        <DropdownToggle nav caret className="dropdown-item" >
                                                                            {subnavlink.menu_title}
                                                                        </DropdownToggle>
                                                                        <DropdownMenu id={`childsubmenu_${index}`}>
                                                                            {subnavlink.child_routes && subnavlink.child_routes.map((Childsubnavlink, i) =>
                                                                                <DropdownItem key={i} tag={Link} to={Childsubnavlink.path} onClick={this.handleClick.bind(this)} >{Childsubnavlink.menu_title}
                                                                                </DropdownItem>
                                                                            )}
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                    :
                                                                    <DropdownItem key={index} tag={Link} to={subnavlink.path}>{subnavlink.menu_title}
                                                                    </DropdownItem>
                                                            ))}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                    : (navlink.type && navlink.type === 'megaMenu') ?
                                                        <UncontrolledDropdown nav inNavbar key={index} className="ma">
                                                            <DropdownToggle nav caret >
                                                                {navlink.menu_title}
                                                            </DropdownToggle>
                                                            <DropdownMenu id={`submenu_${index}`} className="custom-drop childsubmenu">
                                                                <div className="container p-0">
                                                                    <Row className="w-100 no-gutters">
                                                                        {navlink.child_routes && navlink.child_routes.map((subnavlink, index) => (
                                                                            <div className="col-12 col-md-4 p-3">
                                                                                {/* Heading */}
                                                                                <div className="mb-2 font-weight-bold">{subnavlink.menu_title}</div>
                                                                                {/* Links */}
                                                                                <ul className="list-unstyled">
                                                                                    {subnavlink.child_routes && subnavlink.child_routes.map((megamenu, index) => (
                                                                                        <li > 
                                                                                            <Link to={megamenu.path} onClick={this.handleClick.bind(this)}>{megamenu.menu_title}</Link>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        ))}
                                                                        <div className="col-12 col-md-4">
                                                                            <img className="img-fluid rounded-bottom rounded-top" src={require(`../../assets/images/header-img2.jpg`)} alt="..." />
                                                                        </div>
                                                                    </Row>
                                                                </div>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                        :
                                                        <NavItem>
                                                            <Link to={navlink.path}> {navlink.menu_title}</Link>
                                                        </NavItem>
                                            ))}
                                        </Nav>
                                    </Collapse>
                                    <div className="right-nav align-items-center d-flex justify-content-end"> <Link className="mr-1 mr-sm-3" to="#"><i className="las la-user-alt" /></Link>
                                        <Link className="mr-3 d-none d-sm-inline" to="#"><i className="lar la-heart" /></Link>
                                        <div>
                                            <Link className="d-flex align-items-center" to="#" id="header-cart-btn" data-toggle="modal" data-target="#cartModal"> <span className="bg-white px-2 py-1 shadow-sm rounded" data-cart-items={2}>
                                                <i className="las la-shopping-cart" />
                                            </span>
                                                <div className="ml-4 d-none d-md-block"> <small className="d-block text-muted">My Cart</small>
                                                    <span className="text-dark">2 Items - $52</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        );
    }
}

export default Header;