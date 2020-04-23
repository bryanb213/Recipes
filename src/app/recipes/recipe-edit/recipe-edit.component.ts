import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((p: Params) => {
      // console.log(p);
      this.id = p['id'];
      this.editMode = p['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.recipeForm)
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients'));
  }

  private initForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    let recipeIng = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.desc;
      recipeImage = recipe.imgPath;

      if (recipe.ingredients) {
        for ( let i of recipe.ingredients) {
          recipeIng.push(
            new FormGroup({
              'name': new FormControl(i.name),
              'amount': new FormControl(i.amount),
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imgPath': new FormControl(recipeImage),
      'desc': new FormControl(recipeDescription),
      'ingredients': recipeIng
    });
    
  }
}
