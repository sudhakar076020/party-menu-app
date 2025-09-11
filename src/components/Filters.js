import "../App.css";

import { IoIosSearch } from "react-icons/io"; //Search icon
import { GoDotFill } from "react-icons/go"; //Dot

const categoryList = [
  { id: "ALL", label: "All" },
  { id: "STARTER", label: "Starters" },
  { id: "MAIN COURSE", label: "Main Course" },
  { id: "DESSERT", label: "Desserts" },
  { id: "SIDES", label: "Sides" },
  { id: "NON-VEG", label: "Non-Veg" },
];

const Filters = (props) => {
  const { onCategoryChange, activeCategory } = props;
  return (
    <div className="filter-section">
      {/* Category Tabs section */}
      <ul className="category-list">
        {categoryList.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`category-btn ${
              item.id === activeCategory ? "active-category" : null
            }`}
            onClick={() => onCategoryChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </ul>
      {/* Search term & VegOnly toggle */}
      <div className="search-veg-section">
        <label class="search-box">
          <IoIosSearch className="search-icon" />
          <input
            type="text"
            class="input"
            placeholder="Find your dish..."
            autocomplete="off"
          />
        </label>
        {/* Toggle Veg only input */}
        <div class="toggle-switch">
          <GoDotFill className="dot-icon" />
          <label class="switch-label">
            Veg only
            <input type="checkbox" class="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
