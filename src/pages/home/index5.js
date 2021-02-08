import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CommingSoonCounter from '../../widgets/common/counter';
import Herosection5 from '../../widgets/herosection/herosection5';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Processstep2 from '../../widgets/home5/processstep2';
import OwlCarousel from 'react-owl-carousel';
import Ourproduct from '../../widgets/home1/ourproduct1';
import Clientlogo from '../../widgets/home1/clientlogo';
import Blogcart from '../../widgets/blog/blogcart';

window.fn = OwlCarousel;

class index5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        loop: true,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 2,
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
        <Herosection5 />
        {/*hero section end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*feature start*/}
          <section className="pb-0">
            <Container>
              <Processstep2 />
            </Container>
          </section>
          {/*feature end*/}
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
              <Ourproduct />
            </Container>
          </section>
          {/*product end*/}
          {/*product ad start*/}
          <section className="p-0">
            <div className="container-fluid">
              <Row>
                <div className="col-12 col-lg-6">
                  <div className="position-relative rounded overflow-hidden">
                    {/* Background */}
                    <img className="img-fluid hover-zoom" src={require(`../../assets/images/furniture/product-ad/01.jpg`)} alt="" />
                    {/* Body */}
                    <div className="position-absolute top-0 pl-5 pt-5">
                      <h6 className="text-dark">Ekocart Furniture</h6>
                      {/* Heading */}
                      <h3>#Latest Collection <br /> <span className="text-primary font-w-7">Off 50%</span></h3>
                      {/* Link */} <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now
                          </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                  <div className="position-relative rounded overflow-hidden">
                    {/* Background */}
                    <img className="img-fluid hover-zoom" src={require(`../../assets/images/furniture/product-ad/02.jpg`)} alt="" />
                    {/* Body */}
                    <div className="position-absolute top-0 pl-5 pt-5">
                      <h6 className="text-dark">New Arrived</h6>
                      {/* Heading */}
                      <h3>Wooden Table Beside<br />Sofa Chair</h3>
                      {/* Link */} <Link className="btn btn-sm btn-primary btn-animated" to="#">Shop Now
                          </Link>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </section>
          {/*product ad end*/}
          {/*hot deal start*/}
          <section>
            <Container>
              <Row className="align-items-center">
                <div className="col-lg-5 mr-auto">
                  <div className="shadow p-5">
                    <div>
                      <h6 className="text-primary mb-1">
                        — Limited Offer
                          </h6>
                      <h2 className="mb-0">Exclusive Hot Deal Ends Soon!</h2>
                    </div>
                    <ul className="countdown list-inline d-flex my-5">
                      <CommingSoonCounter time={'100150'} />
                    </ul>

                    <div className="subscribe-form">
                      <form id="mc-form" className="row align-items-center no-gutters mb-3">
                        <Col>
                          <input name="EMAIL" className="email form-control input-2 bg-white" id="mc-email" placeholder="Email Address" required type="email" />
                        </Col>
                        <div className="col-auto">
                          <input className="btn btn-primary overflow-auto" name="subscribe" defaultValue="Subscribe" type="submit" />
                        </div>
                      </form> <small>Get started for 1 Month free trial No Purchace required.</small>
                    </div>
                  </div>
                </div>
                <Col lg={6} className="mt-5 mt-lg-0">
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
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/furniture/product/14.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/furniture/product/15.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Comfortable Armchair</Link>
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
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/furniture/product/05.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/furniture/product/06.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Wood Chair</Link>
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
                          <img className="card-img-top card-img-back" src={require(`../../assets/images/furniture/product/13.jpg`)} alt="..." />
                          <img className="card-img-top card-img-front" src={require(`../../assets/images/furniture/product/02.jpg`)} alt="..." />
                        </Link>
                        <div className="card-info">
                          <div className="card-body">
                            <div className="product-title"><Link className="link-title" to="/product-single-left/Woman/1">Modern Armchair</Link>
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
                  </OwlCarousel>
                </Col>
              </Row>
            </Container>
          </section>
          {/*hot deal end*/}
          {/*product ad start*/}
          <Parallax bgImage={require(`../../assets/images/furniture/01.png`)} bgClassName="custom-py-1" >
            <section>
              <Container>
                <Row>
                  <div className="col-12 col-lg-6">
                    <h4 className="mb-3"><span className="text-primary">2020</span> Collection</h4>
                    <h2 className="mb-3 font-w-7">New Top Trendy Furniture Accessories</h2>
                    <Link className="btn btn-primary btn-animated" to="#"><i className="las la-shopping-cart mr-1" /> Shop Now</Link>
                  </div>
                </Row>
              </Container>
            </section>
          </Parallax>
          {/*product ad end*/}
          {/*blog start*/}
          <section>
            <Container>
              <Row className="justify-content-center text-center mb-5">
                <Col md={10} lg={8} className="col-12">
                  <div>
                    <h6 className="text-primary mb-1">
                      — Furniture Blog
                        </h6>
                    <h2 className="mb-0">Latest News Feed</h2>
                  </div>
                </Col>
              </Row>
              {/* / .row */}
              <Blogcart />
              <Row className="justify-content-center text-center mt-5">
                <Col> <Link className="btn btn-dark" to="/blog-card">View All Blog</Link>
                </Col>
              </Row>
            </Container>
          </section>
          {/*blog end*/}
          {/*brand logo start*/}
          <section className="pt-0">
            <Container>
              <Row>
                <Col>
                  <Clientlogo />
                </Col>
              </Row>
            </Container>
          </section>
          {/*brand logo end*/}
        </div>
        {/*body content end*/}
      </>
    );
  }
}

export default index5;