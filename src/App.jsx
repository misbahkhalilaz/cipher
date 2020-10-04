import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

const { Sider, Content, Footer } = Layout;

export default function App() {
  return (
    <Layout style={{ height: "90vh" }}>
      <Sider>
        <h1 style={{ color: "white", margin: "12px" }}>Select Cipher</h1>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ height: "60vh" }}>Content</Content>
        <Footer style={{ height: "30vh" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
}
