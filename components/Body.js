import restcardData from "../utilities/restcarddata";
import RestaurantCard from "./ResturantCard";
const Body = () => {
    return (
        <div className="Body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restcardData.map(restObj=>
                             <RestaurantCard key={restObj.id} restObj={restObj} />
                    )
                }
               
             
            </div>
        </div>
    )
}
export default Body;