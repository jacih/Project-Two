const sequelize = require('sequelize');
const { Meal } = require('../models');

const mealData = 
[
  {
    'name': 'Puerto Rican Rice and Beans',
    'recipe_url': 'https://www.ambitiouskitchen.com/video-moms-authentic-puerto-rican-rice-and-beans/'
  },
  {
    'name': 'Ginger Coconut Chicken Soup',
    'recipe_url': 'https://www.ambitiouskitchen.com/ginger-chicken-soup/'
  },
  {
    'name': 'Roasted Vegetable Butternut Squash Lasagna',
    'recipe_url': 'https://www.ambitiouskitchen.com/roasted-vegetable-butternut-squash-lasagna/'
  },
  {
    'name': 'Cilantro Pesto Pasta with Roasted Pumpkin & Honey',
    'recipe_url': 'https://www.ambitiouskitchen.com/cilantro-pesto-pasta-with-roasted-pumpkin/'
  },
  {
    'name': 'Vegan Curried Pumpkin Lentil Soup',
    'recipe_url': 'https://www.ambitiouskitchen.com/pumpkin-lentil-soup/'
  },
  {
    'name': 'Spinach Garlic Parmesan Orzo with Crispy Bacon',
    'recipe_url': 'https://www.ambitiouskitchen.com/spinach-garlic-parmesan-orzo-with-crispy-bacon/'
  },
  {
    'name': 'Butternut Squash, Chickpea & Lentil Moroccan Stew',
    'recipe_url': 'https://www.ambitiouskitchen.com/butternut-squash-chickpea-lentil-moroccan-stew/'
  },
  {
    'name': 'Crispy Broccoli Sweet and Spicy Sesame Tahini Noodles',
    'recipe_url': 'https://www.ambitiouskitchen.com/vegan-tahini-noodles/'
  },
  {
    'name': 'Caramelized Onion, Fig & Goat Cheese Pizza',
    'recipe_url': 'https://www.ambitiouskitchen.com/caramelized-onion-fig-goat-cheese-pizza-arugula-video/'
  },
  {
    'name': 'Slow Cooker Hamburger Stew',
    'recipe_url': 'https://www.budgetbytes.com/slow-cooker-hamburger-stew/'
  },
  {
    'name': 'Slow Cooker White Chicken Chili',
    'recipe_url': 'https://www.budgetbytes.com/slow-cooker-white-chicken-chili/'
  },
  {
    'name': 'Slow Cooker Pineapple Teriyaki Chicken',
    'recipe_url': 'https://www.budgetbytes.com/slow-cooker-pineapple-teriyaki-chicken/'
  },
  {
    'name': 'Jessica Gavins\'s Honey Hoisin Garlic Chicken',
    'recipe_url': 'https://www.budgetbytes.com/jessica-gavins-honey-hoisin-garlic-chicken/'
  },
  {
    'name': 'Oven Roasted Ratatouille',
    'recipe_url': 'https://www.budgetbytes.com/oven-roasted-ratatouille/'
  },
  {
    'name': 'Spinach Pie',
    'recipe_url': 'https://www.budgetbytes.com/spinach-pie/'
  },
  {
    'name': 'Beef Kofta Meatballs with Roasted Vegetables',
    'recipe_url': 'https://www.budgetbytes.com/beef-kofta-meatballs-with-roasted-vegetables/'
  },
  {
    'name': 'Greek Chicken Pasta Salad',
    'recipe_url': 'https://www.budgetbytes.com/greek-chicken-pasta-salad/'
  },
  {
    'name': 'Chana Saag Curry',
    'recipe_url': 'https://www.budgetbytes.com/chana-saag/'
  },
  {
    'name': 'Curried Ground Beef with Peas and Potatoes',
    'recipe_url': 'https://www.budgetbytes.com/curry-beef-with-peas/'
  },
  {
    'name': 'Coconut Chicken Strips with Sweet Chili Sauce',
    'recipe_url': 'https://www.budgetbytes.com/coconut-chicken-w-sweet-chili-dipping-sauce/'
  },
  {
    'name': 'BBQ Chicken Pizza',
    'recipe_url': 'https://www.budgetbytes.com/bbq-chicken-pizza/'
  },
  {
    'name': 'Portobello Mushroom Pizza',
    'recipe_url': 'https://www.budgetbytes.com/ultimate-portobello-mushroom-pizza/'
  },
  {
    'name': 'Spicy Hawaiian Pizza',
    'recipe_url': 'https://www.budgetbytes.com/spicy-hawaiian-pizza/'
  },
  {
    'name': 'Zucchini Pizza Boats',
    'recipe_url': 'https://www.budgetbytes.com/zucchini-pizza-boats/'
  },
  {
    'name': 'Soboro Donburi',
    'recipe_url': 'https://www.foodandwine.com/recipes/soboro-donburi-gingery-ground-beef-peas-over-rice'
  },
  {
    'name': 'Shrimp Creole',
    'recipe_url': 'https://www.foodandwine.com/recipes/shrimp-creole'
  },
  {
    'name': 'Seared Salmon',
    'recipe_url': 'https://www.foodandwine.com/recipes/seared-salmon-summer-vegetables'
  },
  {
    'name': 'Vegetable Hot-and-Sour Soup',
    'recipe_url': 'https://www.foodandwine.com/recipes/vegetable-hot-and-sour-soup'
  },
  {
    'name': 'Smoked Salmon and Caviar Pizza',
    'recipe_url': 'https://www.foodandwine.com/recipes/pizza-smoked-salmon-creme-fraiche-and-caviar'
  },
  {
    'name': 'Korean-Style Short Ribs',
    'recipe_url': 'https://www.foodandwine.com/recipes/grilled-korean-style-short-ribs'
  },
  {
    'name': 'Baked Goat Cheese Salad',
    'recipe_url': 'https://www.foodandwine.com/recipes/baked-goat-cheese-salad'
  },
  {
    'name': 'Fried Chicken with Tomato Gravy',
    'recipe_url': 'https://www.foodandwine.com/recipes/fried-chicken-tomato-gravy'
  },
  {
    'name': 'Baltimore-Style Crab Cakes',
    'recipe_url': 'https://www.foodandwine.com/recipes/baltimore-style-crab-cakes'
  },
  {
    'name': 'Shrimp and Corn Chowder',
    'recipe_url': 'https://www.foodandwine.com/recipes/shrimp-and-corn-chowder'
  },
  {
    'name': 'Ham Steaks in Madeira Sauce',
    'recipe_url': 'https://www.foodandwine.com/recipes/ham-steaks-in-madeira-sauce'
  },
  {
    'name': 'Chicken Tikka Masala',
    'recipe_url': 'https://www.foodandwine.com/recipes/chicken-tikka-masala'
  },
  {
    'name': 'Chickpea and Kale in Spicy Pomodoro Sauce',
    'recipe_url': 'https://www.foodandwine.com/recipes/chickpeas-and-kale-in-spicy-pomodoro-sauce'
  },
  {
    'name': 'Farro and Green Olive Salad',
    'recipe_url': 'https://www.foodandwine.com/recipes/farro-and-green-olive-salad-walnuts-and-raisins'
  },
  {
    'name': 'Spaghetti with Clams and Braised Greens',
    'recipe_url': 'https://www.foodandwine.com/recipes/spaghetti-clams-and-braised-greens'
  },
  {
    'name': 'French Onion Soup with Roasted Poblano',
    'recipe_url': 'https://www.foodandwine.com/recipes/french-onion-soup-with-roasted-poblano'
  },
  {
    'name': 'Kung Pao Chicken',
    'recipe_url': 'https://www.foodandwine.com/recipes/kung-pao-chicken'
  },
  {
    'name': 'Shallow-Poached Salmon with Leek Beurre Blanc',
    'recipe_url': 'https://www.foodandwine.com/recipes/shallow-poached-salmon-with-leek-beurre-blanc'
  },
  {
    'name': 'Southern-Style Mac \'n\' Cheese',
    'recipe_url': 'https://www.foodandwine.com/recipes/southern-style-mac-n-cheese'
  },
  {
    'name': 'Smoky Simmered Beans with Sofrito',
    'recipe_url': 'https://www.foodandwine.com/recipes/smoky-simmered-beans-with-sofrito'
  },
  {
    'name': 'Sausage and Red Onion Sheet Pan Quiche',
    'recipe_url': 'https://www.foodandwine.com/recipes/sausage-and-red-onion-sheet-pan-quiche'
  },
  {
    'name': 'Cajun Chicken Pasta',
    'recipe_url': 'https://www.foodnetwork.com/recipes/food-network-kitchen/one-pot-cajun-chicken-pasta-8051436'
  },
  {
    'name': 'Beef, White Bean and Squash Burgers',
    'recipe_url': 'https://www.foodnetwork.com/recipes/food-network-kitchen/blended-beef-white-bean-and-squash-burgers-7997962'
  },
  {
    'name': 'Shakshuka',
    'recipe_url': 'https://www.foodnetwork.com/recipes/aida-mollenkamp/eggs-in-purgatory-shakshuka-recipe-1948921'
  },
  {
    'name': 'Pork and Pineapple Grain Bowl',
    'recipe_url': 'https://www.foodnetwork.com/recipes/food-network-kitchen/pork-and-pineapple-grain-bowl-5258339'
  },
  {
    'name': 'General Tso\'s Taco Bake',
    'recipe_url': 'https://www.foodnetwork.com/recipes/eddie-jackson/general-tsos-taco-bake-7497311'
  },
  {
    'name': 'Halibut Fish Tacos',
    'recipe_url': 'https://www.foodnetwork.com/recipes/food-network-kitchen/halibut-fish-tacos-with-cilantro-savoy-slaw-recipe-2107883'
  },
  {
    'name': 'Pasta e Fagioli with Chickpeas',
    'recipe_url': 'https://www.foodnetwork.com/recipes/food-network-kitchen/pasta-e-fagioli-with-chickpeas-3812237'
  },
  {
    'name': 'King Oyster Mushroom Salad',
    'recipe_url': 'https://nomnompaleo.com/king-oyster-mushroom-salad'
  },
  {
    'name': 'Spicy Thai Chicken Zucchini Noodles',
    'recipe_url': 'https://nomnompaleo.com/post/141120826788/spicy-thai-chicken-zoodle-salad'
  },
  {
    'name': 'Cantonese Egg Custard with Minced Pork',
    'recipe_url': 'https://nomnompaleo.com/post/83239952327/cantonese-egg-custard-with-minced-pork'
  },
  {
    'name': 'Soufflé Frittata',
    'recipe_url': 'https://nomnompaleo.com/post/5537773874/souffl%C3%A9-frittata'
  },
  {
    'name': 'Italian Sausage and Kale Casserole',
    'recipe_url': 'https://nomnompaleo.com/italian-sausage-kale-casserole'
  },
  {
    'name': 'Warm Brussels Sprout Salad',
    'recipe_url': 'https://nomnompaleo.com/post/66793339868/warm-brussels-sprouts-slaw-with-asian-citrus'
  },
  {
    'name': 'Tsukune',
    'recipe_url': 'https://nomnompaleo.com/tsukune'
  },
  {
    'name': 'Beef Pan-Fried Noodles',
    'recipe_url': 'https://omnivorescookbook.com/beef-pan-fried-noodles/'
  },
  {
    'name': 'Ginger Beef Stir Fry',
    'recipe_url': 'https://omnivorescookbook.com/ginger-beef/'
  },
  {
    'name': 'Beef Rendang',
    'recipe_url': 'https://omnivorescookbook.com/beef-randang/'
  },
  {
    'name': 'Instant Pot Orange Chicken',
    'recipe_url': 'https://omnivorescookbook.com/instant-pot-orange-chicken/'
  },
  {
    'name': 'Moo Shu Chicken',
    'recipe_url': 'https://omnivorescookbook.com/moo-shu-chicken/'
  },
  {
    'name': 'Vegetable Chow Fun',
    'recipe_url': 'https://omnivorescookbook.com/vegetable-chow-fun/'
  },
  {
    'name': 'Vegetarian Map Tofu',
    'recipe_url': 'https://omnivorescookbook.com/vegetarian-mapo-tofu/'
  },
  {
    'name': 'Steamed Pork Buns with Chive',
    'recipe_url': 'https://omnivorescookbook.com/steamed-pork-buns/'
  },
  {
    'name': 'Honey Garlic Pork Chops',
    'recipe_url': 'https://omnivorescookbook.com/honey-garlic-pork-chops/'
  },
  {
    'name': 'Sweet and Sour Meatballs',
    'recipe_url': 'https://omnivorescookbook.com/sweet-and-sour-meatballs/'
  },
  {
    'name': 'Cumin Lamb Noodles',
    'recipe_url': 'https://omnivorescookbook.com/cumin-lamb-noodles/'
  },
  {
    'name': 'Ham Banh Mi Sandwich',
    'recipe_url': 'https://omnivorescookbook.com/ham-banh-mi/'
  },
  {
    'name': 'Sopa Tarasca with Jalapeno Corn Fritters',
    'recipe_url': 'https://pinchofyum.com/sopa-tarasca-pinto-bean-soup-with-jalapeno-corn-fritters'
  },
  {
    'name': 'Portobello French Dip with Horseradish Aioli',
    'recipe_url': 'https://pinchofyum.com/portobello-french-dip-with-horseradish-aioli'
  },
  {
    'name': 'Sausage, Kale, and White Bean Soup',
    'recipe_url': 'https://pinchofyum.com/sausage-kale-and-white-bean-soup'
  },
  {
    'name': 'Grilled Chimichurri Portobellos with Goat Cheese Mashed Potatoes',
    'recipe_url': 'https://pinchofyum.com/grilled-chimichurri-portobellos-with-goat-cheese-mashed-potatoes'
  },
  {
    'name': 'Reuben Casserole',
    'recipe_url': 'https://pinchofyum.com/reuben-casserole'
  },
  {
    'name': 'Instant Pot Spicy Short Rib Noodle Soup',
    'recipe_url': 'https://pinchofyum.com/instant-pot-spicy-short-rib-noodle-soup'
  },
  {
    'name': 'Maple Mustard Tempeh Bowl',
    'recipe_url': 'https://pinchofyum.com/fall-favorite-maple-mustard-tempeh-bowls'
  },
  {
    'name': 'Tofu and Brown Rice Lettuce Wraps',
    'recipe_url': 'https://pinchofyum.com/tofu-and-brown-rice-lettuce-wraps'
  },
  {
    'name': 'Chicken Piccata',
    'recipe_url': 'https://www.tasteofhome.com/recipes/quick-chicken-piccata/'
   },
  {
    'name': 'Enchilada Casserole',
    'recipe_url': 'https://www.tasteofhome.com/recipes/enchilada-casser-ole/'
  },
  {
    'name': 'Creamy Italian Chicken',
    'recipe_url': 'https://www.tasteofhome.com/recipes/creamy-italian-chicken/'
  },
  {
    'name': 'Zucchini Pizza Casserole',
    'recipe_url': 'https://www.tasteofhome.com/recipes/zucchini-pizza-casserole/'
  },
  {
    'name': 'Classic Beef Stew',
    'recipe_url': 'https://www.tasteofhome.com/recipes/classic-beef-stew/'
  },
  {
    'name': 'Chicken and Dumplings',
    'recipe_url': 'https://www.tasteofhome.com/recipes/chicken-and-dumplings/'
  },
  {
    'name': 'Pork Chops with Scalloped Potatoes',
    'recipe_url': 'https://www.tasteofhome.com/recipes/pork-chops-with-scalloped-potatoes/'
  },
  {
    'name': 'Cabbage Roll Casserole',
    'recipe_url': 'https://www.tasteofhome.com/recipes/cabbage-roll-casserole/'
  },
  {
    'name': 'Skillet Shepherd\'s Pie',
    'recipe_url': 'https://www.tasteofhome.com/recipes/skillet-shepherd-s-pie/'
  },
  {
    'name': 'Pot Roast',
    'recipe_url': 'https://www.tasteofhome.com/recipes/flavorful-pot-roast/'
  },
  {
    'name': 'Shrimp Monterey',
    'recipe_url': 'https://www.tasteofhome.com/recipes/shrimp-monterey/'
  },
  {
    'name': 'Southwestern Casserole',
    'recipe_url': 'https://www.tasteofhome.com/recipes/southwestern-casserole/'
  },
  {
    'name': 'Lasagna',
    'recipe_url': 'https://www.tasteofhome.com/recipes/best-lasagna/'
  },
  {
    'name': 'Basil Pork Chops',
    'recipe_url': 'https://www.tasteofhome.com/recipes/basil-pork-chops/'
  },
  {
    'name': 'Swedish Meatballs',
    'recipe_url': 'https://www.tasteofhome.com/recipes/mom-s-swedish-meatballs/'
  },
  {
    'name': 'Potato Kielbasa Skillet',
    'recipe_url': 'https://www.tasteofhome.com/recipes/potato-kielbasa-skillet/'
  },
  {
    'name': 'Baked Pork Chops with Apples and Peppers',
    'recipe_url': 'https://www.theblackpeppercorn.com/baked-pork-chops-with-apples-and-peppers/'
  },
  {
    'name': 'Moroccan Pork Stew with Chickpeas and Dried Cherries',
    'recipe_url': 'https://www.theblackpeppercorn.com/moroccan-pork-stew-with-chick-peas-and-dried-cherries/'
  },
  {
    'name': 'Chicken and Andouille Jambalaya',
    'recipe_url': 'https://www.theblackpeppercorn.com/chicken-and-andouille-jambalaya/'
  },
  {
    'name': 'Veal Biryani',
    'recipe_url': 'https://www.theblackpeppercorn.com/veal-biryani/'
  },
  {
    'name': 'Cheese Tortellini with Ground Turkey, Spinahc and Zucchini Marinara',
    'recipe_url': 'https://www.theblackpeppercorn.com/cheese-tortellini-with-ground-turkey-spinach-and-zucchini-marinara/'
  },
  {
    'name': 'Mussels with White Wine and Garlic',
    'recipe_url': 'https://www.theblackpeppercorn.com/mussels-with-white-wine-and-garlic/'
  },
  {
    'name': 'Crawfish Jambalaya Stuffed Sweet Peppers',
    'recipe_url': 'https://www.theblackpeppercorn.com/crawfish-jambalaya-stuffed-sweet-peppers-with-country-gravy/'
  },
  {
    'name': 'Beer Braised Beef and Swiss Melt',
    'recipe_url': 'https://www.theblackpeppercorn.com/beer-braised-beef-and-swiss-melt/'
  },
  {
    'name': 'Naan Pizza with Salami and Buffalo Mozzarella',
    'recipe_url': 'https://www.theblackpeppercorn.com/naan-pizza-with-salami-and-buffalo-mozzarella/'
  },
  {
    'name': 'Honey Buffalo Chicken Wraps',
    'recipe_url': 'https://therecipecritic.com/bufffalo-chicken-wraps/'
  },
  {
    'name': 'Creamy Chick Mushroom Florentine',
    'recipe_url': 'https://therecipecritic.com/one-pot-creamy-chicken-mushroom-florentine/'
  },
  {
    'name': 'Skillet Italian sausage and Peppers',
    'recipe_url': 'https://therecipecritic.com/italian-sausage-and-peppers/'
  },
  {
    'name': 'Vegetable Curry',
    'recipe_url': 'https://therecipecritic.com/vegetable-curry/'
  },
  {
    'name': 'Buddha Bowl',
    'recipe_url': 'https://therecipecritic.com/buddha-bowl/'
  },
  {
    'name': 'Pasta with Anchovies and Breadcrumbs',
    'recipe_url': 'https://www.thespruceeats.com/pasta-with-anchovies-and-breadcrumbs-recipe-5215384'
  },
  {
    'name': 'Tamale Pie',
    'recipe_url': 'https://www.thespruceeats.com/tamale-pie-recipe-5201405'
  },
  {
    'name': 'Lobster Pizza',
    'recipe_url': 'https://www.thespruceeats.com/lobster-pizza-recipe-2708757'
  },
  {
    'name': 'Keto Pizza',
    'recipe_url': 'https://www.thespruceeats.com/keto-pizza-5180298'
  },
  {
    'name': 'Vegetarian Black Beans and Rice',
    'recipe_url': 'https://www.thespruceeats.com/basic-vegetarian-black-beans-and-rice-3377563'
  },
  {
    'name': 'Vegetable and Chickpea Tagine with Couscous',
    'recipe_url': 'https://www.thespruceeats.com/vegetable-and-chickpea-tagine-with-couscous-2122265'
  },
  {
    'name': 'Vegan Chili',
    'recipe_url': 'https://www.thespruceeats.com/vegetarian-and-vegan-chili-recipe-3377016'
  },
  {
    'name': 'Mechoui',
    'recipe_url': 'https://www.thespruceeats.com/moroccan-leg-of-lamb-2394349'
  },
  {
    'name': 'Chicken Rfissa',
    'recipe_url': 'https://www.thespruceeats.com/chicken-rfissa-trid-with-lentils-enugreek-2394655'
  },
  {
    'name': 'Seafood Paella with Pork and Chicken',
    'recipe_url': 'https://www.thespruceeats.com/seafood-paella-recipe-with-pork-and-chicken-3083373'
  }
]

// seed meal table with a new meal class for each name;
const seedMeals = () => {
  for (let m = 0; m < mealData.length; m++) {
    let mealname = mealData[m].name;
    // console.log(mealname);
    // creating new class for every name in the mealData array;
    const meal = Meal.create({ name: mealname });
    // console.log(meal);
  }
}
// listing exports req'd to be used elsewhere;
module.exports =  {
  seedMeals,
  mealData
};