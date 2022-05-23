import React from "react";
import {Layout, Menu} from 'antd'
import { useNavigate } from "react-router-dom";
import { PlusCircleOutlined, UserOutlined, QuestionCircleOutlined, HomeOutlined } from '@ant-design/icons';



export default function MenuBar(){

    let navigate = useNavigate();
    return (<>
    <Menu theme='dark' mode='horizontal'>
       <Menu.Item  onClick={() => navigate('add')} key='add' icon={<PlusCircleOutlined style={{ fontSize: '1.8em'}}/>}></Menu.Item>
       <Menu.Item key='random' icon={<QuestionCircleOutlined style={{ fontSize: '1.8em'}}/>}></Menu.Item>

       <Menu.Item onClick={() => navigate('/')} key='home' icon={<HomeOutlined style={{ fontSize: '1.8em'}}/>}></Menu.Item>
       
       
       </Menu>
    
    
    
    
    </>)
}