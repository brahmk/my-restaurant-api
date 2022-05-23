import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Routes is like a switch/case statement, Route is the case
import RestaurantList from "./components/RestaurantList";
import Login from "./components/Login";
import { useState } from "react";
import { createContext } from "react";

import RestaurantPage from "./components/RestaurantPage";
import MenuBar from "./components/MenuBar";
import { Layout, Menu } from "antd";
import {
  PlusCircleOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState();
  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
        <Layout className="layout">
          <Header>
            <MenuBar user ={user}/>
          </Header>
          <Content>
            <Routes>
              <Route
                path="/restaurants/:restaurantId"
                element={<RestaurantPage />}
              />

              <Route
                path="add"
                element={
                  !user 
                  ? <Login  /> 
                  : <h1>Add restaurant</h1>
                }
              />
              <Route path="random" element={<h1>Random</h1>} />

              <Route path="/" element={<RestaurantList />} />
            </Routes>
          </Content>
        </Layout>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
