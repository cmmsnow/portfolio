import {Component, OnInit} from '@angular/core';
import { projects } from '../projects';
import { Project } from '../project';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  projects = projects;
  selectedProject!: Project;

  constructor() {
  }

  ngOnInit(): void {
    this.onSelect(this.projects[this.projects.length - 1]);
  }

  public onSelect(project: Project ): void {
    this.selectedProject = project;
  }
}
