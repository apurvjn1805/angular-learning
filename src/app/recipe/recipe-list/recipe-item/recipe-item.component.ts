import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';
import {RecipeService} from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() RecipeItem:Recipe;
  //@Output() recipeSelected= new EventEmitter<void>(); output emitter
  constructor(private recipeService:RecipeService ) { }

  ngOnInit(): void {

  }
  onSelected(){

    //this.recipeSelected.emit(); output emitter now done using service below
    this.recipeService.recipeSelected.emit(this.RecipeItem);
  }

}
