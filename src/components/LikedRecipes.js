// LikedRecipes.js
import { Row, Col, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LikedRecipes() {
  const likedRecipes = useSelector(state => state.likedRecipes.likedRecipes);
  const dispatch = useDispatch();
  //to navigate to the page 
  const navigate = useNavigate();

  const removeLike = (recipe) => {
    dispatch({
      type: "REMOVE_LIKED_RECIPE",
      payload: recipe
    });
  };

  return (
    <div>
         <Button onClick={() => navigate("/")} className="mt-3" style={{
        marginLeft:"1020px",width:"200px"
      }}>Back to Home</Button>
      <h2 className="text-center my-4">Liked Recipes</h2>
     
      <Row>
      {/* To show the Liked the recipe */}
        {likedRecipes.length > 0 ? (
          likedRecipes.map(recipe => (
            <Col key={recipe.idMeal} md={4}>
              <Card>
                <Card.Img variant="top" src={recipe.strMealThumb} />
                <Card.Body>
                  <Card.Title>{recipe.strMeal}</Card.Title>
                  <Button variant="outline-danger" onClick={() => removeLike(recipe)}>
                    Remove ❤️
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">No liked recipes yet!</p>
        )}
      </Row>
      
    </div>
  );
}
