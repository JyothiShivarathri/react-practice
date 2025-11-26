import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
const AppLayout = () => {
  // console.log(<Body/>,"BDD")
  const [listOfResturants, setListofRestaurents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4511223&lng=78.40874889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const RestCardData = await data.json();
    const listOfResturants =
      RestCardData.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants;
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
