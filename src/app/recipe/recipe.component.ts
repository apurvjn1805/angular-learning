import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe/recipe.service';
import {Recipe} from '../recipe/recipe.model';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeService]
})
export class RecipeComponent implements OnInit {

  constructor(private recipeService:RecipeService ) { }
  selectedRecipe:Recipe;
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      this.selectedRecipe=recipe;
    }
    )
  }

}
