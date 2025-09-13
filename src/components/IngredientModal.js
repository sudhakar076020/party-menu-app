import "../App.css";

const IngredientModel = (props) => {
  const { ingredientsList, dishName, dishDescription } = props;
  return (
    <div className="ingredient-container">
      <div className="top-section">
        <div className="content">
          <h3>{dishName}</h3>
          <p>{dishDescription}</p>
        </div>
        <img
          src="https://res.cloudinary.com/dehz5pshe/image/upload/v1757782910/9575ae5a678baeb9141729afef2ba06ec64b3cab_izmwu9.png"
          alt="ingrediant image"
        />
      </div>

      <div className="ingredient-title">
        <h2>Ingredients</h2>
        <p>For 2 people</p>
        <hr className="line" />
      </div>

      <ul className="ingredients-items">
        {ingredientsList.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientModel;
