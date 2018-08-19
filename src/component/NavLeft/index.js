import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less';
import menuConfig from '../../config/menuConfig';


const SubMenu = Menu.SubMenu;

class Nav extends Component {
    componentWillMount() {
        const menuData = this.renderMenu(menuConfig);
        this.setState({
            menuData
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            return (
                <SubMenu title={item.title} key={item.key}>
                    {item.children ? item.children.map((childItem) => {
                        return <Menu.Item key={childItem.key} >{childItem.title}</Menu.Item>
                    }) : null}
                </SubMenu>
            )
        })
    }
    render() {
        return (
            <Fragment>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="logo" />
                    <h1>richard</h1>
                </div>
                <Menu theme="dark" mode="vertical">
                    {
                        this.state.menuData
                    }
                </Menu>
            </Fragment>

        )
    }
}

export default Nav;