import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recService.getRecipe(this.id);
    });
  }

  addRecipeToList(ingredients: Ingredient[]) {
    this.recService.addRecipeToList(this.recipe.ingredients);
  }

  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onDelete(){
    this.recService.deleteRecipe(this.id);
    this.router.navigate(['./recipes']);
  }
}
