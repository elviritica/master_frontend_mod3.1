import React from "react";
import { createRoot } from "react-dom/client";
import { HelloWorldComponent } from "./helloWorldComponent";
import logo from "./assets/logo_1.png";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Bundling Module - Master Lemoncode (Webpack)</h1>
    <img src={logo} style={{width: 150}} />
    <HelloWorldComponent />
  </div>
);
