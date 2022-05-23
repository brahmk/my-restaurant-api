// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { Button, Form, Input } from "antd";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

import { UserContext } from "../App";
import { useContext } from "react";

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

export default function Login() {

    const{setUser} = useContext(UserContext)

    const handleLogin = ({email, password}) => {
        //login w firebase auth
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth,email,password)
        .then(res => setUser(res.user))
        .catch(console.error)
        

       
    }

    const handleGoogleLogin = () => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app)
         const provider = new GoogleAuthProvider();
         signInWithPopup(auth, provider)
         .then(res => console.log(res.user))
         .catch(console.error)
         
    }
  return (
    <>
    <section style={{padding:' 2em'}}>
      <Form
      onFinish={handleLogin}
      labelCol={{span: 8}}
          wrapperCol={{span: 16}}>
        <Form.Item label="email" 
        name="email" 
        rules={[{required:true, message:"please enter a valid email."}]}>
          <Input />
        </Form.Item>
        <Form.Item label="password"
         name="password"
         rules={[{required:true, message:"please enter your password."}]}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{span:16, offset: 8}}>
        <Button type="primary" htmlType="Submit">login</Button>
          
        </Form.Item>
        <Form.Item wrapperCol={{span:16, offset: 8}}>
        <Button onClick = {() => handleGoogleLogin()}>google login</Button>
          
        </Form.Item>
      </Form>
      </section>
    </>
  );
}
