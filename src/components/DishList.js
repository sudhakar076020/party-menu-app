import "../App.css";
import DishCard from "./DishCard";

const DishList = ({
  dishes,
  selectedDishes,
  onAddDish,
  onRemoveDish,
  onViewIngredients,
}) => {
  return (
    <div className="dishlist-section">
      {dishes.length === 0 ? (
        <div className="no-dishes-container">
          <p> No dishes available</p>
        </div>
      ) : (
        dishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            selectedDishes={selectedDishes}
            onAddDish={onAddDish}
            onRemoveDish={onRemoveDish}
            onViewIngredients={onViewIngredients}
          />
        ))
      )}
    </div>
  );
};

export default DishList;
