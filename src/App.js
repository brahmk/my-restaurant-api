import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Routes is like a switch/case statement, Route is the case
import RestaurantList from "./components/RestaurantList";
import MenuBar from "./components/MenuBar";
import { Layout, Menu } from "antd";
import {
  PlusCircleOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout className="layout">
          <Header>
            <MenuBar />
          </Header>
          <Content>
            <Routes>
            <Route path='add' element={<h1>Add Restaurant</h1>}/>
            <Route path='random' element={<h1>Random</h1>}/>
            <Route path='login' element={<h1>Login</h1>}/>
              <Route path="/" element={<RestaurantList />} />
            
             
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
