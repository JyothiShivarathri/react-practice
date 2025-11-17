// import restcardData from "../utilities/restcarddata";
import RestaurantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmmer from "./shimmmer";
// let restcardDataa=[
//  {
// "id": "4138",
// "name": "Grand Hotel",
// "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/10/11bab9a5-1cd7-4e69-b837-f7ec3150c493_80f7ff85-05a4-4f94-8525-bf9f2713fbce.jpg",
// // "locality": "Banjara Hills",
// // "areaName": "Abids",
// "costForTwo": "₹300 for two",
// "cuisines": [
// "Biryani",
// "Chinese",
// "Kebabs",
// "Tandoor"
// ],
// "avgRating": 4.3,
// "deliveryTime": 34,
// },
//  {
// "id": "4139",
// "name": "Cafe 555 & Aqeeq Restaurant",
// "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/10/11bab9a5-1cd7-4e69-b837-f7ec3150c493_80f7ff85-05a4-4f94-8525-bf9f2713fbce.jpg",
// // "locality": "Banjara Hills",
// // "areaName": "Abids",
// "costForTwo": "₹300 for two",
// "cuisines": [
// "Biryani","Haleem"
// ],
// "avgRating": 4.4,
// "deliveryTime": 36,
// },
// {
//     "id": "4140",
// "name": "Mehfil",
// "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/10/11bab9a5-1cd7-4e69-b837-f7ec3150c493_80f7ff85-05a4-4f94-8525-bf9f2713fbce.jpg",
// // "locality": "Banjara Hills",
// // "areaName": "Abids",
// "costForTwo": "₹300 for two",
// "cuisines": [
// "Biryani","Chinese","Kebabs","Tandoor"
// ],
// "avgRating": 4.4,
// "deliveryTime": 43,
// }

// ]
const Body = () => {
    const[restcardData,setRestCardData]=useState([])
    
    useEffect(()=>{
        fetchData()
    },[])
    // console.log("Body renderinggg")

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4511223&lng=78.40874889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const restaurantsList = await data.json();
        const resturentsData=restaurantsList.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        setRestCardData(resturentsData)
        // console.log(resturentsData,"resturents")

    }
    if(restcardData.length===0){
        return <Shimmmer/>
    }
    return (
        <div className="Body">
            <div className="search">
                <input type="text" onChange={(e)=>{
                    value=e.target.value;
                    console.log(value,"value")
                }}/>
                 <button onClick={()=>{
                    const filterData=restcardData.filter(res=>res.info.name.toLowerCase().includes(value.toLowerCase()))
                    console.log("filterdata",filterData)
                    setRestCardData(filterData)
        
                 }
                 }>search</button></div>
            <div className="filter">
                <button onClick={()=>{
                  const restcard=restcardData.filter(res=>res.info.avgRating>4.3);
                  console.log(restcard,"rest11")
                  setRestCardData(restcard)
                }
                }>Top Rated resturents</button>
            </div>
            <div className="res-container">
                {
                            // console.log(resturentsData,"resturents")
                    restcardData.map(restObj=>{
                        // console.log(restObj,"rest");
                           return  <RestaurantCard  key={restObj.info.id} restObj={restObj.info} />
                    })
                }
               
             
            </div>
        </div>
    )
}
export default Body;