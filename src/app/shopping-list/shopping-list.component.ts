import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('apple', 5),
  //   new Ingredient('banana', 2),
  // ];
  ingredients: Ingredient[];
  private ingChangeSub: Subscription;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingChangeSub =  this.shoppingService.ingAdded.subscribe((ing: Ingredient[]) => {
      this.ingredients = ing;
    });
  }

  onEditIng(index: number) {
    this.shoppingService.editIng.next(index);
  }

  ngOnDestroy(): void {
    this.ingChangeSub.unsubscribe();
  }
}
