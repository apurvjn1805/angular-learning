import { Component, OnInit, Output,EventEmitter, ElementRef, ViewChild } from '@angular/core';

import { Ingredients } from 'src/app/shared/ingredients.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  constructor(private slService:ShoppingListService) { }
  //@Output() newIngredient = new EventEmitter<Ingredients>();
  ngOnInit(): void {
  }

  addIngredient(){
    const nameInput = this.nameInputRef.nativeElement.value;
    const amountInput = this.amountInputRef.nativeElement.value;
    const ingredient=new Ingredients(nameInput,amountInput);
    //this.newIngredient.emit(ingredient);
    this.slService.addIngredient(ingredient);
  }
}
