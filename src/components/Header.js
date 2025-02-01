import { Navbar, Container, FormControl, Form, Button, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import food from "../Assets/food.png"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState("");
  
  const dispatch = useDispatch();
  const likedRecipes = useSelector(state => state.likedRecipes.likedRecipes);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const navigate=useNavigate();
  //Search Recipe By Ingredient
  const getRecipes = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    const data = await res.json();
    dispatch({
      type: "GET_RECIPES",
      payload: data.meals
    });
  };
  useEffect(() => {
    getRecipes();
  }, [search]);

  return (
    <Navbar bg="dark" variant="dark" className="mb-4" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={food}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          <span>RECIPE TALK</span>
        </Navbar.Brand>
        {/* To search the Ingredient */}
        <Form className="d-flex" onSubmit={handleSubmit}>
          <FormControl
            type="search"
            placeholder="Search Recipe By Ingredient"
            className="me-2"
            aria-label="Search"
            style={{
              marginLeft:'600px'
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          
        </Form>
        {/* To like the recipe */}
        <div className="ml-auto">
          {likedRecipes.length > 0 && (
            <Button variant="outline-warning" href="#liked-recipes"  onClick={() => navigate("/liked-recipes")}>
              ❤️ <Badge>{likedRecipes.length}</Badge> Liked
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
}
