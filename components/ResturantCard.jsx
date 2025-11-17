
const RestaurantCard = (props) => {
//    console.log("******",props)
   const {name,cuisines,avgRating,sla,cloudinaryImageId}=props.restObj
//    console.log("#########",{name,cuisines,avgRating,deliveryTime,cloudinaryImageId});
    //   console.log("#########",name);
   
    return (
        <div className="res-card">
            <img
                className="res-img"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="Restaurant"
            />
            <div className="res-info">
                <h3>{name}</h3>
                <p>{cuisines.join(',')}</p>
                <div className="res-meta">
                    <span>⭐ {avgRating}</span>
                    <span>•</span>
                    <span>{sla.slaString}</span>
                </div>
            </div>
        </div>
    );
};
export default RestaurantCard;