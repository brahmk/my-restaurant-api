import React from "react";
import {Layout, Menu} from 'antd'
import { useNavigate } from "react-router-dom";
import { PlusCircleOutlined, UserOutlined, QuestionCircleOutlined, HomeOutlined } from '@ant-design/icons';
import { useContext } from "react";
import {UserContext} from '../App'

const {Item} = Menu;
export default function MenuBar(){

    let navigate = useNavigate();
    const user = useContext(UserContext)
    return (<>
    <Menu theme='dark' mode='horizontal'>
       <Item  onClick={() => navigate('add')} key='add' icon={<PlusCircleOutlined style={{ fontSize: '1.8em'}}/>}></Item>
        {user && <Item key='random' icon={<QuestionCircleOutlined style={{ fontSize: '1.8em'}}/>}></Item>}

       <Item onClick={() => navigate('/')} key='home' icon={<HomeOutlined style={{ fontSize: '1.8em'}}/>}></Item>
       
       
       </Menu>
    
    
    
    
    </>)
}