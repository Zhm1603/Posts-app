import React from "react";
import { RouterProvider } from "react-router";
import router from "../../router/index";
import "./style.css"

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;
