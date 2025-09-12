import "../App.css";

import DishCard from "./DishCard";

const DishList = (props) => {
  const { dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients } =
    props;

  console.log(dishes);
  return (
    <div className="dishlist-section">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dishes={dishes} />
      ))}
    </div>
  );
};

export default DishList;
