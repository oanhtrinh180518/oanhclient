import { Routes } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { Conversation, DataService} from '../data.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  [x: string]: any;

tasks: any;
currentConversation!: Conversation[];

// @Input() currentConversation={};
  constructor(private dataService: DataService) {}



  ngOnInit(): void {
    this.displayListTask();
  }

}
