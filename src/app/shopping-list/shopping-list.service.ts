import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    // new Ingredient('apple', 5),
    // new Ingredient('banana', 2),
  ];
  // to add ingredient
  ingAdded = new Subject<Ingredient[]>();

  // edit ingredient
  editIng = new Subject<number>();

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

  getIng(index: number) {
    return this.ingredients[index];
  }

  updateIng(index: number, newIng: Ingredient) {
    this.ingredients[index] = newIng;
    this.ingAdded.next(this.ingredients.slice());
  }

  deleteIng(index: number) {
    this.ingredients.splice(index, 1);
    this.ingAdded.next(this.ingredients.slice());
  }
}
