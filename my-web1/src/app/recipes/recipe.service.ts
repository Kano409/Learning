import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.nehascookbook.com/wp-content/uploads/2021/02/Chinese-samosa-WS.jpg',
      [new Ingredient('dosa', 10), new Ingredient('upma', 2)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://www.nehascookbook.com/wp-content/uploads/2021/02/Chinese-samosa-WS.jpg',
      [new Ingredient('bhat', 1), new Ingredient('dal', 20)]
    ),
  ];

  public get Recipes() {
    return this.recipes.slice(); // return a copy
  }

  addIngredientToShoppingList(ingredient : Ingredient){

  }
}
