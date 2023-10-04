const categoryData = [
  {
    id: 1,
    categoryName: 'Vegetables',
    imageURL: 'https://i.ibb.co/xL9ZGfp/Media-1.png', // Replace with the actual image URL
    quantity: 50,
  },
  {
    id: 2,
    categoryName: 'Fruits',
    imageURL:
      'https://i.ibb.co/s3nnvp8/jonas-kakaroto-5-JQH9-Iqnm9o-unsplash.jpg', // Replace with the actual image URL
    quantity: 30,
  },
  {
    id: 3,
    categoryName: 'Bread',
    imageURL: 'https://i.ibb.co/HgzbcRq/Media-2.png', // Replace with the actual image URL
    quantity: 20,
  },
  {
    id: 4,
    categoryName: 'Sweets',
    imageURL: 'https://i.ibb.co/BHk6StN/Media-3.png', // Replace with the actual image URL
    quantity: 15,
  },
  {
    id: 5,
    categoryName: 'Pasta',
    imageURL: 'https://i.ibb.co/4f1W03X/Media-4.png', // Replace with the actual image URL
    quantity: 25,
  },
  {
    id: 6,
    categoryName: 'Coffee',
    imageURL: 'https://i.ibb.co/LCWhfrC/Media-5.png', // Replace with the actual image URL
    quantity: 10,
  },
];

const vegetableCombos = [
  {id: 1, name: 'Cabbage and Lettuce', quantity: 3},
  {id: 2, name: 'Onions and Garlic', quantity: 2},
  {id: 3, name: 'Peppers', quantity: 5},
  {id: 4, name: 'Carrots and Broccoli', quantity: 4},
  {id: 5, name: 'Spinach', quantity: 1},
  {id: 6, name: 'Tomatoes', quantity: 6},
  {id: 7, name: 'Cucumbers and Radishes', quantity: 2},
  {id: 8, name: 'Mushrooms', quantity: 3},
  {id: 9, name: 'Zucchini and Squash', quantity: 0},
  {id: 10, name: 'Kale', quantity: 1},
];

const fruitsCombo = [
  {id: 1, name: 'Apples and Oranges', quantity: 3},
  {id: 2, name: 'Bananas and Strawberries', quantity: 2},
  {id: 3, name: 'Grapes', quantity: 5},
  {id: 4, name: 'Pears and Blueberries', quantity: 4},
  {id: 5, name: 'Kiwi', quantity: 1},
  {id: 6, name: 'Pineapples', quantity: 6},
  {id: 7, name: 'Mangoes and Papayas', quantity: 2},
  {id: 8, name: 'Raspberries', quantity: 3},
  {id: 9, name: 'Cherries and Plums', quantity: 0},
  {id: 10, name: 'Strawberries', quantity: 1},
];

const breadCombo = [
  {id: 1, name: 'Whole Wheat Bread', quantity: 3},
  {id: 2, name: 'White Bread', quantity: 2},
  {id: 3, name: 'Rye Bread', quantity: 5},
  {id: 4, name: 'Multigrain Bread', quantity: 4},
  {id: 5, name: 'Baguette', quantity: 1},
  {id: 6, name: 'Sourdough Bread', quantity: 6},
  {id: 7, name: 'Ciabatta Bread', quantity: 2},
  {id: 8, name: 'Pita Bread', quantity: 3},
  {id: 9, name: 'Cinnamon Raisin Bread', quantity: 0},
  {id: 10, name: 'Garlic Bread', quantity: 1},
];

const sweetsCombo = [
  {id: 1, name: 'Chocolate and Caramel', quantity: 3},
  {id: 2, name: 'Gummy Bears and Jelly Beans', quantity: 2},
  {id: 3, name: 'Licorice', quantity: 5},
  {id: 4, name: 'Milkshakes and Cookies', quantity: 4},
  {id: 5, name: 'Ice Cream', quantity: 1},
  {id: 6, name: 'Cupcakes', quantity: 6},
  {id: 7, name: 'Candy Canes and Lollipops', quantity: 2},
  {id: 8, name: 'Fudge', quantity: 3},
  {id: 9, name: 'Cotton Candy and Taffy', quantity: 0},
  {id: 10, name: 'Brownies', quantity: 1},
];

const pastaCombo = [
  {id: 1, name: 'Spaghetti and Meatballs', quantity: 3},
  {id: 2, name: 'Fettuccine Alfredo', quantity: 2},
  {id: 3, name: 'Penne with Marinara Sauce', quantity: 5},
  {id: 4, name: 'Lasagna', quantity: 4},
  {id: 5, name: 'Macaroni and Cheese', quantity: 1},
  {id: 6, name: 'Linguine with Clam Sauce', quantity: 6},
  {id: 7, name: 'Ravioli', quantity: 2},
  {id: 8, name: 'Tortellini', quantity: 3},
  {id: 9, name: 'Bowtie Pasta with Pesto', quantity: 0},
  {id: 10, name: 'Carbonara', quantity: 1},
];

