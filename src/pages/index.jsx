import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Pages;
