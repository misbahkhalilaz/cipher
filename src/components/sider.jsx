import React from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

export default function AppSider({ setCipher }) {
  return (
    <Sider>
      <h1 style={{ color: "white", margin: "2vw" }}>Select Cipher</h1>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ marginTop: "10vh" }}
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
