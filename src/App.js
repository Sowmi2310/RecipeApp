import "./styles.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Home from "./components/Home";
import LikedRecipes from "./components/LikedRecipes";

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/liked-recipes" element={<LikedRecipes />} />
        </Routes>
      </Container>
    </Router>
  );
}
