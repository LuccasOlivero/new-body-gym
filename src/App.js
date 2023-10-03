import Main from "./componenets/Main";
import About from "./componenets/About";
import Pricing from "./componenets/Pricing";
import Footer from "./componenets/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Main></Main>
      <About></About>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
}
