import { Component, OnInit, ViewChild } from '@angular/core';
//import { Project } from './Project';
import { ProjectService } from './project.service';
@Component({
  selector: 'app-user',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
 
  projects = [];

  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.getAllProjects();
  }
  getAllProjects() {
    this.projectService.getAllUsersService().subscribe((data: any[]) => {
      console.log(data);
      this.projects = data;
    });
  }
}