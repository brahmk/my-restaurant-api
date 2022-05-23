import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantPage() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState();
  useEffect(() => {
    //fetch rest by id
    fetch(`https://my-first-firestore-bk.web.app/restaurants/${restaurantId}`)
      .then((response) => response.json())
      .then((data) => setRestaurant(data))
      .catch(console.error);
  }, [restaurantId]);
  return (
    <>
      
      <Link to="/">&lt; Back</Link>
      <RestaurantCard restaurant={restaurant} />
    </>
  );
}
