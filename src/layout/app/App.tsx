import React from "react";
import {Layout} from "antd";
import MenuComponent from '../menu/menu';

export default class App extends React.Component<any, any>{
    render() {
        return (
            <Layout>
                <MenuComponent/>
                <Layout>
                    <Layout.Header>Header</Layout.Header>
                    <Layout.Content>Content</Layout.Content>
                </Layout>
            </Layout>
        );
    }
}
