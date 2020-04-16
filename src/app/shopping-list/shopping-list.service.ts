import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 2),
  ];
  // to add ingredient
  ingAdded = new EventEmitter<Ingredient[]>();

  constructor() { }

  // shopping list
  getIngredients() {
    return this.ingredients.slice();
  }
  // shopping list
  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingAdded.emit(this.ingredients.slice());
  }
}
