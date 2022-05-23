import React from "react";
import {Layout, Menu} from 'antd'
import { PlusCircleOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';
export default function MenuBar(){
    return (<>
    <Menu theme='dark' mode='horizontal'>
       <Menu.Item key='add' icon={<PlusCircleOutlined style={{ fontSize: '1.8em'}}/>}></Menu.Item>
       <Menu.Item key='random' icon={<QuestionCircleOutlined style={{ fontSize: '1.8em'}}/>}></Menu.Item>
       <Menu.Item key='user' icon={<UserOutlined style={{ fontSize: '1.8em'}}/>}></Menu.Item>
       
       </Menu>
    
    
    
    
    </>)
}