import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  sub: Subscription;
  edit = false;
  editedItem: Ingredient;
  editItemIndex: number;
  constructor(private shService: ShoppingListService) { }

  ngOnInit(): void {
    this.sub = this.shService.editIng.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.edit = true;
        this.editedItem = this.shService.getIng(index);
        this.slForm.setValue({ name: this.editedItem.name, amount: this.editedItem.amount  });
      }
    );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onAdd(form: NgForm) {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    if (this.edit) {
      this.shService.updateIng(this.editItemIndex, newIng);
    } else {
      this.shService.ingredientAdded(newIng);
    }
    this.edit = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.edit = false;
  }

  onDelete() {
    this.shService.deleteIng(this.editItemIndex);
    this.onClear();
  }

}
