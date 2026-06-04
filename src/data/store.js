import steakImage from '../assets/steak.jfif'
import bruschettaImage from '../assets/AvocadoBruschetta.jfif'
import freshAvocadoTomatoImage from '../assets/FreshAvocadoTomato.jfif'
import crispedBreadImage from '../assets/crispedbread.jfif'
import bourguignonImage from '../assets/BeefBourguignon.jfif'
import butterChickenImage from '../assets/Butterchicken.jfif'
import lavaCakeImage from '../assets/ChocolateLavaCake.jfif'
import tacosImage from '../assets/TacosAlPastor.jfif'
import cakeImage from '../assets/cake.jfif'
import secondStepImage from '../assets/2ndstep.jfif'
import thirdStepImage from '../assets/3rdstep.jfif'
import steakSaladImage from '../assets/steaksalad.jfif'
import pastaBoilingImage from '../assets/Pastaboiling.jfif'
import pastaWithPeasImage from '../assets/PastawithPeas.jfif'
import eggsMixImage from '../assets/Eggsmix.jfif'
import burgerShapeImage from '../assets/shape.jfif'
import grilledPattiesImage from '../assets/grilledpatties.jfif'
import meltingChocolateImage from '../assets/meltingchocolate.jfif'

export const categories = [
  {
    id: 'african',
    name: 'African Dishes',
    description: 'Flavorful stews, grilled meats and warming comfort food from across Africa.',
    color: '#b45c31',
    image: steakImage
  },
  {
    id: 'italian',
    name: 'Italian Dishes',
    description: 'Classic pastas, sauces and rustic Italian favorites.',
    color: '#8e4f3d',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'american',
    name: 'American Dishes',
    description: 'Comfort food, burgers, and hearty home-style plates.',
    color: '#6a8b59',
    image: grilledPattiesImage
  },
  {
    id: 'asian',
    name: 'Asian Dishes',
    description: 'Spicy, sweet and savory Asian dishes with bright flavors.',
    color: '#4f6c8f',
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'french',
    name: 'French Dishes',
    description: 'Refined French classics with rich sauces and fresh herbs.',
    color: '#9b7b5d',
    image: bourguignonImage
  },
  {
    id: 'indian',
    name: 'Indian Dishes',
    description: 'Creamy curries, fragrant spices, and bold Indian meals.',
    color: '#d17c2f',
    image: butterChickenImage
  },
  {
    id: 'mexican',
    name: 'Mexican Dishes',
    description: 'Fresh tacos, salsas and colorful Mexican street food.',
    color: '#b84b25',
    image: tacosImage
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian Dishes',
    description: 'Bright plant-based recipes that are healthy and satisfying.',
    color: '#5b8a57',
    image: freshAvocadoTomatoImage
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats and dessert classics for every occasion.',
    color: '#9e5c82',
    image: lavaCakeImage
  },
  {
    id: 'snacks',
    name: 'Snacks',
    description: 'Quick bites, starters and delicious snack ideas.',
    color: '#7a6b4f',
    image: bruschettaImage
  }
]

