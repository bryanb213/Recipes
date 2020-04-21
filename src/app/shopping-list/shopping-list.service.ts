import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 2),
  ];
  // to add ingredient
  ingAdded = new Subject<Ingredient[]>();

  constructor() { }

  // shopping list
  getIngredients() {
    return this.ingredients.slice();
  }
  // shopping list
  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingAdded.next(this.ingredients);
  }
  // for adding ingredients to shopping list
  addIngredients(ingredients: Ingredient[]) {
    // for (let i of ingredients) {
    //   this.ingredientAdded(i);
    // }
    this.ingredients.push(...ingredients);
    this.ingAdded.next(this.ingredients.slice());
  }
}
