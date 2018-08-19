import React, { Component } from 'react';
import { Row, Col } from 'antd';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'richard'
        }
    }
    render() {
        return (
            <div className="header">
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;