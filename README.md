## Party Menu Selection App

Party Menu Selection App

A ReactJs web application to browse, filter, and select the dishes for your party.

## Project Overview

The goal of this assignment is to build a "Party Menu Selection App". This is a web application where a user can browse a categorized menu of dishes, filter them based on different criteria, and select their desired items for a party.

## Features

Category tabs: Starter, Main Course, Dessert, Sides

Search bar to find dishes by name

Veg/Non-Veg filter toggles

Add and remove dishes from a selection list

Ingredient detail modal for each dish

Summary view showing selected items and total count

## Getting Started

## 1.Clone the repository:

    git clone <your-repository-link>
    cd party-menu-app

## 2.Install dependencies:

    npm install

## 3.Run the development server:

    npm start

The app will open at http://localhost:3000.

## Project Structure

party-menu-app/
└── src/
├── components/
│ ├── DishCard.js
│ ├── DishList.js
│ ├── Filters.js
│ └── IngredientModal.js
├── data/
│ └── mockDishes.js
├── App.css
└── App.js

## Usage

1.Select a category tab to view dishes.
2.Use the search bar or Veg/Non-Veg toggles to filter dishes.
3.Click "Add +" to select dishes for your party.
4.View and remove selected dishes.
5.Click "Ingredient" to see dish ingredients in a modal.
6.See the summary section for total selected items.

## State(useState Hook):

    State is data that a component "remembers" or manages. When the state of a component changes, React automatically re-renders the component to reflect those changes. The useState hook is how we add state to a functional component.

## Sample Mock Data

    // A sample structure based on your PDF. Add all dishes here.

export const dishes = [
{
"id": 1,
"name": "Kadhai Paneer 1",
"description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
"image": "[https://placehold.co/300x200/F7D0B3/422402?text=Kadhai+Paneer](https://placehold.co/300x200/F7D0B3/422402?text=Kadhai+Paneer)",
"mealType": "MAIN COURSE",
"type": "VEG",
"ingredients": [
{ "name": "Paneer", "quantity": "200g" },
{ "name": "Onion", "quantity": "2 large" },
{ "name": "Capsicum", "quantity": "1 large" },
{ "name": "Tomato Puree", "quantity": "1 cup" }
]
},
// ... add more dishes here for STARTER, DESSERT, SIDES and NON-VEG options
];

## Build the Main App Component (App.js)

The App.js is the main component that manages the overall state of the application

src/App.js

import useState and the mock data for the dishes.

Create state variables:

    - `selectedCategory`: To track the active tab ('STARTER', 'MAIN COURSE', etc.).
    - `searchTerm`: To hold the value from the search bar.
    - `vegOnly`: A boolean to track the veg filter.
     - `nonVegOnly`: A boolean to track the nonveg filter.
    - `selectedDishes`: An array to store the IDs of the dishes the user has added.
    - `isModalOpen` and `currentDish`: To manage the ingredient details modal.
    - `viewMode`: Is used to if the user click the selectedDishes the state should be triggered to open.

### Create the UI Components

### `Filters.js`

This component will contain the category tabs, search bar, and veg/non-veg toggle.

- **Props:** `activeCategory`, `onCategoryChange`, `searchTerm`, `onSearchChange`, `vegOnly`, `onVegOnlyChange`.
- **Functionality:**
  - Renders buttons for each category. The active one should have a different style. Clicking a button calls `onCategoryChange`.
  - Renders an `<input type="text">` for search. Its `onChange` event calls `onSearchChange`.
  - Renders a checkbox or toggle for the "Veg Only" filter.

### `DishList.js`

This component maps over the filtered dishes and renders a `DishCard` for each one.

- **Props:** `dishes`, `onAddDish`, `onRemoveDish`, `selectedDishes`, `onViewIngredients`.
- **Functionality:**
  - Takes the array of `filteredDishes`.
  - Uses `.map()` to render a `<DishCard>` for each dish.
  - Passes all necessary props down to each `DishCard`.

### `DishCard.js`

This component displays the information for a single dish.

- **Props:** `dish` (the dish object), `onAddDish`, `onRemoveDish`, `isSelected`, `onViewIngredients`.
- **Functionality:**
  - Displays the dish name, description, and image.
  - Has an "Add" or "Remove" button based on the `isSelected` prop. Clicking the button calls `onAddDish(dish.id)` or `onRemoveDish(dish.id)`.
  - Has an "Ingredients" button that calls `onViewIngredients(dish)`.

### `IngredientModal.js` (Replaces Ingredient Detail Screen)

For a web app, a modal is a better user experience than navigating to a new page for this feature.

- **Props:** `dish`, `onClose`.
- **Functionality:**
  - If `dish` is not null, it displays a modal overlay.
  - Shows the dish name, description, and a list of ingredients.
  - Has a "Close" button which calls the `onClose` function.

Additinally the browse the dish, veg/nonveg toggle, selectedDishes these are all the dishes are empty means the notifiy there was no dishes in the filters.

## Add Styling (App.css)

Added the all components styles in single .css file.
