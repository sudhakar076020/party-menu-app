import "../App.css";

const categoryList = [
  { id: "STARTER", label: "Starter" },
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
    nonvegOnly,
    onNonVegOnlyChange,
    selectedDishes,
  } = props;

  return (
    <div className="fliter-section-container">
      {/* Search box */}
      <div className="search-section">
        {/* Left arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M9.34299 0.930737L4 5.96535L9.34299 11"
            stroke="#1C1C1C"
            strokeWidth="2"
          />
        </svg>
        <label className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search dish for your party..."
            autoComplete="off"
            onChange={onSearchChange}
            value={searchTerm}
          />
        </label>
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_1_2432)">
            <path
              d="M5.52204 5.05244C5.23361 4.76377 4.76564 4.76377 4.4772 5.05244C3.40626 6.12338 2.8799 7.61525 3.03286 9.1458C3.07103 9.52709 3.39224 9.81131 3.76736 9.81131C3.79201 9.81131 3.81685 9.81006 3.8415 9.8076C4.24767 9.76697 4.54396 9.40463 4.50333 8.99873C4.39447 7.91104 4.76591 6.85342 5.52204 6.09725C5.81072 5.80885 5.81072 5.34084 5.52204 5.05244Z"
              fill="#B6B6B6"
            />
            <path
              d="M8.44828 0C3.78988 0 0 3.78988 0 8.44828C0 13.1067 3.78988 16.8966 8.44828 16.8966C13.1067 16.8966 16.8966 13.1067 16.8966 8.44828C16.8966 3.78988 13.1066 0 8.44828 0ZM8.44828 15.4187C4.60469 15.4187 1.47785 12.2919 1.47785 8.44828C1.47785 4.60469 4.60469 1.47785 8.44828 1.47785C12.2916 1.47785 15.4187 4.60469 15.4187 8.44828C15.4187 12.2919 12.2919 15.4187 8.44828 15.4187Z"
              fill="#606060"
            />
            <path
              d="M19.7837 19.2383L14.4142 13.8688C14.1255 13.5802 13.658 13.5802 13.3693 13.8688C13.0807 14.1573 13.0807 14.6253 13.3693 14.9137L18.7388 20.2831C18.8832 20.4275 19.0721 20.4996 19.2613 20.4996C19.4504 20.4996 19.6393 20.4275 19.7837 20.2831C20.0723 19.9947 20.0723 19.5267 19.7837 19.2383Z"
              fill="#B6B6B6"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_2432">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Category Section */}
      <ul className="category-list-section">
        {categoryList.map((category) => (
          <li
            key={category.id}
            className={`category-item ${
              activeCategory === category.id ? "active-category-item" : null
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </li>
        ))}
      </ul>

      {/* Total Dish seleted count by category wise + Dish type  */}
      <div className="category-dish-seleted-count">
        <p>
          {`${activeCategory
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")} Selected `}
          <span>
            (
            {
              selectedDishes.filter((item) => item.mealType === activeCategory)
                .length
            }
            )
          </span>
        </p>

        {/* Toggle Veg or Non-veg */}
        <div className="veg-nonVeg-card">
          {/* Veg */}
          <div className="toggle-row">
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="vegOnly"
                className="toggle-veg-only"
                onChange={onVegOnlyChange}
                checked={vegOnly}
              />
              <label htmlFor="vegOnly" className="toggle-veg-label">
                {/* the small rounded rectangle shown by your arrow */}
                <span className="track-line" aria-hidden="true"></span>

                {/* the rounded square that moves */}
                <span className="square veg-square">
                  <span className="circle veg-circle" />
                </span>
              </label>
            </div>

            {/* Non-Veg */}
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="nonvegOnly"
                className="toggle-nonveg-only"
                onChange={onNonVegOnlyChange}
                checked={nonvegOnly}
              />
              <label htmlFor="nonvegOnly" className="toggle-nonveg-label">
                {/* the small rounded rectangle shown by your arrow */}
                <span className="track-line" aria-hidden="true"></span>

                {/* the rounded square that moves */}
                <span className="square nonVeg-square">
                  <span className="circle nonVeg-circle" />
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
