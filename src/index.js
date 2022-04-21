import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Card from "./Component/Card";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Card />
    <App />
  </StrictMode>
);
