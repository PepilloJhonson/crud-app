import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa el componente principal
import "./index.css"; // Importa estilos globales (si tienes un archivo CSS)
import "bootstrap/dist/css/bootstrap.min.css"; //importamos bootstrap
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
