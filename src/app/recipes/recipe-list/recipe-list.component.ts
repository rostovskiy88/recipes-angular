import { Component } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg'),
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/chole-recipe.jpg'),
  ];

}
