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
  const [viewMode, setViewMode] = useState("default");
  // "default" → Filters + DishList + Total Selected
  // "selected" → All Selected Dishes

  // Filtered Dishes
  const filteredDishes = dishes.filter((dish) => {
    const categoryMatch =
      selectedCategory === "ALL" || dish.mealType === selectedCategory;

    const searchMatch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let typeMatch = true;
    if (vegOnly && !nonvegOnly) {
      typeMatch = dish.type === "VEG";
    } else if (!vegOnly && nonvegOnly) {
      typeMatch = dish.type === "NON-VEG";
    }
    return categoryMatch && searchMatch && typeMatch;
  });

  // Search Input
  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Add Ingredients
  const handleAddDish = (dish) => {
    if (!selectedDishes.find((item) => item.id === dish.id)) {
      setSelectedDishes([...selectedDishes, dish]);
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
      <div className="container">
        {isModalOpen ? (
          <IngredientModal dish={currentDish} onClose={handleCloseModal} />
        ) : viewMode === "selected" ? (
          <>
            {/* Show Selected Dishes */}
            {selectedDishes.length > 0 ? (
              <div className="all-selected-dish-container">
                {selectedDishes.map((dish) => (
                  <div key={dish.id} className="dish-item">
                    <div className="dish-item-details">
                      <img src={dish.image} alt={dish.name} />
                      <h2>{dish.name}</h2>
                      <div
                        className={`dish-type ${
                          dish.type === "VEG" ? "veg-symbol" : "nonVeg-symbol"
                        }`}
                      >
                        <span
                          className={
                            dish.type === "VEG"
                              ? "veg-dot-symbol"
                              : "nonVeg-dot-symbol"
                          }
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="selected-remove-btn"
                      onClick={() => handleRemoveDish(dish.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-dishes-msg">No dishes added yet.</div>
            )}

            {/* Continue button goes back */}
            <div className="total-dish-selected-container">
              <div className="total-dish-count-selected">
                <p>Total Dish Selected {selectedDishes.length}</p>
              </div>
              <button
                type="button"
                className="continue-btn"
                onClick={() => setViewMode("default")}
              >
                Continue
              </button>
            </div>
          </>
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

            {/* Dish List or Empty */}
            {filteredDishes.length === 0 ? (
              <div className="no-dishes-msg">
                No dishes found. Try different filters.
              </div>
            ) : (
              <DishList
                dishes={filteredDishes}
                selectedDishes={selectedDishes}
                onAddDish={handleAddDish}
                onRemoveDish={handleRemoveDish}
                onViewIngredients={handleViewIngredients}
              />
            )}

            {/* Total selected always shows in default view */}
            <div className="total-dish-selected-container">
              <div className="total-dish-count-selected">
                <p>Total Dish Selected {selectedDishes.length}</p>
                <button
                  type="button"
                  className="go-to-selected-dishs"
                  onClick={() => setViewMode("selected")}
                >
                  {/* Right arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                  >
                    <path
                      d="M6.71 5.59279C6.70827 5.34927 6.61101 5.11617 6.43914 4.94364L1.93857 0.444215C1.76273 0.268076 1.52459 0.168301 1.27571 0.166501C1.15256 0.166009 1.03054 0.190005 0.916744 0.237093C0.802949 0.284179 0.69965 0.35342 0.612854 0.440786C0.436716 0.616621 0.33694 0.854767 0.33514 1.10364C0.333808 1.22692 0.357421 1.34918 0.404557 1.4631C0.451693 1.57701 0.52138 1.68021 0.609426 1.7665L4.44714 5.60307L0.609426 9.44193C0.442177 9.62027 0.351044 9.85679 0.355387 10.1012C0.359729 10.3457 0.459204 10.5788 0.632681 10.7511C0.806159 10.9234 1.03997 11.0213 1.28445 11.0239C1.52893 11.0266 1.76481 10.9338 1.942 10.7654L6.43914 6.26593C6.52661 6.17725 6.5956 6.07208 6.64209 5.95653C6.68859 5.84097 6.71167 5.71733 6.71 5.59279Z"
                      fill="#3D3D3D"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
