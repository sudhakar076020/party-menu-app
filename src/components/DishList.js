import "../App.css";

import DishCard from "./DishCard";

const DishList = (props) => {
  const { dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients } =
    props;

  console.log(dishes);
  return (
    <div className="dishlist-section">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish} // single dish item
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          selectedDishes={selectedDishes}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
};

export default DishList;
