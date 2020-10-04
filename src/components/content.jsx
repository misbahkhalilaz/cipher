import React, { useEffect, useState } from "react";
import { Layout, Form, Input, Switch } from "antd";
import shift from "../model/shift";
import VigenereCipher from "../model/vigenere";
import fairplay from "../model/playfair";
import * as railfence from "../model/railfence";

const { Content } = Layout;
const { TextArea } = Input;

const callCiphers = (cipher, dec, text, key) =>
  cipher === "shift"
    ? dec
      ? shift(text, parseInt(key) * -1)
      : shift(text, parseInt(key))
    : cipher === "vigenere"
    ? dec
      ? VigenereCipher.decrypt(text, key)
      : VigenereCipher.encrypt(text, key)
    : cipher === "playfair"
    ? dec
      ? fairplay.decrypt(key.toString(), text)
      : fairplay.encrypt(key.toString(), text)
    : cipher === "railfence"
    ? dec
      ? railfence.decodeRailFenceCipher(text, key)
      : railfence.encodeRailFenceCipher(text, key)
    : "";

export default function AppContent({ cipher }) {
  const [dec, setDec] = useState(false);
  const [key, setKey] = useState(0);
  const [text, setText] = useState("");
  const [cipherText, setCipherText] = useState("");

  useEffect(() => {
    if (key.length > 0)
      dec
        ? setText(callCiphers(cipher, dec, cipherText, key))
        : setCipherText(callCiphers(cipher, dec, text, key));
  }, [cipher, key]);

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
        <Form.Item label="Decryption:">
          <Switch onChange={(e) => setDec(e)} />
        </Form.Item>
        <Form.Item label="Key:">
          <Input
            style={{ backgroundColor: "#edf1f2" }}
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Plain Text:">
          <TextArea
            rows={6}
            style={{ backgroundColor: "#edf1f2" }}
            value={text}
            onChange={(e) => {
              if (dec === false) {
                setText(e.target.value);
                setCipherText(callCiphers(cipher, 0, e.target.value, key));
              }
            }}
          />
        </Form.Item>
        <Form.Item label="Cipher Text:">
          <TextArea
            rows={6}
            style={{ backgroundColor: "#edf1f2" }}
            value={cipherText}
            onChange={(e) => {
              if (dec) {
                setCipherText(e.target.value);
                setText(callCiphers(cipher, 1, e.target.value, key));
              }
            }}
          />
        </Form.Item>
      </Form>
    </Content>
  );
}