export const recipes = [
  {
    id: 'nyama-choma',
    name: 'Nyama Choma BBQ Steak',
    category: 'African Dishes',
    cuisine: 'African',
    image: steakImage,
    gallery: [
      steakImage,
      secondStepImage,
      thirdStepImage,
      steakSaladImage,
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80'
    ],
    video: 'https://www.youtube.com/embed/Vkq0B82qsNU',
    prep_time: 15,
    cook_time: 18,
    total_time: 33,
    difficulty: 'Medium',
    servings: 4,
    nutrition: {
      calories: '520 kcal',
      protein: '38g',
      carbs: '12g',
      fat: '30g'
    },
    description: 'A smoky East African barbecue steak with tangy spices, served with fresh greens.',
    ingredients: [
      '1 kg beef steak',
      '2 tablespoons smoked paprika',
      '1 teaspoon ground cumin',
      '1 teaspoon garlic powder',
      'Salt and pepper',
      'Olive oil'
    ],
    materials: [
      'Grill or heavy skillet',
      'Tongs',
      'Mixing bowl',
      'Cutting board',
      'Sharp knife'
    ],
    steps: [
      {
        title: 'Prepare the steak',
        description: 'Pat the beef dry and season with salt, pepper and spices.',
        time: '5 mins',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Heat the grill',
        description: 'Warm the grill or skillet until very hot.',
        time: '3 mins',
        image: secondStepImage
      },
      {
        title: 'Cook the steak',
        description: 'Grill each side for about 8 minutes for medium rare.',
        time: '16 mins',
        image: thirdStepImage
      },
      {
        title: 'Rest and serve',
        description: 'Let steak rest for 5 minutes, then slice and serve with salad.',
        time: '5 mins',
        image: steakSaladImage
      }
    ],
    featured: true
  },
  {
    id: 'carbonara-pasta',
    name: 'Creamy Carbonara Pasta',
    category: 'Italian Dishes',
    cuisine: 'Italian',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80',
      pastaBoilingImage,
      pastaWithPeasImage,
      eggsMixImage,
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
    ],
    video: 'https://www.youtube.com/embed/3AAdKl1UYZs',
    prep_time: 10,
    cook_time: 15,
    total_time: 25,
    difficulty: 'Easy',
    servings: 4,
    nutrition: {
      calories: '610 kcal',
      protein: '22g',
      carbs: '72g',
      fat: '28g'
    },
    description: 'Silky pasta tossed in a classic Italian carbonara sauce with pancetta and Parmesan.',
    ingredients: [
      '400g spaghetti',
      '150g pancetta',
      '2 eggs',
      '100g Parmesan',
      '1 garlic clove',
      'Black pepper'
    ],
    materials: [
      'Large pot',
      'Frying pan',
      'Whisk',
      'Mixing bowl',
      'Colander'
    ],
    steps: [
      {
        title: 'Cook pasta',
        description: 'Boil pasta until al dente in salted water.',
        time: '10 mins',
        image: pastaBoilingImage
      },
      {
        title: 'Fry pancetta',
        description: 'Cook pancetta until crisp and golden.',
        time: '5 mins',
        image: pastaWithPeasImage
      },
      {
        title: 'Mix sauce',
        description: 'Whisk eggs with Parmesan and seasoning.',
        time: '3 mins',
        image: eggsMixImage
      },
      {
        title: 'Toss the pasta',
        description: 'Combine pasta, pancetta and sauce off the heat.',
        time: '2 mins',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80'
      }
    ],
    featured: true
  },
  {
    id: 'classic-burger',
    name: 'Classic American Burger',
    category: 'American Dishes',
    cuisine: 'American',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
      burgerShapeImage,
      grilledPattiesImage,
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80'
    ],
    video: 'https://www.youtube.com/embed/UBWRSclDuK8',
    prep_time: 12,
    cook_time: 12,
    total_time: 24,
    difficulty: 'Easy',
    servings: 4,
    nutrition: {
      calories: '680 kcal',
      protein: '35g',
      carbs: '42g',
      fat: '36g'
    },
    description: 'A juicy griddle burger with cheddar, crisp lettuce and a tangy sauce.',
    ingredients: [
      '500g ground beef',
      '4 burger buns',
      '4 slices cheddar',
      'Lettuce',
      'Tomato',
      'Burger sauce'
    ],
    materials: [
      'Grill pan',
      'Spatula',
      'Mixing bowl',
      'Knife'
    ],
    steps: [
      {
        title: 'Shape patties',
        description: 'Form the beef into four even patties.',
        time: '5 mins',
        image: burgerShapeImage
      },
      {
        title: 'Cook burgers',
        description: 'Grill patties until browned and juicy.',
        time: '8 mins',
        image: grilledPattiesImage
      },
      {
        title: 'Build burger',
        description: 'Stack cheese, tomato, lettuce and sauce on buns.',
        time: '3 mins',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80'
      }
    ],
    featured: true
  },
  {
    id: 'teriyaki-bowl',
    name: 'Teriyaki Chicken Bowl',
    category: 'Asian Dishes',
    cuisine: 'Asian',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1498579809087-ef1e558fd1c9?auto=format&fit=crop&w=900&q=80'
    ],
    video: 'https://www.youtube.com/embed/vfIunrOhjfM',
    prep_time: 15,
    cook_time: 20,
    total_time: 35,
    difficulty: 'Medium',
    servings: 4,
    nutrition: {
      calories: '520 kcal',
      protein: '30g',
      carbs: '65g',
      fat: '16g'
    },
    description: 'Sweet and savory chicken bowl with rice, sesame greens, and a homemade teriyaki glaze.',
    ingredients: [
      '400g chicken thighs',
      '3 tablespoons soy sauce',
      '2 tablespoons honey',
      '1 teaspoon ginger',
      'Rice',
      'Sesame seeds'
    ],
    materials: [
      'Skillet',
      'Saucepan',
      'Mixing bowl',
      'Spoon'
    ],
    steps: [
      {
        title: 'Marinate chicken',
        description: 'Combine soy, honey and ginger with chicken.',
        time: '10 mins',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Cook chicken',
        description: 'Sear chicken until caramelized and cooked through.',
        time: '12 mins',
        image: 'https://images.unsplash.com/photo-1498579809087-ef1e558fd1c9?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Serve bowl',
        description: 'Load rice and greens, then top with chicken and sauce.',
        time: '5 mins',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80'
      }
    ],
    featured: true
  },
  {
    id: 'ratatouille',
    name: 'French Ratatouille',
    category: 'Vegetarian Dishes',
    cuisine: 'French',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1506086679522-6aa4d9af1bbd?auto=format&fit=crop&w=900&q=80'
    ],
    video: 'https://www.youtube.com/embed/qQyUOolyQCE',
    prep_time: 25,
    cook_time: 40,
    total_time: 65,
    difficulty: 'Medium',
    servings: 4,
    nutrition: {
      calories: '280 kcal',
      protein: '6g',
      carbs: '35g',
      fat: '12g'
    },
    description: 'A colorful vegetable stew from Provence, layered with zucchini, eggplant, and tomato.',
    ingredients: [
      '1 eggplant',
      '2 zucchini',
      '2 tomatoes',
      '1 onion',
      '2 cloves garlic',
      'Olive oil'
    ],
    materials: [
      'Baking dish',
      'Chef knife',
      'Cutting board',
      'Oven'
    ],
    steps: [
      {
        title: 'Slice vegetables',
        description: 'Cut zucchini, eggplant and tomatoes into thin rounds.',
        time: '15 mins',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Arrange in dish',
        description: 'Layer the sliced vegetables in a baking dish with herbs.',
        time: '10 mins',
        image: 'https://images.unsplash.com/photo-1506086679522-6aa4d9af1bbd?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Roast until tender',
        description: 'Bake in the oven until the vegetables are soft and fragrant.',
        time: '40 mins',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80'
      }
    ],
    featured: false
  },
  {
    id: 'beef-bourguignon',
    name: 'Beef Bourguignon',
    category: 'French Dishes',
    cuisine: 'French',
    image: bourguignonImage,
    gallery: [
      bourguignonImage,
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
    ],
    video: 'https://www.youtube.com/embed/rD0i5aVQ3iw',
    prep_time: 25,
    cook_time: 180,
    total_time: 205,
    difficulty: 'Hard',
    servings: 6,
    nutrition: {
      calories: '580 kcal',
      protein: '34g',
      carbs: '18g',
      fat: '38g'
    },
    description: 'A slow-braised French classic with tender beef, red wine and savory herbs.',
    ingredients: [
      '1.5 kg beef chuck',
      '200g bacon lardons',
      '2 carrots',
      '2 onions',
      '3 cloves garlic',
      '500ml red wine',
      '2 cups beef stock',
      '2 tablespoons tomato paste',
      'Fresh thyme',
      'Bay leaves'
    ],
    materials: [
      'Large Dutch oven',
      'Wooden spoon',
      'Cutting board',
      'Sharp knife'
    ],
    steps: [
      {
        title: 'Brown the beef',
        description: 'Season and sear the beef cubes until deeply caramelized.',
        time: '15 mins',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Saute vegetables',
        description: 'Cook onions, carrots and garlic until soft and fragrant.',
        time: '10 mins',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Simmer in wine',
        description: 'Add wine, stock, herbs and beef, then braise gently until tender.',
        time: '180 mins',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      }
    ],
    featured: false
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    category: 'Indian Dishes',
    cuisine: 'Indian',
    image: butterChickenImage,
    gallery: [
      butterChickenImage,
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
    ],
    video: 'https://www.youtube.com/embed/MF7Wk6LET6E',
    prep_time: 15,
    cook_time: 30,
    total_time: 45,
    difficulty: 'Medium',
    servings: 4,
    nutrition: {
      calories: '650 kcal',
      protein: '28g',
      carbs: '18g',
      fat: '48g'
    },
    description: 'Creamy tomato-based chicken curry with aromatic Indian spices.',
    ingredients: [
      '500g chicken breast',
      '1 onion',
      '2 tomatoes',
      '1 tablespoon garam masala',
      '100ml cream',
      'Butter'
    ],
    materials: [
      'Saucepan',
      'Wooden spoon',
      'Blender',
      'Knife'
    ],
    steps: [
      {
        title: 'Prepare sauce',
        description: 'Saute onions and spices, then add tomatoes and cream.',
        time: '12 mins',
        image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f50f?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Cook chicken',
        description: 'Simmer the chicken in the sauce until tender.',
        time: '18 mins',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      }
    ],
    featured: false
  },
  {
    id: 'tacos-al-pastor',
    name: 'Tacos al Pastor',
    category: 'Mexican Dishes',
    cuisine: 'Mexican',
    image: tacosImage,
    gallery: [
      tacosImage,
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80'
    ],
    video: 'https://www.youtube.com/embed/q0kKqh26QyI',
    prep_time: 20,
    cook_time: 12,
    total_time: 32,
    difficulty: 'Medium',
    servings: 4,
    nutrition: {
      calories: '450 kcal',
      protein: '28g',
      carbs: '36g',
      fat: '20g'
    },
    description: 'Tender marinated pork tacos with pineapple, onions, and fresh cilantro.',
    ingredients: [
      '500g pork shoulder',
      'Pineapple',
      'Corn tortillas',
      'Onion',
      'Cilantro',
      'Chili powder'
    ],
    materials: [
      'Skillet',
      'Tongs',
      'Cutting board',
      'Sharp knife'
    ],
    steps: [
      {
        title: 'Marinate pork',
        description: 'Combine spices and pineapple juice, then marinate the pork.',
        time: '15 mins',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Cook pork',
        description: 'Sear the pork until caramelized and slice thin.',
        time: '12 mins',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80'
      }
    ],
    featured: false
  },
  {
    id: 'lava-cake',
    name: 'Chocolate Lava Cake',
    category: 'Desserts',
    cuisine: 'Dessert',
    image: lavaCakeImage,
    gallery: [
      lavaCakeImage,
      meltingChocolateImage,
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80'
    ],
    video: 'https://www.youtube.com/embed/-d5M0x2Qim0',
    prep_time: 10,
    cook_time: 12,
    total_time: 22,
    difficulty: 'Medium',
    servings: 4,
    nutrition: {
      calories: '450 kcal',
      protein: '6g',
      carbs: '44g',
      fat: '30g'
    },
    description: 'Rich chocolate fondant with a warm molten center, perfect for dessert nights.',
    ingredients: [
      '100g dark chocolate',
      '100g butter',
      '2 eggs',
      '50g sugar',
      '30g flour',
      'Cocoa powder'
    ],
    materials: [
      'Ramekins',
      'Mixing bowl',
      'Whisk',
      'Oven'
    ],
    steps: [
      {
        title: 'Melt chocolate',
        description: 'Melt chocolate and butter together until smooth.',
        time: '5 mins',
        image: meltingChocolateImage
      },
      {
        title: 'Bake cakes',
        description: 'Fill ramekins and bake until the edges are set but the center is soft.',
        time: '12 mins',
        image: lavaCakeImage
      }
    ],
    featured: false
  },
  {
    id: 'bruschetta',
    name: 'Avocado Bruschetta',
    category: 'Snacks',
    cuisine: 'Snack',
    image: bruschettaImage,
    gallery: [
      bruschettaImage,
      freshAvocadoTomatoImage,
      crispedBreadImage
    ],
    video: 'https://www.youtube.com/embed/2Pkqj9xnvkc',
    prep_time: 12,
    cook_time: 6,
    total_time: 18,
    difficulty: 'Easy',
    servings: 4,
    nutrition: {
      calories: '240 kcal',
      protein: '5g',
      carbs: '24g',
      fat: '14g'
    },
    description: 'Crispy toasted bread topped with creamy avocado, tomato and basil.',
    ingredients: [
      '4 slices sourdough',
      '1 ripe avocado',
      'Cherry tomatoes',
      'Fresh basil',
      'Olive oil',
      'Lemon juice'
    ],
    materials: [
      'Toaster',
      'Knife',
      'Bowl',
      'Spoon'
    ],
    steps: [
      {
        title: 'Toast bread',
        description: 'Toast sourdough slices until crisp.',
        time: '4 mins',
        image: crispedBreadImage
      },
      {
        title: 'Prepare topping',
        description: 'Mash avocado with lemon juice and season to taste.',
        time: '5 mins',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Assemble bruschetta',
        description: 'Spread avocado on toast and top with tomatoes and basil.',
        time: '3 mins',
        image: freshAvocadoTomatoImage
      }
    ],
    featured: false
  }
]

