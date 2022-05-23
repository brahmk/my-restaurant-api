import './App.css';
import RestaurantList from './components/RestaurantList';
import MenuBar from './components/MenuBar';
import {Layout, Menu} from 'antd'
import { PlusCircleOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const {Header , Content} = Layout


function App() {
  return (
   <>
   <Layout className='layout'>
     <Header>
       <MenuBar/>

     </Header>
     <Content>
     <RestaurantList />
     </Content>
   
     </Layout>
   
   
   
   </>
  );
}

export default App;
