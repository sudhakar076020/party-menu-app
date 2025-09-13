import "./App.css";

import { useState } from "react";

// React Icons
import { TbChefHat } from "react-icons/tb"; //Chef hat
import { BsStars } from "react-icons/bs"; //Stars

import dishes from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonvegOnly, setNonVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // Select category
  const onCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log(categoryId);
  };

  // Search Term
  const onSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  // Veg only
  const onVegOnlyChange = () => {
    setVegOnly((prev) => !prev);
    console.log(vegOnly);
  };

  // Non-Veg only
  const onNonVegOnlyChange = () => {
    setNonVegOnly((prev) => !prev);
    console.log(nonvegOnly);
  };

  return (
    <div className="App">
      {/* Filter */}
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        vegOnly={vegOnly}
        onVegOnlyChange={onVegOnlyChange}
        nonvegOnly={nonvegOnly}
        onNonVegOnlyChange={onNonVegOnlyChange}
      />

      {/* DishList */}
      <DishList dishes={dishes} />
    </div>
  );
}

export default App;
