import React, { useEffect } from "react";
import { Layout, Form, Input } from "antd";

const { Content } = Layout;
const { TextArea } = Input;

// const callCiphers = (cipher, ) =>

export default function AppContent({ cipher }) {
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 18,
    },
  };
  return (
    <Content style={{ backgroundColor: "#c5d1d6" }}>
      <Form style={{ margin: "5vw" }} {...layout}>
        <Form.Item label="Key:">
          <Input style={{ backgroundColor: "#edf1f2" }} />
        </Form.Item>
        <Form.Item label="Plain Text:">
          <TextArea rows={6} style={{ backgroundColor: "#edf1f2" }} />
        </Form.Item>
        <Form.Item label="Cipher Text:">
          <TextArea rows={6} style={{ backgroundColor: "#edf1f2" }} />
        </Form.Item>
      </Form>
    </Content>
  );
}
