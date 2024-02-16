import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private slService:ShoppingListService) { }

  ingredients:Ingredients[];
  ngOnInit(): void {
    this.ingredients= this.slService.getIngredient();
    this.slService.IngredientChanged.subscribe((ingredient:Ingredients[])=>{
      this.ingredients=ingredient;
    })
   }

  addNewIngredient(newIngredient){
    //this.ingredients.push(newIngredient);
  }
}
