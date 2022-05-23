import React from "react";
import { useEffect, useState } from "react";
import {Row} from 'antd';
import RestaurantCard from "./RestaurantCard";
import {Layout, Menu} from 'antd'

const {Header , Content} = Layout

function RestaurantList(){
    const [restaurants, setRestaurants]= useState()
useEffect(() => {
fetch('https://my-first-firestore-bk.web.app/restaurants')
.then(response => response.json())
.then(data => setRestaurants(data))
.catch(console.error)

},[])
    return (<>
    <section style ={{ marginTop: '60px'}}>
        <Row gutter={16}>
        {!restaurants
        ? <h2>Loading...</h2>
        :
        restaurants.map(restaurant =>  <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            
        
    
    

    )}
    </Row>
    </section>
    
    
    
    </>)
}


export default RestaurantList;