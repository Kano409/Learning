import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  @Input() ingredientAdded: Ingredient;
  ingredients: Ingredient[];

  constructor(private shoppingListServiec: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListServiec.getIngredient();
    this.shoppingListServiec.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
