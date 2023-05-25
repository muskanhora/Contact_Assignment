import React from "react";
import  ReactDOM  from "react-dom/client";
import Contact from "./src/components/Contact";
import Header from "./src/components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Maps from "./src/components/Maps_and_Charts";
import { Provider } from "react-redux";
import store from './src/store'

const AppLayout=()=>{
    return(
        <Provider store={store}>
        <Header/>
        <Outlet/>
        </Provider>
    )
}

const approute=createBrowserRouter([
    {
        path:"",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Contact/>
            },
            {
                path:"/map",
                element:<Maps/>
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approute}/>);
