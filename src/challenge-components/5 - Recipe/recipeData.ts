import CoffeeImage from "@/assets/5 - Recipe/coffee.jpg";

export type TRecipe = {
  name: string;
  description: string;
  image: string;
  totalTime: number; // in minutes
  difficulty: string;
  cost: number; // dollars
  ingredients: string[];
  instructions: string[];
};

export const RecipeData = {
  name: "Sweet Iced Coffee with Coconut Milk",
  description:
    "Sweet Iced Coffee with coconnut milk is easy to make and stores well in the fridge. Make a large batch and save yourself a few trips to the coffee shop",
  image: CoffeeImage,
  totalTime: 10,
  difficulty: "easy",
  cost: 1.5,
  ingredients: [
    "3 tablespoon Espresso Coffee powder",
    "1 cup of boiling water",
    "1 cup of Coconut milk",
  ],
  instructions: [
    "Boil some water and let sit for 1-2 minutes",
    "Put the coffee grounds into the Cafetière",
    "Let the coffee steep for 5 minutes the slowly press down the plunger on your Cafetière",
    "Pour the coffee into a jug, allow to cool then chill for several hours",
    "Whisk in the coconut milk and condensed milk and serve over plenty of ice",
    "This coffee can be stored in the fridge for up to 5 days. Shake or stir again before serving",
  ],
};

export type TRatings = {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
};

export const RecipeReviewData = {
  totalReviews: 189,
  ratings: {
    1: 0,
    2: 0,
    3: 12,
    4: 150,
    5: 27,
  },
};
