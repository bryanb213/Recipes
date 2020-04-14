import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Veggie Burger', 'Burger made from vegetables', 'https://media.npr.org/assets/img/2019/02/08/vegan-burger-1_custom-69b8aeff56bf284ed1349c739dc345cf0336364d-s1200-c85.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(rec: Recipe) {
    this.recipeWasSelected.emit(rec);
  }

}
