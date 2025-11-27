
const RestaurantCard = (props) => {
//    console.log("******",props)
//    const {name,cuisines,avgRating,sla,cloudinaryImageId}=props.restObj
   const{name,description,price,quantity,img}=props.restObj
//    console.log("#########",{name,cuisines,avgRating,deliveryTime,cloudinaryImageId});
    //   console.log("#########",name);
   
    return (
        <div className="res-card">
            <img
                className="res-img"
                src={img}
            />
            <div className="res-info">
                <h3>{name}</h3>
                {/* <p>{cuisines.join(',')}</p> */}
                <p>{description}</p>
                <div className="res-meta">
                    {/* <span>⭐ {avgRating}</span> */}
                    <span>{price}</span>
                    <span>•</span>
                    <span>{quantity}</span>
                    {/* <span>{sla.slaString}</span> */}
                </div>
            </div>
        </div>
    );
};
export default RestaurantCard;