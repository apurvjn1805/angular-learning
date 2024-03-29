import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  onAddShoppingList(event){

    this.recipeService.addIngredient(this.recipe.ingredients);
  }
  ngOnInit(): void {
  }

}
