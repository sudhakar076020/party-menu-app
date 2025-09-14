const dishes = [
  // MAIN COURSE (7 items)
  {
    id: 1,
    name: "Kadai Paneer",
    description:
      "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-j1XdLKn31g1i4xhsLYgRw0eiuPzxMgyHpw&s",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" },
    ],
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Creamy tomato-based chicken curry, a North Indian classic.",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Butter", quantity: "50g" },
      { name: "Tomato Puree", quantity: "1.5 cups" },
      { name: "Cream", quantity: "100ml" },
    ],
  },
  {
    id: 3,
    name: "Dal Tadka",
    description: "Yellow lentils tempered with garlic, cumin, and ghee.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kLMn_YJz4DEPNat_gUTF_QWOxqKiIRWMQw&s",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Toor Dal", quantity: "1 cup" },
      { name: "Ghee", quantity: "2 tbsp" },
      { name: "Garlic", quantity: "4 cloves" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
    ],
  },
  {
    id: 4,
    name: "Mutton Rogan Josh",
    description: "Tender mutton cooked in aromatic Kashmiri spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1gfC8Ma8JttP7IOFaPHT-7F0R79cTKsBWg&s",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Mutton", quantity: "500g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Curd", quantity: "1 cup" },
      { name: "Kashmiri Red Chili", quantity: "2 tsp" },
    ],
  },
  {
    id: 5,
    name: "Palak Paneer",
    description: "Cottage cheese cubes in creamy spinach gravy.",
    image:
      "https://www.vegkit.com/wp-content/uploads/sites/2/2024/02/palak_tofu_paneer_1.jpg",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Spinach", quantity: "2 bunches" },
      { name: "Onion", quantity: "1 large" },
      { name: "Garlic", quantity: "4 cloves" },
    ],
  },
  {
    id: 6,
    name: "Chicken Biryani",
    description:
      "Fragrant basmati rice cooked with marinated chicken and spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaF6-1Auf1DuOXo9FhalxTrx1j-BnkoOu4A&s",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Chicken", quantity: "500g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Whole Spices", quantity: "2 tbsp" },
    ],
  },
  {
    id: 7,
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fried bread.",
    image: "https://cdn.uengage.io/uploads/28289/image-14DG1B-1723180624.jpg",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Chickpeas", quantity: "1 cup" },
      { name: "Onion", quantity: "2 medium" },
      { name: "Tomato", quantity: "2 medium" },
      { name: "Flour", quantity: "2 cups" },
    ],
  },

  // STARTERS (7 items)
  {
    id: 8,
    name: "Paneer Tikka",
    description: "Grilled cottage cheese cubes marinated with spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-stvhbpCIHk4_aVCxb0aekKPAJPLWM2FeA&s",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Capsicum", quantity: "1 large" },
    ],
  },
  {
    id: 9,
    name: "Chicken Tikka",
    description: "Grilled chicken cubes marinated in yogurt and spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1fHA33FNRQNHUveifYriJS1H0AgEpGP4Cg&s",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "300g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
      { name: "Lemon Juice", quantity: "1 tbsp" },
    ],
  },
  {
    id: 10,
    name: "Hara Bhara Kebab",
    description: "Spinach and pea cutlets shallow fried till crisp.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27xtDirRA99TJgiOPXGszfzJKO7OZSvGX_w&s",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Spinach", quantity: "1 bunch" },
      { name: "Green Peas", quantity: "1/2 cup" },
      { name: "Potato", quantity: "1 medium" },
      { name: "Spices", quantity: "1 tbsp" },
    ],
  },
  {
    id: 11,
    name: "Fish Amritsari",
    description: "Crispy batter-fried fish with Punjabi spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNf3ebl5RlV-Eewymih5-ZKtKgpnFkEzliw&s",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Fish Fillet", quantity: "300g" },
      { name: "Gram Flour", quantity: "1/2 cup" },
      { name: "Carom Seeds", quantity: "1 tsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
    ],
  },
  {
    id: 12,
    name: "Veg Spring Rolls",
    description: "Crispy rolls stuffed with vegetables and noodles.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2B4r8cbP9PTcip6kQXCcWT1EaQzdmJIpZEw&s",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Spring Roll Sheets", quantity: "10 pieces" },
      { name: "Cabbage", quantity: "1 cup shredded" },
      { name: "Carrot", quantity: "1 medium" },
      { name: "Soy Sauce", quantity: "1 tbsp" },
    ],
  },
  {
    id: 13,
    name: "Mutton Seekh Kebab",
    description: "Minced mutton skewers grilled with spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOT1BRyu02dqlMdS3CBQ-hOnWfG0FQ4xpYgrzoVgEQUoOYsfjhSteRYLhTsOM7NydxCRY&usqp=CAU",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Mutton Mince", quantity: "400g" },
      { name: "Onion", quantity: "1 medium" },
      { name: "Green Chili", quantity: "2" },
      { name: "Coriander", quantity: "2 tbsp" },
    ],
  },
  {
    id: 14,
    name: "Aloo Tikki",
    description: "Crispy potato patties served with chutneys.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfog6rzs873OZN7T_7u7ra6L-wuFktF_n2g&s",
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Potatoes", quantity: "2 large" },
      { name: "Green Chili", quantity: "1" },
      { name: "Breadcrumbs", quantity: "1/2 cup" },
      { name: "Spices", quantity: "1 tbsp" },
    ],
  },

  // DESSERT (7 items)
  {
    id: 15,
    name: "Gulab Jamun",
    description: "Fried milk solids soaked in sugar syrup.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a8Ct6xN1M9Pne-2RXI-RNh1AaXcG4a-z0w&s",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Khoya", quantity: "200g" },
      { name: "Flour", quantity: "2 tbsp" },
      { name: "Sugar Syrup", quantity: "2 cups" },
      { name: "Cardamom", quantity: "1 tsp" },
    ],
  },
  {
    id: 16,
    name: "Rasgulla",
    description: "Spongy cheese balls soaked in sugar syrup.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseOTMOPjrpmrEfq-eCo7lw09-vpvMxRHrpg&s",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Chhena", quantity: "250g" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Water", quantity: "3 cups" },
      { name: "Cardamom", quantity: "1 tsp" },
    ],
  },
  {
    id: 17,
    name: "Kheer",
    description: "Rice pudding cooked with milk and sugar.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GM4gMUycHaUPFla7QT4nczWFR7mo93IGZQ&s",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Rice", quantity: "1/2 cup" },
      { name: "Milk", quantity: "1 liter" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Dry Fruits", quantity: "2 tbsp" },
    ],
  },
  {
    id: 18,
    name: "Jalebi",
    description: "Crispy spirals soaked in saffron sugar syrup.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKqbstedp3QngdqJgZnPSVImPLZdelJtxx3g&s",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Flour", quantity: "1 cup" },
      { name: "Yogurt", quantity: "1/4 cup" },
      { name: "Sugar Syrup", quantity: "2 cups" },
      { name: "Saffron", quantity: "1 pinch" },
    ],
  },
  {
    id: 19,
    name: "Ice Cream",
    description: "Chilled creamy dessert in multiple flavors.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/960px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Milk", quantity: "500ml" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Cream", quantity: "200ml" },
      { name: "Flavoring", quantity: "1 tbsp" },
    ],
  },
  {
    id: 20,
    name: "Fruit Salad",
    description: "Mix of seasonal fruits with cream.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglnMaAmQNUejUsXGK_E0TiaafXlxZlnkBfA&s",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Banana", quantity: "2" },
      { name: "Apple", quantity: "1" },
      { name: "Grapes", quantity: "1 cup" },
      { name: "Cream", quantity: "1/2 cup" },
    ],
  },
  {
    id: 21,
    name: "Brownie",
    description: "Rich chocolate dessert with nuts.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBW4W-3x_osH5jYgOQR69xyqjhHjE2xH1Ag&s",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Chocolate", quantity: "200g" },
      { name: "Flour", quantity: "1 cup" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Butter", quantity: "100g" },
    ],
  },

  // SIDES (7 items)
  {
    id: 22,
    name: "Naan",
    description: "Soft and fluffy Indian flatbread.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbhIBt1bfid1hVKLprQyN3Xd31fHVTyfmKg&s",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Flour", quantity: "2 cups" },
      { name: "Yeast", quantity: "1 tsp" },
      { name: "Yogurt", quantity: "1/4 cup" },
      { name: "Butter", quantity: "2 tbsp" },
    ],
  },
  {
    id: 23,
    name: "Tandoori Roti",
    description: "Whole wheat roti cooked in tandoor.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5ev0V1mV1XlrwWSpO5haPNZ5AMLBTOhISw&s",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Whole Wheat Flour", quantity: "2 cups" },
      { name: "Salt", quantity: "1 tsp" },
      { name: "Water", quantity: "as needed" },
      { name: "Butter", quantity: "1 tbsp" },
    ],
  },
  {
    id: 24,
    name: "Jeera Rice",
    description: "Basmati rice flavored with cumin seeds.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUMi8inD2J8HRTxS2V-XF22KT9ZMMNyA8rw&s",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Basmati Rice", quantity: "1.5 cups" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Ghee", quantity: "1 tbsp" },
      { name: "Salt", quantity: "to taste" },
    ],
  },
  {
    id: 25,
    name: "Papad",
    description: "Crispy fried or roasted papads.",
    image:
      "https://media.istockphoto.com/id/666595984/photo/indian-snacks-deep-fried-crackers-or-papad-mung-dal-and-urad-dal-papad-an-indian-fried-dish.jpg?s=612x612&w=0&k=20&c=WNBWP2z6sXYhPSFbfxmVJe1oVkWtQHY-lc7RbWeM84o=",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Papad", quantity: "4 pieces" },
      { name: "Oil", quantity: "for frying" },
      { name: "Salt", quantity: "optional" },
      { name: "Chili Powder", quantity: "optional" },
    ],
  },
  {
    id: 26,
    name: "Raita",
    description: "Yogurt-based side dish with cucumber.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAhGLFfwftm_DW2wwXyhMk3fn3t32twofGA&s",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Cucumber", quantity: "1/2 cup grated" },
      { name: "Salt", quantity: "to taste" },
      { name: "Cumin Powder", quantity: "1/2 tsp" },
    ],
  },
  {
    id: 27,
    name: "Pickle",
    description: "Tangy Indian pickle with spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrU_Oz8Pywr--HF-nOp8fKLJIys68fNTGRQ&s",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Mango", quantity: "200g" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Mustard Seeds", quantity: "1 tsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
    ],
  },
  {
    id: 28,
    name: "Salad",
    description: "Fresh mix of cucumber, tomato, and onion.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__tuaCCeBfBPjeM7l81rHzPBAeMrbfDIIIw&s",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Cucumber", quantity: "1" },
      { name: "Tomato", quantity: "1" },
      { name: "Onion", quantity: "1" },
      { name: "Lemon Juice", quantity: "1 tbsp" },
    ],
  },

  // NON-VEG SPECIALS (7 items)
  {
    id: 29,
    name: "Prawn Curry",
    description: "Juicy prawns cooked in spicy coconut gravy.",
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2023/02/Shrimp-Masala-2-3.jpg",
    mealType: "NON-VEG",
    type: "NON-VEG",
    ingredients: [
      { name: "Prawns", quantity: "400g" },
      { name: "Coconut Milk", quantity: "1 cup" },
      { name: "Onion", quantity: "1 large" },
      { name: "Garlic", quantity: "4 cloves" },
    ],
  },
  {
    id: 30,
    name: "Egg Curry",
    description: "Boiled eggs in spicy onion-tomato gravy.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFg775n9jqDjvSqaqoA317_q34nzGd-Aj1hQ&s",
    mealType: "NON-VEG",
    type: "NON-VEG",
    ingredients: [
      { name: "Eggs", quantity: "4" },
      { name: "Onion", quantity: "2 medium" },
      { name: "Tomato", quantity: "2 medium" },
      { name: "Spices", quantity: "1 tbsp" },
    ],
  },
  {
    id: 31,
    name: "Keema Matar",
    description: "Minced mutton cooked with peas and spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjY2icxdLN8o8xvwKugKfdotLGGO2kHGSUw&s",
    mealType: "NON-VEG",
    type: "NON-VEG",
    ingredients: [
      { name: "Mutton Mince", quantity: "400g" },
      { name: "Green Peas", quantity: "1 cup" },
      { name: "Onion", quantity: "2 medium" },
      { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
    ],
  },
  {
    id: 32,
    name: "Fish Curry",
    description: "Tangy fish curry with tamarind and spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVt2p5bZiNhPJkbc0HHBaFgAvpHT4wUsUGQ&s",
    mealType: "NON-VEG",
    type: "NON-VEG",
    ingredients: [
      { name: "Fish", quantity: "400g" },
      { name: "Tamarind", quantity: "2 tbsp" },
      { name: "Onion", quantity: "1 large" },
      { name: "Curry Leaves", quantity: "6 leaves" },
    ],
  },
  {
    id: 33,
    name: "Chicken 65",
    description: "Spicy deep-fried chicken bites.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLUylpXSB7u85LFAYqTeMTc1SBAuH-YKJ_Q&s",
    mealType: "NON-VEG",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "300g" },
      { name: "Yogurt", quantity: "2 tbsp" },
      { name: "Corn Flour", quantity: "2 tbsp" },
      { name: "Spices", quantity: "1 tbsp" },
    ],
  },
  {
    id: 34,
    name: "Chicken Curry",
    description: "Traditional Indian chicken curry with spices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KfliqLSvMmQa5rOpSHI2aPRDkOXM6frJ1g&s",
    mealType: "NON-VEG",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Tomato", quantity: "2 large" },
      { name: "Spices", quantity: "2 tbsp" },
    ],
  },
  {
    id: 35,
    name: "Mutton Curry",
    description: "Slow-cooked mutton curry with onions and tomatoes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SeSLEi-KOmhSF8vUZCs-YfARFbsdlsWe9A&s",
    mealType: "NON-VEG",
    type: "NON-VEG",
    ingredients: [
      { name: "Mutton", quantity: "500g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Tomato", quantity: "2 large" },
      { name: "Spices", quantity: "2 tbsp" },
    ],
  },
];

export default dishes;
