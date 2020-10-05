import React from "react";
import { Layout, Menu } from "antd";
import img from "./img.jpeg";
import img2 from "./img2.jpeg";

const { Sider } = Layout;

export default function AppSider({ setCipher }) {
	return (
		<Sider style={{ backgroundImage: `url(${img})` }}>
			<h1 style={{ color: "white", margin: "2vw" }}>Select Cipher</h1>
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={["1"]}
				style={{ marginTop: "10vh", backgroundImage: `url(${img})` }}
			>
				<Menu.Item key="1" onClick={() => setCipher("shift")}>
					Shift Cipher
				</Menu.Item>
				<Menu.Item key="2" onClick={() => setCipher("vigenere")}>
					Vigenere Cipher
				</Menu.Item>
				<Menu.Item key="3" onClick={() => setCipher("playfair")}>
					PlayFair Cipher
				</Menu.Item>
				<Menu.Item key="4" onClick={() => setCipher("railfence")}>
					RailFence Cipher
				</Menu.Item>
				<Menu.Item key="5" onClick={() => setCipher("substitution")}>
					Substitution Cipher
				</Menu.Item>
			</Menu>
		</Sider>
	);
}
