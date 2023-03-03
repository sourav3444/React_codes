
import { restaurantList } from "../constant";
import { RestaurantCard } from "./restaurantCard";
import { useState } from "react";

function filterKarDungaBSDK(searchInput,restaurantJi){
    return data=restaurantJi.filter((obj)=>{
     return obj.data.name.includes(searchInput);
    });
 };

export const Body=()=>{
    const [searchInput,setSearchInput]=useState("Dominoz");
    const [restaurantJi,setRestaurantJi]=useState(restaurantList);

    

    return (
        <>
        <div className="search-container">
            <input
             type="text" 
             className="search-input" 
             placeholder="Search.." 
             value={searchInput}
             onChange={(e)=>{
                setSearchInput(e.target.value);
             }}
             />
            <button className="search-btn"  onClick={()=>{
                //filter
                const dataji=filterKarDungaBSDK(searchInput,restaurantJi);
                
                //update karo
                setRestaurantJi(dataji);
                
             } }
             >Search</button>   
        </div>
        <div className="card-list">
            {                
            restaurantJi.map((restaurant)=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            })

            }
        </div>
        </>
    );
}