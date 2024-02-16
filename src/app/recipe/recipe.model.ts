import {Ingredients} from '../shared/ingredients.model';
export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredients[];
  constructor(name:string, desc:string, image:string, ingredient:Ingredients[]){
    this.name=name;
    this.description=desc;
    this.imagePath=image;
    this.ingredients= ingredient;
  }
}
