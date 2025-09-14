import "./App.css";
import { useState } from "react";

import dishes from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonvegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // Filtered Dishes
  const filteredDishes = dishes.filter((dish) => {
    // Category match
    const categoryMatch =
      selectedCategory === "ALL" || dish.mealType === selectedCategory;

    // Search term match
    const searchMatch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Veg/Non-Veg match logic
    let typeMatch = true;
    if (vegOnly && !nonvegOnly) {
      typeMatch = dish.type === "VEG";
    } else if (!vegOnly && nonvegOnly) {
      typeMatch = dish.type === "NON-VEG";
    }
    // If both are true or both are false, show all types (typeMatch = true)

    return categoryMatch && searchMatch && typeMatch;
  });

  // Search Input
  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  // Add Ingredients
  const handleAddDish = (dish) => {
    if (!selectedDishes.find((item) => item.id === dish.id)) {
      setSelectedDishes([...selectedDishes, dish]);
      console.log(selectedDishes);
    }
  };

  // Remove Ingredients
  const handleRemoveDish = (dishId) => {
    setSelectedDishes(selectedDishes.filter((item) => item.id !== dishId));
  };

  // View Ingredient
  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  // Close Model
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
  };

  return (
    <div className="App">
      {isModalOpen ? (
        <IngredientModal dish={currentDish} onClose={handleCloseModal} />
      ) : (
        <>
          {/* Filters */}
          <Filters
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            vegOnly={vegOnly}
            onVegOnlyChange={() => setVegOnly((prev) => !prev)}
            nonvegOnly={nonvegOnly}
            onNonVegOnlyChange={() => setNonVegOnly((prev) => !prev)}
            selectedDishes={selectedDishes}
          />

          {/* Dish List */}
          <DishList
            dishes={filteredDishes}
            selectedDishes={selectedDishes}
            onAddDish={handleAddDish}
            onRemoveDish={handleRemoveDish}
            onViewIngredients={handleViewIngredients}
          />
        </>
      )}
    </div>
  );
}

export default App;
