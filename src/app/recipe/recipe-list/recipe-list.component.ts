import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe (
      'Steak',
      'Good steak!',
      'https://i.ytimg.com/vi/nsw0Px-Pho8/maxresdefault.jpg'),
    new Recipe (
      'Creamy Mushroom Pasta',
      'Good Pasta!',
      'https://i.ytimg.com/vi/nsw0Px-Pho8/maxresdefault.jpg',
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
