import { Component, OnInit } from '@angular/core';
import Card from '../models/Card'
import User from '../models/User'

@Component({
  selector: 'app-app-card-item',
  templateUrl: './app-card-item.component.html',
  styleUrls: ['./app-card-item.component.css']
})
export class AppCardItemComponent implements OnInit, Card {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User;


  constructor() { }

  ngOnInit() {
  }

}
