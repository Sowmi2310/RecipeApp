import { Card, Col,Button  } from "react-bootstrap";
import { useState} from "react";
import {useDispatch, useSelector} from "react-redux"


import RecipeDetails from "./RecipeDetails";
// import imge from "../download.jpg";
import { getDetails } from "../redux/actions";

export default function RecipeComp(props) {
  const dispatch=useDispatch()
  const [modalShow, setModalShow] = useState(false); 
  const likedRecipes = useSelector(state => state.likedRecipes.likedRecipes); 
  const [isLiked, setIsLiked] = useState(likedRecipes.some(recipe => recipe.idMeal === props.meal.idMeal))
  const handleClick=(id)=>{
    setModalShow(true)
    if(!modalShow){
        dispatch(getDetails(id))   
    }  
  }
  const toggleLike = () => {
    if (isLiked) {
      dispatch({
        type: "REMOVE_LIKED_RECIPE",
        payload: props.meal
      });
    } else {
      dispatch({
        type: "ADD_LIKED_RECIPE",
        payload: props.meal
      });
    }
    setIsLiked(!isLiked);
  };

  return (
    <Col>
    {/* To the particular recipe description */}
      <RecipeDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={props.meal.idMeal}
      />
      {/* To show the whole recipe */}
      <Card onClick={()=>handleClick(props.meal.idMeal)}>
        <Card.Img variant="top" src={props.meal.strMealThumb} />
        <Card.Body>
          <Card.Title>{props.meal.strMeal}</Card.Title>
          <Card.Text
           className="bg-warning p-3 text-center h4 font-weight-bold rounded "
           style={{cursor:"pointer"}}>
             View Recipe
             </Card.Text>
             <Button variant={isLiked ? "" : "outline-secondary"} onClick={toggleLike}>
            {isLiked ? "❤️" : "🤍"} 
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
