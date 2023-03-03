import { IMG_CDN_URL } from "../constant";



export const RestaurantCard=({name,cuisines,lastMileTravel,cloudinaryImageId})=>{
    // const {name,cuisines,lastMileTravel,cloudinaryImageId} =props.data;
    
        return(
            <div className="card">
                <img src={IMG_CDN_URL+cloudinaryImageId}/>
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{lastMileTravel}</h3>
            </div>
        );
    }