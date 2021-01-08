import { Component, OnInit } from '@angular/core';
import { Projects } from '@angular/cli/lib/config/schema';
import {Project} from '../project';
import {Technology} from '../technology';
import {projects} from '../projects';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  // @ts-ignore
  allProjects = Projects;
  selectedTech!: Technology;
  techName!: string;
  techNamesSet!: Set<string>;
  projectsWithTech!: string[];
  technologyMap!: Map<string, string[]>;

  constructor() { }

  loadTechMap(): void {
    // this.allProjects.forEach(project {string[]} => project.technologiesUsed);
    // this.allProjects.forEach()
  }
}
