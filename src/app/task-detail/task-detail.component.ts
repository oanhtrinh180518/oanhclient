import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  [x: string]: any;

tasks: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.displayListTask();
  }

}
/*

*/
