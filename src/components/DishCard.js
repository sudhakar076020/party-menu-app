import "../App.css";

const DishCard = ({
  dish,
  selectedDishes,
  onAddDish,
  onRemoveDish,
  onViewIngredients,
}) => {
  const isSelected = selectedDishes.some((item) => item.id === dish.id);

  return (
    <div className="dish-card">
      <div className="dish-details-content">
        <div className="dish-name-type">
          <h2>{dish.name}</h2>
          <div
            className={`dish-type ${
              dish.type === "VEG" ? "veg-symbol" : "nonVeg-symbol"
            }`}
          >
            <span
              className={
                dish.type === "VEG" ? "veg-dot-symbol" : "nonVeg-dot-symbol"
              }
            />
          </div>
        </div>
        <p className="dish-description">{dish.description}</p>

        <button
          className="ingredient-link"
          onClick={() => onViewIngredients(dish)}
        >
          <img
            src="https://res.cloudinary.com/dehz5pshe/image/upload/v1757777589/fi_15315413_sopwdd.svg"
            alt="ingrediant icon"
          />
          Ingredient
        </button>
      </div>

      <div className="dish-img-content">
        <img src={dish.image} alt={dish.name} />
        <button
          type="button"
          className={isSelected ? "remove-btn" : "add-btn"}
          onClick={() => (isSelected ? onRemoveDish(dish.id) : onAddDish(dish))}
        >
          {isSelected ? "Remove" : "Add +"}
        </button>
      </div>
    </div>
  );
};

export default DishCard;