const coffeeCombo = [
  {id: 1, name: 'Espresso', quantity: 3},
  {id: 2, name: 'Cappuccino', quantity: 2},
  {id: 3, name: 'Latte', quantity: 5},
  {id: 4, name: 'Mocha', quantity: 4},
  {id: 5, name: 'Black Coffee', quantity: 1},
  {id: 6, name: 'Iced Coffee', quantity: 6},
  {id: 7, name: 'Americano', quantity: 2},
  {id: 8, name: 'Macchiato', quantity: 3},
  {id: 9, name: 'Irish Coffee', quantity: 0},
  {id: 10, name: 'Turkish Coffee', quantity: 1},
];

const vegetables = [
  {
    id: 1,
    name: 'Cabbage',
    price: 1.99,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Cabbage and Lettuce'],
  },
  {
    id: 2,
    name: 'Lettuce',
    price: 1.49,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Cabbage and Lettuce'],
  },
  {
    id: 3,
    name: 'Onions',
    price: 0.79,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Onions and Garlic'],
  },
  {
    id: 4,
    name: 'Garlic',
    price: 1.29,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Onions and Garlic'],
  },
  {
    id: 5,
    name: 'Bell Peppers',
    price: 2.49,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Peppers'],
  },
  {
    id: 6,
    name: 'Carrots',
    price: 1.19,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Carrots and Broccoli'],
  },
  {
    id: 7,
    name: 'Broccoli',
    price: 1.99,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Carrots and Broccoli'],
  },
  {
    id: 8,
    name: 'Spinach',
    price: 2.29,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Spinach'],
  },
  {
    id: 9,
    name: 'Tomatoes',
    price: 2.99,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Tomatoes'],
  },
  {
    id: 10,
    name: 'Cucumbers',
    price: 0.99,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Cucumbers and Radishes'],
  },
  {
    id: 11,
    name: 'Radishes',
    price: 0.79,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Cucumbers and Radishes'],
  },
  {
    id: 12,
    name: 'Mushrooms',
    price: 3.49,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Mushrooms'],
  },
  {
    id: 13,
    name: 'Zucchini',
    price: 1.89,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Zucchini and Squash'],
  },
  {
    id: 14,
    name: 'Squash',
    price: 1.79,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Zucchini and Squash'],
  },
  {
    id: 15,
    name: 'Kale',
    price: 2.49,
    image: 'https://i.ibb.co/ZYPddv4/Media-6.png',
    tags: ['Kale'],
  },
];

const fruits = [
  {
    id: 11,
    name: 'Apples and Oranges',
    price: '1.74',
    image: 'https://i.ibb.co/W0Z1ZCB/Media.png',
    tags: ['apples and oranges'],
  },
  {
    id: 22,
    name: 'Bananas and Strawberries',
    price: '1.44',
    image: 'https://i.ibb.co/W0Z1ZCB/Media.png',
    tags: ['bananas and strawberries'],
  },
  {
    id: 33,
    name: 'Grapes',
    price: '5.55',
    image: 'https://i.ibb.co/W0Z1ZCB/Media.png',
    tags: ['grapes'],
  },
  {
    id: 44,
    name: 'Pears and Blueberries',
    price: '1.73',
    image: 'https://i.ibb.co/W0Z1ZCB/Media.png',
    tags: ['pears and blueberries'],
  },
  {
    id: 55,
    name: 'Kiwi',
    price: '2.12',
    image: 'https://i.ibb.co/W0Z1ZCB/Media.png',
    tags: ['kiwi'],
  },
  {
    id: 66,
    name: 'Pineapples',
    price: '1.84',
    image: 'https://i.ibb.co/W0Z1ZCB/Media.png',
    tags: ['pineapples'],
  },
  {
    id: 77,
    name: 'Mangoes and Papayas',
    price: '5.12',
    image: 'https://i.ibb.co/W0Z1ZCB/Media.png',
    tags: ['mangoes and papayas'],
  },
  {
    id: 88,
    name: 'Raspberries',
    price: '2.57',
    image: 'https://i.ibb.co/W0Z1ZCB/Media.png',
    tags: ['raspberries'],
  },
  {
    id: 99,
    name: 'Cherries and Plums',
    price: '3.16',
    image: 'https://i.ibb.co/W0Z1ZCB/Media.png',
    tags: ['cherries and plums'],
  },
  {
    id: 101,
    name: 'Strawberries',
    price: '3.62',
    image: 'https://i.ibb.co/W0Z1ZCB/Media.png',
    tags: ['strawberries'],
  },
];

export {
  categoryData,
  vegetableCombos,
  fruitsCombo,
  breadCombo,
  sweetsCombo,
  pastaCombo,
  coffeeCombo,
  vegetables,
  fruits,
};
