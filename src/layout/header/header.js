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
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap'
import Headertop from './siteheader/header-top';
import Headerlogo from './siteheader/header-logo';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            cartview: false,
        }
        this.cartview = this.cartview.bind(this)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    cartview() {
        this.setState(prevState => ({
            cartview: !prevState.cartview
        }));
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
            <>
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
                                                <Link className="d-flex align-items-center" to="#" id="header-cart-btn" onClick={this.cartview} >
                                                    <span className="bg-white px-2 py-1 shadow-sm rounded" data-cart-items={2}>
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

                <Modal isOpen={this.state.cartview} toggle={this.cartview} className="cart-modal">
                    <ModalHeader>
                        <h5 className="modal-title" id="ModalLabel">Your Cart (2)</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <div className="row align-items-center">
                                <div className="col-5 d-flex align-items-center">
                                    <div className="mr-4">
                                        <button type="submit" className="btn btn-primary btn-sm"><i className="las la-times" />
                                        </button>
                                    </div>
                                    {/* Image */}
                                    <a href="product-left-image.html">
                                        <img className="img-fluid" src="assets/images/product/01.jpg" alt="..." />
                                    </a>
                                </div>
                                <div className="col-7">
                                    {/* Title */}
                                    <h6><a className="link-title" href="product-left-image.html">Women Lather Jacket</a></h6>
                                    <div className="product-meta"><span className="mr-2 text-primary">$25.00</span><span className="text-muted">x 1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div>
                            <div className="row align-items-center">
                                <div className="col-5 d-flex align-items-center">
                                    <div className="mr-4">
                                        <button type="submit" className="btn btn-primary btn-sm"><i className="las la-times" />
                                        </button>
                                    </div>
                                    {/* Image */}
                                    <a href="product-left-image.html">
                                        <img className="img-fluid" src="assets/images/product/13.jpg" alt="..." />
                                    </a>
                                </div>
                                <div className="col-7">
                                    {/* Title */}
                                    <h6><a className="link-title" href="product-left-image.html">Men's Brand Tshirts</a></h6>
                                    <div className="product-meta"><span className="mr-2 text-primary">$27.00</span><span className="text-muted">x 1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="d-flex justify-content-between align-items-center mb-8"> <span className="text-muted">Subtotal:</span>  <span className="text-dark">$52.00</span>
                        </div> <a href="product-cart.html" className="btn btn-primary btn-animated mr-2"><i className="las la-shopping-cart mr-1" />View Cart</a>
                        <a href="product-checkout.html" className="btn btn-dark"><i className="las la-money-check mr-1" />Continue To Checkout</a>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;