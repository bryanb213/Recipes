import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAdd(form: NgForm) {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    this.shService.ingredientAdded(newIng);
  }


}
