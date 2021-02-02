import React, { Component } from 'react';
import { Col } from 'reactstrap';
class Newsletter1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="subscribe-form">
                <form id="mc-form" className="row align-items-center no-gutters mb-3">
                    <Col>
                        <input defaultValue name="EMAIL" className="email form-control input-2 bg-white" id="mc-email" placeholder="Email Address" required type="email" />
                    </Col>
                    <div className="col-auto">
                        <input className="btn btn-primary overflow-auto" name="subscribe" defaultValue="Subscribe" type="submit" />
                    </div>
                </form> <small>Get started for 1 Month free trial No Purchace required.</small>
            </div>
        );
    }
}

export default Newsletter1;