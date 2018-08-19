import React, { Component, Fragment } from 'react';
import { Layout } from 'antd'
import Nav from '../../component/NavLeft';
import Top from '../../component/Header';

const { Header, Footer, Content, Sider } = Layout;

class App extends Component {
    render() {
        return (
            <Fragment>
                <Layout>
                    <Sider>
                        <Nav></Nav>
                    </Sider>
                    <Layout>
                        <Header></Header>
                        <Content><Top></Top></Content>
                        <Footer>footer</Footer>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}

export default App;