// import { Link } from "react-router-dom";
import "../App.css";
import Popup from "reactjs-popup"; //Reactjs Popup Model

import IngredientModel from "./IngredientModal";

const DishCard = (props) => {
  const { id, name, description, image, mealType, type, ingredients } =
    props.dish;

  return (
    <>
      <div className="dish-card">
        {/* Left side */}
        <div className="dish-details-content">
          <div className="dish-name-type">
            <p>{name}</p>
            <div
              className={`dish-type ${
                type === "VEG" ? "veg-symbol" : "nonVeg-symbol"
              }`}
            >
              <span
                className={`dish-type ${
                  type === "VEG" ? "veg-dot-symbol" : "nonVeg-dot-symbol"
                }`}
              ></span>
            </div>
          </div>
          {/* Description */}
          <p className="dish-description">{description}</p>

          {/* Ingredient link */}
          <Popup
            trigger={
              <button className="ingredient-link">
                {" "}
                <img
                  src="https://res.cloudinary.com/dehz5pshe/image/upload/v1757777589/fi_15315413_sopwdd.svg"
                  alt="ingredient icon"
                />
                Ingredient
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <div className="model-close-header">
                  <button className="modal-close-btn" onClick={close}>
                    {/* Left arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M9.34299 0.930737L4 5.96535L9.34299 11"
                        stroke="#1C1C1C"
                        strokeWidth="2"
                      />
                    </svg>
                    <p>Ingredient list</p>
                  </button>
                </div>

                <div className="content">
                  <IngredientModel
                    dishDescription={description}
                    dishName={name}
                    ingredientsList={ingredients}
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>

        {/* {Right Side} */}
        <div className="dish-img-content">
          <img src={image} alt={name} />
          <button type="button" className="add-btn">
            Add +
          </button>
        </div>
      </div>

      <hr />
    </>
  );
};

export default DishCard;

//  {
//     id: 1,
//     name: "Kadhai Paneer",
//     description:
//       "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
//     image: "https://placehold.co/300x200/F7D0B3/422402?text=Kadhai+Paneer",
//     mealType: "MAIN COURSE",
//     type: "VEG",
//     ingredients: [
//       { name: "Paneer", quantity: "200g" },
//       { name: "Onion", quantity: "2 large" },
//       { name: "Capsicum", quantity: "1 large" },
//       { name: "Tomato Puree", quantity: "1 cup" },
//     ],
//   },
