import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
const AppLayout = () => {
  // console.log(<Body/>,"BDD")
  const [listOfResturants, setListofRestaurents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com',
    "X-RapidAPI-Key": "775a4f6b11mshb6174685d1531a7p14210fjsn9bac0956d70a"

	}
};
    const data = await fetch(
      "https://pizza-and-desserts.p.rapidapi.com/desserts",options
    );
    const RestCardData = await data.json();
    console.log(RestCardData,"res");
    const listOfResturants =RestCardData
    setListofRestaurents(listOfResturants);
  };
  return (
    <div id="app">
      <Header fetchData={fetchData} />
      {/* <Body list={listOfResturants} setListofRestaurents={setListofRestaurents}></Body> */}
      <Outlet  context={{ listOfResturants, setListofRestaurents }}/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
        // errorElement:<Error/>
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resid",
        element:<RestaurantInfo/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
