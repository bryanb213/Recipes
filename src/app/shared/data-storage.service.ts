import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://angularrecipe-b5d1c.firebaseio.com/recipes.json', recipes).subscribe(res => {
            console.log(res);
        });
    }
    fetchRecipes(){
        this.http.get('https://angularrecipe-b5d1c.firebaseio.com/recipes.json').subscribe(res => {
            console.log(res);
        });
    }
}
