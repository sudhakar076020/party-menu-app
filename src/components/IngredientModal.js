import "../App.css";

const IngredientModal = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <div className="ingredient-container">
      <button className="modal-close-btn" onClick={onClose}>
        {" "}
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
        </svg>{" "}
        Ingredient
      </button>

      <div className="top-section">
        <div className="content">
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
        </div>
        <img src={dish.image} alt={dish.name} />
      </div>

      <div className="ingredient-title">
        <h2>Ingredients</h2>
        <p>For 2 people</p>
        <hr className="line" />
      </div>

      <ul className="ingredients-items">
        {dish.ingredients.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientModal;
