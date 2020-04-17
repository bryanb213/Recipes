import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private slService: ShoppingListService) { }

  recipes: Recipe[] = [
    new Recipe('Veggie Burger',
    'Burger made from vegetables',
    'https://media.npr.org/assets/img/2019/02/08/vegan-burger-1_custom-69b8aeff56bf284ed1349c739dc345cf0336364d-s1200-c85.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Meater', 1),
      new Ingredient('Meaty', 1),
    ]),

    new Recipe('Bootleg Veggie Burger',
    'Burger made from vegetables',
    'https://media.npr.org/assets/img/2019/02/08/vegan-burger-1_custom-69b8aeff56bf284ed1349c739dc345cf0336364d-s1200-c85.jpg',
    [
      new Ingredient('Meats', 1),
      new Ingredient('Meatsssssss', 1),
    ])
  ];

  recipeSelected = new EventEmitter<Recipe>();



  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipeToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
