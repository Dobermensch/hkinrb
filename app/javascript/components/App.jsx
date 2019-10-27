/*
    For React to be aware of the available routes and use them, the routes have to be available at the entry point 
    to the application. To achieve this, you will render your routes in a component that React will render in your 
    entry file.
*/

import React from "react";
import Routes from "../routes/Index";

export default props => <>{Routes}</>;