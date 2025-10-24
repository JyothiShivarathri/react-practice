
const RestaurantCard = (props) => {
   console.log(props)
   const {name,cuisines,avgRating,deliveryTime,cloudinaryImageId}=props.restObj
    return (
        <div className="res-card">
            <img
                className="res-img"
                src={`https://res.cloudinary.com/swiggy/image/upload/${cloudinaryImageId}`} alt="Restaurant"
            />
            <div className="res-info">
                <h3>{name}</h3>
                <p>{cuisines.join(',')}</p>
                <div className="res-meta">
                    <span>⭐ {avgRating}</span>
                    <span>•</span>
                    <span>{deliveryTime}</span>
                </div>
            </div>
        </div>
    );
};
export default RestaurantCard;