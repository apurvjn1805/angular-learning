import { Injectable,EventEmitter } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import {Recipe} from '../recipe/recipe.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes:Recipe[]=[
    new Recipe('Test 1',
    'Desc of image 1',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredients('curd',3),
      new Ingredients('rice',2)
    ]),
    new Recipe('Test 2',
      'Desc of image 2',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredients('curd',3),
        new Ingredients('rice',2)
      ])
  ];

  getRecipes(){
    return this.recipes.slice(); ///only getting copy
  }

  addIngredient(ingredients:Ingredients[]){
    this.slService.addIngredients(ingredients);
  }
  constructor(private slService:ShoppingListService) { }
}