export const tutorials = [
  {
    id: 'knife-skills',
    title: 'Knife Skills for Beginners',
    category: 'Basic Techniques',
    description: 'Learn safe chopping, dicing and slicing techniques before you begin cooking.',
    duration: '8 minutes',
    video: 'https://www.youtube.com/embed/4B0Bcg8_Ov0',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'sauce-master',
    title: 'Mastering Italian Sauces',
    category: 'Italian',
    description: 'A beginner-friendly guide to making rich sauces for pasta, pizza and more.',
    duration: '10 minutes',
    video: 'https://www.youtube.com/embed/t6d5n5ENnH0',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'african-cooking',
    title: 'African Cooking Essentials',
    category: 'African',
    description: 'Explore spices, marinades and simple techniques from across Africa.',
    duration: '12 minutes',
    video: 'https://www.youtube.com/embed/_NhkqVwS9ms',
    image: steakImage
  },
  {
    id: 'baking-basics',
    title: 'Baking Basics',
    category: 'Dessert',
    description: 'Learn how to turn simple ingredients into cakes, cookies and sweet treats.',
    duration: '9 minutes',
    video: 'https://www.youtube.com/embed/8NJLpeaKjS4',
    image: cakeImage
  },
  {
    id: 'meal-planning',
    title: 'Healthy Meal Planning',
    category: 'Wellness',
    description: 'Build balanced weekly meal plans with easy recipe ideas.',
    duration: '11 minutes',
    video: 'https://www.youtube.com/embed/v6_zs8jxxNc',
    image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=900&q=80'
  }
]
