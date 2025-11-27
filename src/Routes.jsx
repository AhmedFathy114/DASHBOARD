import React from "react";
import Layout from "./Layout/Layout.jsx";
// *******************************Home Routing*************************************
import Home from "./Pages/Home/Home.jsx";
// ***********************LogIN/SignUp/contact******************************
import Login from "./Pages/LogIN/Login.jsx";
import SignUp from "./Pages/SignUP/SignUp.jsx";
import Contacts from "./Pages/Contacts/Contacts.jsx";
// *******************************Error Routing*************************************
import Error from "./Pages/Error/Error.jsx";
// ******************************Services Routing*************************************
import ServicesPage from "./Pages/Services/ServicePage/ServicesPage.jsx";
import ServicesDetails from "./Pages/Services/BookDetails/ServicesDetails.jsx";
import BookService from "./Pages/Services/BookService/BookService.jsx";
import ServicesLayout from "./Pages/Services/ServicesLayout/ServicesLayout.jsx";
import CustomerServiceLayout from "./Pages/Services/ServicesLayout/CustomerServiceLayout.jsx";
import PostNewServicePage from "./Pages/Services/PostNewService/PostNewService.jsx";
import WDoneservice from "./Pages/Services/WDoneServicePage/WDoneservice.jsx";
import CustomerProfilePage from "./Pages/CustomerProfile/CustomerProfile.jsx";

const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "Our_ORVICO/", element: <Home /> },
      {
        path: "services",
        element: <ServicesLayout />,
        children: [
          { index: true, element: <ServicesPage /> },
          { path: "postservice", element: <PostNewServicePage /> },
          {
            path: "details",
            element: <CustomerServiceLayout />,
            children: [
              { index: true, element: <ServicesDetails /> },
              { path: "bookservice", element: <BookService /> }
            ]
          },
        ],
      },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "contacts", element: <Contacts /> },
      { path: "myprofile", element: <CustomerProfilePage/> },
    ],
  },
  { path: "*", element: <Error /> },
];
export default Routes;
