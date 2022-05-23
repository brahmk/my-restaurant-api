import React from "react";
import {Col, Card} from 'antd'
const {Meta} = Card;




export default function RestaurantCard({ restaurant}) {

    return (
        <>
                  <Col style={{width: '300px', margin: '1em'}} key={restaurant.id}>
                <Card
                cover={<img src = {restaurant.image} alt={`Typical meal at ${restaurant.name}`}/>}
                hoverable>
                    <Card.Meta title={restaurant.name} description={restaurant.address} />
                    
             
             
             </Card>
         </Col>
        
        
        
        
        
        
        </>
    )
}