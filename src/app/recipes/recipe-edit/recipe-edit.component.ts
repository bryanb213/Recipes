import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
      this.id = p.id;
      this.editMode = p.id != null;
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern('[1-9]*')
        ])
      })
    );
  }

  getControls() {
    return (this.recipeForm.get('ingredients') as FormArray);
  }

  private initForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDescription = '';
    const recipeIng = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.desc;
      recipeImage = recipe.imgPath;

      if (recipe['ingredients']) {
        for ( const i of recipe.ingredients) {
          recipeIng.push(
            new FormGroup({
              name: new FormControl(i.name, Validators.required),
              amount: new FormControl(i.amount, [
                Validators.required,
                Validators.pattern('[1-9]*')
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imgPath: new FormControl(recipeImage, Validators.required),
      desc: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIng
    });
  }
}
