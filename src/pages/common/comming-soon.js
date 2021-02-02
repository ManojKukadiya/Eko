import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CommingSoonCounter from '../../widgets/common/counter';

class commingsoon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="page-content">
                {/*coming soon start*/}
                <section className="fullscreen-banner py-8 o-hidden bg-pos-r bg-primary" style={{ backgroundImage: `url(${require(`../../assets/images/bg/07.png`)})` }}>
                    <div className="container-fluid px-md-8 h-100">
                        <Row className="h-100 align-items-center">
                            <div className="col-12 h-100">
                                <div className="p-5 rounded bg-white h-100">
                                    <Row className="justify-content-between align-items-center h-100">
                                        <div className="col-lg-5 col-md-12">
                                            <div className="coming-soon">
                                                <h1 className="mt-4 mb-2 font-w-7">Coming Soon</h1>
                                                <p>We Are Creatinig Something Awesome And Exciting For You</p>
                                                <ul className="countdown list-inline d-flex align-items-center">
                                                    <CommingSoonCounter time={'100150'} />
                                                </ul>
                                                <div className="mt-5">
                                                    <h4 className="title z-index-1 mb-2">Subscribe to get notified!</h4>
                                                    <div className="subscribe-form">
                                                        <form id="mc-form1" className="row align-items-center no-gutters mb-3">
                                                            <Col>
                                                                <input name="EMAIL" className="email form-control input-2 bg-white" id="mc-email1" placeholder="Email Address" type="text" />
                                                            </Col>
                                                            <div className="col-auto">
                                                                <input className="btn btn-primary overflow-auto" name="subscribe" defaultValue="Subscribe" type="submit" />
                                                            </div>
                                                        </form> <small>Get started for 1 Month free trial No Purchace required.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 d-none d-lg-block text-lg-right">
                                            <img className="img-fluid d-inline" src={require(`../../assets/images/coming-soon-img.png`)} alt="" />
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </Row>
                    </div>
                </section>
                {/*coming soon end*/}
            </div>
        );
    }
}

export default commingsoon;