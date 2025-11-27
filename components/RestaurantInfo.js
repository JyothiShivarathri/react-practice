import { useEffect, useState } from "react";
// import "./RestaurantInfo.css"; // separate CSS file

const RestaurantInfo = () => {
  const [resData, setResData] = useState({});

  useEffect(() => {
    fetchResturantInfo();
  }, []);

  const fetchResturantInfo = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "775a4f6b11mshb6174685d1531a7p14210fjsn9bac0956d70a",
        "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
      },
    };

    const response = await fetch(
      "https://pizza-and-desserts.p.rapidapi.com/desserts/1",
      options
    );
    const data = await response.json();
    console.log(data, "resData");
    setResData(data);
  };

  if (!resData.name) return <div>Loading...</div>;

  return (
    <div className="restaurant-card">
      <img className="restaurant-img" src={resData.img} alt={resData.name} />
      <div className="restaurant-info">
        <h1 className="restaurant-name">{resData.name}</h1>
        <p className="restaurant-desc">{resData.description}</p>
        <h4 className="restaurant-price">Price: ${resData.price}</h4>
        <p className="restaurant-quantity">Quantity: {resData.quantity}</p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
