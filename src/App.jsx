import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Sider, Content, Footer } = Layout;

export default function App() {
	return (
		<Layout style={{ height: "90vh" }}>
			<Sider>Sider</Sider>
			<Layout>
				<Content style={{ height: "60vh" }}>Content</Content>
				<Footer style={{ height: "30vh" }}>Footer</Footer>
			</Layout>
		</Layout>
	);
}
