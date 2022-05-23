import React from "react";
import { useNavigate } from "react-router-dom";
import {Col, Card, Rate} from 'antd'

import { useContext } from "react";
import {UserContext} from '../App'
const {Meta} = Card;


export default function RestaurantCard({ restaurant}) {
    let navigate = useNavigate()
    const {user} = useContext(UserContext);

    return (
        <>
                  <Col style={{width: '300px', margin: '1em'}} key={restaurant?.id}>
                <Card  onClick={() => navigate(`/restaurants/${restaurant?.id}`)}
                cover={<img src = {restaurant?.image} alt={`Typical meal at ${restaurant?.name}`}/>}
                hoverable>
                    <Card.Meta title={restaurant?.name} description={restaurant?.address}/>  {user && <Rate/>}
                    
             
             
             </Card>
         </Col>
        
        
        
        
        
        
        </>
    )
}