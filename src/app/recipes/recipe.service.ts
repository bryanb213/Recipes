import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private slService: ShoppingListService) { }
  recipesChanged  = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe('Hearty Bolognese-Style Meat Sauce for Pasta',
    'This hearty meat sauce is inspired by the classic ragù alla bolognese, which is a thick, meaty sauce that is simmered for hours with milk, red wine, and a couple of tablespoons or so of tomato paste—a surprisingly small amount of tomato by North America standards.',
    'https://www.thespruceeats.com/thmb/oxzAQ4AIJu1fq8LA_lt1-ejoyNs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/meat-sauce-spaghetti-2500-56dc8ae53df78c5ba053531b.jpg',
    [
      new Ingredient('1/4 cup olive oil', 1),
      new Ingredient('1 medium carrot (peeled and diced)', 1),
      new Ingredient('1 medium onion (chopped)', 1),
      new Ingredient('2 cloves garlic (finely minced)', 1),
      new Ingredient('1/2 cup red wine', 1),
      new Ingredient('1/2 cup beef stock', 1),
      new Ingredient('1/2 pound ground beef chuck', 1),
      new Ingredient('1/2 pound ground pork', 1),
      new Ingredient('1 28-oz can whole tomatoes (with liquid)', 1),
      new Ingredient('1/2 teaspoon oregano', 1),
      new Ingredient('1/2 teaspoon basil', 1),
      new Ingredient('1 teaspoon sugar', 1),
      new Ingredient('Kosher salt and freshly ground black pepper, to taste', 1),
    ]),

    new Recipe('SPICY SHOYU RAMEN',
    'Easy homemade spicy shoyu ramen recipe. Top with soft boiled egg, fish cake, nori and fall-apart tender chashu, this delicious bowl of spicy delight will sure satisfy your ramen craving!',
    'https://nitrocdn.com/KQYMGOLIdXGmoAcyJsPOrQDKktgCbwtG/assets/static/optimized/rev-6101272/wp-content/uploads/2020/04/Spicy-Shoyu-Ramen-2167-I.jpg',
    [
      new Ingredient('2 servings ramen noodles', 1),
      new Ingredient('1 Tbsp sesame oil (roasted)', 1),
      new Ingredient('2 cloves garlic (minced)', 1),
      new Ingredient('1½ inch ginger (minced)', 1),
      new Ingredient('2 tsp Doubanjiang (spicy chili bean sauce/broad bean paste)', 1),
      new Ingredient('2 cups chicken stock/broth', 1),
      new Ingredient('2 cups dashi', 1),
      new Ingredient('2½ Tbsp soy sauce', 1),
      new Ingredient('½ Tbsp sake', 1),
      new Ingredient('1½ tsp kosher/sea salt (use half for table salt)', 1),
      new Ingredient('1 tsp sugar', 1),
    ])
  ];

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }



  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipeToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
