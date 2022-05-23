// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { Button, Form, Input } from "antd";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdo0oyeecAdZVMD2WlbVMDFx3j4-uceRs",
  authDomain: "my-first-firestore-bk.firebaseapp.com",
  projectId: "my-first-firestore-bk",
  storageBucket: "my-first-firestore-bk.appspot.com",
  messagingSenderId: "299279979419",
  appId: "1:299279979419:web:ea19db5be444dba301873e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Login() {
  return (
    <>
    <section style={{padding:' 2em'}}>
      <Form
      labelCol={{span: 8}}
          wrapperCol={{span: 16}}>
        <Form.Item label="email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{span:16, offset: 8}}>
        <Button type="primary" htmlType="Submit">login</Button>
          
        </Form.Item>
      </Form>
      </section>
    </>
  );
}
