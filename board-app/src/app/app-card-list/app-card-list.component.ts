import { Component, OnInit } from '@angular/core';
import CardList from '../models/CardList';
import Card from '../models/Card';

@Component({
  selector: 'app-app-card-list',
  templateUrl: './app-card-list.component.html',
  styleUrls: ['./app-card-list.component.css']
})
export class AppCardListComponent implements OnInit, CardList {
  id: string;
  name: string;
  cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
