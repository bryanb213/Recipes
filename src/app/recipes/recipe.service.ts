import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
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
      new Ingredient('Meatss', 1),
    ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }
  getRecipes() {
    return this.recipes;
  }
}
