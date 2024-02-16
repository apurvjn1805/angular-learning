import { Injectable,EventEmitter } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  IngredientChanged = new EventEmitter<Ingredients[]>();
  ingredients:Ingredients[]=[
    new Ingredients('Fennel', 12),
    new Ingredients('Curd', 25),
  ];

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredients){
    this.ingredients.push(ingredient);
    this.IngredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredient:Ingredients[]){
  this.ingredients.push(...ingredient);
  this.IngredientChanged.emit(this.ingredients.slice());
  }
  constructor() { }
}
