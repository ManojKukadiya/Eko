import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
window.fn = OwlCarousel;

import Herosection6 from '../../widgets/herosection/herosection6';
import { Link } from 'react-router-dom';
import Instafeed from '../../widgets/aboutus/instafeed';
import Processstep2 from '../../widgets/home5/processstep2';
import Clientlogo from '../../widgets/home1/clientlogo';
import Blogcart from '../../widgets/blog/blogcart';
import Newsletter1 from '../../widgets/home1/newsletter1';

class index6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          options: {
              loop: true,
              nav:true,
              responsive:{
                  0: {
                      items: 1,
                  },
                  600: {
                      items: 2,
                  },
                  1000: {
                      items: 4,
                  },
              },
          },
      };
    }
    componentDidMount() {
      window.scrollTo(0, 0)
    }
    render() {
        return (
            <>
            {/*hero section start*/}
            <Herosection6 />
            {/*hero section end*/} 
            {/*body content start*/}
            <div className="page-content">
              {/*product ad start*/}
              <section className="p-0">
                <div className="container-fluid p-0">
                  <Row className="no-gutters">
                    <div className="col-12 col-md-6">
                      <div className="position-relative overflow-hidden shadow-sm">
                        {/* Background */}
                        <img className="img-fluid w-100 hover-zoom" src={require(`../../assets/images/kids/product-ad/01.jpg`)} alt="" />
                        {/* Body */}
                        <div className="position-absolute top-50 right-0 pr-5">
                          <h6>Baby Collection</h6>
                          <h3 className="mb-4 text-white">Baby Trend Cloth <span className="font-w-7 d-block">50% Off</span></h3>
                          <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="position-relative overflow-hidden shadow-sm">
                        {/* Background */}
                        <img className="img-fluid w-100 hover-zoom" src={require(`../../assets/images/kids/product-ad/02.jpg`)} alt="" />
                        <div className="position-absolute top-50 pl-5">
                          <h6>2020 Collection</h6>
                          <h3 className="mb-0">New Toys <span className="font-w-7 d-block text-primary">Arrived</span></h3>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </section>
              {/*product ad end*/}
              {/*product start*/}
              <section>
                <Container>
                  <Row className="justify-content-center text-center mb-5">
                    <div className="col-lg-6 col-md-10">
                      <div>
                        <h6 className="text-primary mb-1">
                          — New Collection
                        </h6>
                        <h2 className="mb-0">Our Products</h2>
                      </div>
                    </div>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <Col>
                       <OwlCarousel
                            className="owl-carousel no-pb owl-2"
                            {...this.state.options}
                            dotData="false"
                            nav="true"
                        >
                        <div className="item">
                          <div className="card product-card">
                            <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                            </button>
                            <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                              <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/01.jpg`)} alt="..." />
                              <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/02.jpg`)} alt="..." />
                            </Link>
                            <div className="card-info">
                              <div className="card-body">
                                <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Teddy Stuffed Bear</Link>
                                </div>
                                <div className="mt-1"> <span className="product-price"><del className="text-muted">$35.00</del> $25.00</span>
                                  <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer bg-transparent border-0">
                                <div className="product-link d-flex align-items-center justify-content-center">
                                  <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                                  </button>
                                  <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                                  </button>
                                  <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="card product-card">
                            <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                            </button>
                            <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                              <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/03.jpg`)} alt="..." />
                              <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/04.jpg`)} alt="..." />
                            </Link>
                            <div className="card-info">
                              <div className="card-body">
                                <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Close up of Toy Blocks</Link>
                                </div>
                                <div className="mt-1"> <span className="product-price"><del className="text-muted">$42.00</del> $37.00</span>
                                  <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer bg-transparent border-0">
                                <div className="product-link d-flex align-items-center justify-content-center">
                                  <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                                  </button>
                                  <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                                  </button>
                                  <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="card product-card">
                            <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                            </button>
                            <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                              <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/05.jpg`)} alt="..." />
                              <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/06.jpg`)} alt="..." />
                            </Link>
                            <div className="card-info">
                              <div className="card-body">
                                <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Little Girl With Teddy </Link>
                                </div>
                                <div className="mt-1"> <span className="product-price"><del className="text-muted">$18.00</del> $15.00</span>
                                  <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer bg-transparent border-0">
                                <div className="product-link d-flex align-items-center justify-content-center">
                                  <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                                  </button>
                                  <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                                  </button>
                                  <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="card product-card">
                            <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                            </button>
                            <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                              <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/07.jpg`)} alt="..." />
                              <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/08.jpg`)} alt="..." />
                            </Link>
                            <div className="card-info">
                              <div className="card-body">
                                <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Easter Rabbit Toys</Link>
                                </div>
                                <div className="mt-1"> <span className="product-price"><del className="text-muted">$19.00</del> $13.00</span>
                                  <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                                  </div>
                                </div>
                              </div>
                              <div className="card-footer bg-transparent border-0">
                                <div className="product-link d-flex align-items-center justify-content-center">
                                  <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                                  </button>
                                  <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                                  </button>
                                  <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </OwlCarousel>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/*product end*/}
              {/*product ad start*/}
              <section className="custom-py-1 parallaxie" style={{ backgroundImage: `url(${require(`../../assets/images/kids/bg/03.jpg`)})` }}>
                <Container>
                  <Row className="justify-content-center text-center">
                    <Col lg={8} className="col-12"> 
                      <h2 className="mb-5 font-w-5 h1">Latest Collection <span className="text-primary font-w-8">OFF 50%</span> All Products</h2>
                      <Link className="btn btn-primary btn-animated" to="#"><i className="las la-shopping-cart mr-1" /> Shop Now</Link>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/*product ad end*/}
              {/*product start*/}
              <section>
                <Container>
                  <Row className="justify-content-center text-center">
                    <Col lg={8} md={10}>
                      <div className="mb-8">
                        <h6 className="text-primary mb-1">
                          — New Collection
                        </h6>
                        <h2 className="mb-0">Trending Products</h2>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={3} lg={4} md={6}>
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/11.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/15.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Baby Rib Lap Shoulder</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$35.00</del> $25.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} className="mt-8 mt-md-0">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/12.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/01.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Cute Love Teddy Bear</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$24.00</del> $18.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} className="mt-8 mt-lg-0">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/06.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/05.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Baby Playing With Teddy</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$12.00</del> $9.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} className="mt-8 mt-lg-0">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/07.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/08.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Easter Rabbit Toys</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$32.00</del> $26.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} className="mt-8">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/09.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/10.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Baby Mittens &amp; Toys</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$19.00</del> $13.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} className="mt-8">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/13.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/14.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Toy Plane With Paper</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$42.00</del> $37.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} className="mt-8">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/15.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/16.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Stuffed Animal Toy</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$18.00</del> $15.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xl={3} lg={4} md={6} className="mt-8">
                      <div className="card product-card">
                        <button className="btn-wishlist btn-sm" type="button" data-toggle="tooltip" data-placement="left" title="Add to wishlist"><i className="lar la-heart" />
                        </button>
                        <Link className="card-img-hover d-block" to="/product-single-left/Woman/1">
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/kids/product/17.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/kids/product/18.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Baby Playing Toys</Link>
                            </div>
                            <div className="mt-1"> <span className="product-price"><del className="text-muted">$26.00</del> $22.00</span>
                              <div className="star-rating"><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" /><i className="las la-star" />
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-transparent border-0">
                            <div className="product-link d-flex align-items-center justify-content-center">
                              <button className="btn btn-compare" data-toggle="tooltip" data-placement="top" title="Compare" type="button"><i className="las la-random" /> 
                              </button>
                              <button className="btn-cart btn btn-primary btn-animated mx-3" type="button"><i className="las la-shopping-cart mr-1" />
                              </button>
                              <button className="btn btn-view" data-toggle="tooltip" data-placement="top" title="Quick View"><span data-target="#quick-view" data-toggle="modal"><i className="las la-eye" /></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/*product end*/}
              {/*multi sec start*/}
              <section className="bg-light">
                <Container>
                  <Row className="justify-content-center text-center mb-8">
                    <div className="col-lg-6 col-md-10">
                      <div className="mb-4">
                        <h6 className="text-primary mb-1">
                          — Newsletter
                        </h6>
                        <h2 className="mb-0">Subscribe Our Newsletter</h2>
                      </div>
                      <Newsletter1 />
                    </div>
                  </Row>
                </Container>
              </section>
              <section className="p-0 mt-n11">
                <Container>
                  <Row>
                    <Col>
                      <Clientlogo />
                    </Col>
                  </Row>
                </Container>
              </section>
              {/*multi sec end*/}
              {/*blog start*/}
              <section>
                <Container>
                  <Row className="justify-content-center text-center mb-5">
                    <Col md={10} lg={8} className="col-12">
                      <div>
                        <h6 className="text-primary mb-1">
                          — KIDS BLOG
                        </h6>
                        <h2 className="mb-0">Latest News Feed</h2>
                      </div>
                    </Col>
                  </Row>
                  <Blogcart />
                  <Row className="justify-content-center text-center mt-5">
                    <Col> <Link className="btn btn-dark" to="/blog-card">View All Blog</Link>
                    </Col>
                  </Row>
                </Container>
              </section>
              {/*blog end*/}
              {/*feature start*/}
              <section className="bg-light">
                <Container>
                  <Processstep2 />  
                </Container>
              </section>
              {/*feature end*/}
              {/*instagram start*/}
              <section className="p-0">
                <div className="container-fluid p-0">
                  <Instafeed />
                </div>
              </section>
              {/*instagram end*/}
            </div>
            {/*body content end*/}
          </>
        );
    }
}

export default index6;