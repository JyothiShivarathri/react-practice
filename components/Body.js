import { useContext, useEffect, useState } from "react"
import RestaurantCard from "./ResturantCard"
import { useOutletContext } from "react-router-dom";
const Body=()=>{
 const {listOfResturants, setlistOfResturantsofRestaurents} = useOutletContext();
   const[searchText,setSearchText]=useState([]);
   const[filterRestaurents,setFilterRestaurants]=useState([]);
   useEffect(()=>{
         setFilterRestaurants(listOfResturants)
   },[listOfResturants]) //Never call setState directly in the component body (event handlers,useeFFECT,CALLBACKS)

   return(
    <>
    <div className="search">
        <input type="text" placeholder="search" onChange={(e)=>{
          setSearchText(e.target.value)
        }} />
        <button onClick={()=>{
            const filteredData=listOfResturants.filter(lst=>lst.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilterRestaurants(filteredData);

        }}>Search</button>

    </div>
    <div className="res-container">
        {filterRestaurents.map(restObj=>{
             return  <RestaurantCard  restObj={restObj} key={restObj.id}/>
        })
    }

    </div>
    </>
   )
}
export default Body