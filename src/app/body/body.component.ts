import { Component } from '@angular/core';
import { projects } from '../projects';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent {
  projects = projects;
}
