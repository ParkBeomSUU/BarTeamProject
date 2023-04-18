import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import "./index.css";
import configureStore from "./redux/configureStore";
import axios from "axios";

const store = configureStore();
axios.defaults.withCredentials = true;

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
//registerServiceWorker();
