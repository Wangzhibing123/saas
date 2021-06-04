import React, {Component} from "react";
import { Menu, Layout } from 'antd';
import './menu.less';
import {
    HomeOutlined,
    MedicineBoxOutlined,
    ContainerOutlined,
    TeamOutlined,
    PayCircleOutlined,
    CustomerServiceOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from '@ant-design/icons';
// const { SubMenu } = Menu;
const { Sider } = Layout;

export default class MenuComponent extends Component<any, any>{
    menuList = [
        {icon: () => <HomeOutlined style={{fontSize: '20px'}}/>, name: '首页'},
        {icon: () => <MedicineBoxOutlined style={{fontSize: '20px'}}/>, name: '产品'},
        {icon: () => <ContainerOutlined style={{fontSize: '20px'}}/>, name: '订单'},
        {icon: () => <TeamOutlined style={{fontSize: '20px'}}/>, name: '合作'},
        {icon: () => <PayCircleOutlined style={{fontSize: '20px'}}/>, name: '财务'},
        {icon: () => <CustomerServiceOutlined style={{fontSize: '20px'}}/>, name: '服务'},
        {icon: () => <AppstoreOutlined style={{fontSize: '20px'}}/>, name: '更多功能'},
        {icon: () => <SettingOutlined style={{fontSize: '20px'}}/>, name: '设置'},
    ]
    state = {
        collapsed: false,
    };
    render() {
        const {menuList} = this;
        return (
            <Sider className={'menuComponent'} collapsed={true} theme={"light"} width={80}>
                <div className={'log-content'}>
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
                </div>
                <Menu theme="light" mode="inline">
                    {
                        menuList.map((i, index) => {
                            return (
                                <Menu.Item key={index} icon={i.icon()} title={i.name}>
                                    {i.name}
                                </Menu.Item>
                            )
                        })
                    }
                    {/*<SubMenu key="sub2" icon={<TeamOutlined />} title="Team">*/}
                    {/*    <Menu.Item key="6">Team 1</Menu.Item>*/}
                    {/*    <Menu.Item key="8">Team 2</Menu.Item>*/}
                    {/*</SubMenu>*/}
                </Menu>
            </Sider>
        );
    }
}
