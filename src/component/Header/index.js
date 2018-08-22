import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { formateDate } from '../../util/util';
import { Axios } from '../../util/axios';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'richard'
        }
    }
    componentDidMount() {
        setInterval(() => {
            let sysTime = formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
        this.getWeather();
    }
    getWeather() {
        let city = '上海';
        Axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if (res.status === 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-detail">
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header;
