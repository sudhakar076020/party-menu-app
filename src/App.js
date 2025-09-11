import "./App.css";

import { useState } from "react";

// React Icons
import { TbChefHat } from "react-icons/tb"; //Chef hat
import { BsStars } from "react-icons/bs"; //Stars

import { dishes } from "./data/mockDishes";
import Filters from "./components/Filters";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // Select category
  const onCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header-section">
        <div className="header-icon">
          <TbChefHat className="chef-hat-icon" />
          <BsStars className="stars-icon" />
        </div>
        <div className="header-titles">
          <h1>Party Menu Selection</h1>
          <p>Choose your perfect party menu</p>
        </div>
      </header>
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
    </div>
  );
}

export default App;
