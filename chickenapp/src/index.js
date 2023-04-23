import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { createUserApi } from "./api";

export const createOrGetUser = async (response, addUser) => {
  const decoded = jwt_decode(response.credential);

  const { name, picture, sub } = decoded;

  const user = {
    id: sub,
    type: "user",
    userName: name,
    image: picture,
  };

  console.log(user);

  addUser(user);
  createUserApi(user);
};

// axios.defaults.baseURL = "http://localhost:5000/";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:5000/";
} else {
  axios.defaults.baseURL = "https://chickenappbackend.azurewebsites.net/";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
