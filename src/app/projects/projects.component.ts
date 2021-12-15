import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: "YelpCamp",
      description: "Javascript Website with Node.JS Back End",
      webLink: "https://mcfate-yelpcamp.herokuapp.com",
      imgLink: "../../assets/images/camp.png",
      frontEnd: "Javascript, Bootstrap",
      backEnd: "Node.JS, Express, MongoDB"
    },
    {
      title: "Recipe Book",
      description: "Angular Web Application with Firebase server",
      webLink: "https://mcfaterecipebook.web.app",
      imgLink: "../../assets/images/recipe.png",
      frontEnd: "Angular, Bootstrap",
      backEnd: "Firebase"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
