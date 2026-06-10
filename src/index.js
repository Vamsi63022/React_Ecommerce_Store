import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import { CartProvider } from "./stores/context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <BrowserRouter>
  <CartProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </CartProvider>,
   </BrowserRouter>
);
