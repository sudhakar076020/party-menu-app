import "../App.css";
import { IoIosSearch } from "react-icons/io"; // Search icon
import { GoDotFill } from "react-icons/go"; // Dot

const categoryList = [
  { id: "ALL", label: "All" },
  { id: "STARTER", label: "Starters" },
  { id: "MAIN COURSE", label: "Main Course" },
  { id: "DESSERT", label: "Desserts" },
  { id: "SIDES", label: "Sides" },
];

const Filters = (props) => {
  const {
    onCategoryChange,
    activeCategory,
    searchTerm,
    onSearchChange,
    vegOnly,
    onVegOnlyChange,
  } = props;

  return (
    <div className="fliter-section-container">
      <div className="filter-section">
        {/* Category Tabs (Large devices only) */}
        <ul className="category-list">
          {categoryList.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`category-btn ${
                item.id === activeCategory ? "active-category" : ""
              }`}
              onClick={() => onCategoryChange(item.id)}
            >
              {item.label}
            </button>
          ))}
        </ul>

        <div className="filters-items">
          {/* Search box */}
          <div className="search-section">
            <label className="search-box">
              <IoIosSearch className="search-icon" />
              <input
                type="text"
                className="input"
                placeholder="Find your dish..."
                autoComplete="off"
                onChange={onSearchChange}
                value={searchTerm}
              />
            </label>
          </div>
          {/* Row for Small Devices → Dropdown + Toggle */}
          <div className="drop-down-toggle-row">
            <div className="drop-down-menu">
              <select
                className="category-dropdown"
                onChange={(e) => onCategoryChange(e.target.value)}
                value={activeCategory}
              >
                {categoryList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Veg Only => Checkbox Toggle */}
            <div className="toggle-switch">
              <GoDotFill className="dot-icon" />
              <input
                type="checkbox"
                id="vegOnly"
                className="toggle-veg-only"
                onChange={onVegOnlyChange}
                checked={vegOnly}
              />
              <label htmlFor="vegOnly" className="toggle-veg-label"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
