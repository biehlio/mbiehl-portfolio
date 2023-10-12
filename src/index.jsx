import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomeDesktop } from "./screens/HomeDesktop";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomeDesktop />);
