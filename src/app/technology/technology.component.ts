import { Component, OnInit } from '@angular/core';
import {Technology} from '../technology';
import {projects} from '../projects';
import {Project} from '../project';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  allProjects = projects;
  techNamesSet!: Set<string>;
  techNamesArray!: string[];
  selectedTech!: Technology;
  // techName!: string;
  // projectsWithTech!: string[];
  // technologyMap!: Map<string, string[]>;

  constructor() {
    this.loadTechMap();
    this.techNamesArray = Array.from(this.techNamesSet.values());
  }

  loadTechMap(): void {
    this.allProjects.forEach(project => project.technologiesUsed.forEach(tech => this.techNamesSet.add(tech)));
  }

  public onSelect(tech: Technology ): void {
    this.selectedTech = tech;
  }

}
