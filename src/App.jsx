import React, { useState } from "react";
import { Layout } from "antd";
import AppSider from "./components/sider";
import "antd/dist/antd.css";
import AppContent from "./components/content";

export default function App() {
	const [cipher, setCipher] = useState("shift");

	return (
		<Layout style={{ height: "100vh" }}>
			<AppSider setCipher={setCipher} />
			<AppContent cipher={cipher} />
		</Layout>
	);
}
