import {Project} from './project';

export const projects: Project[] = [
  {
    projectId: 1,
    codeUrl: 'https://github.com/cmmsnow/weather-app',
    additionalCodeUrl: '',
    title: 'Weather Web App',
    description: 'This project calls an API to get real-time weather based on the user’s current location or based on a city input by the user in the search feature.',
    hostedUrl: 'https://unruffled-gates-5c87f2.netlify.app/',
    mainImagePath: ['assets/weather-web-app.png'],
    technologiesUsed: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Axios', 'API "get" requests'],
    urlImagesForTechnologies: ['']
  },
  {
    projectId: 2,
    codeUrl: 'https://github.com/cmmsnow/you-are-ell',
    additionalCodeUrl: '',
    title: 'You Are Ell',
    description: 'Written in Java and utilizing JSON, this lab project uses the Zip Code student API to both access and create new users and messages on the student server. The user can also edit old user information created by different Zip Code students and alum.',
    hostedUrl: '',
    mainImagePath: ['assets/youareell.png'],
    technologiesUsed: ['MVC classes', 'CRUD methods', 'API interaction', 'Java class structure'],
    urlImagesForTechnologies: ['']
  },
  {
    projectId: 3,
    codeUrl: 'https://github.com/cmmsnow/casino',
    additionalCodeUrl: '',
    title: 'Casino',
    description: 'Worked in a team of five to develop a Java application that simulates a casino environment with 2 card and 2 dice games. Responsible for co-writing the three main utility classes with another team member, and debugging games. Personally wrote the Dice class and all test cases for Utilities, Players, and Game Supplies.',
    hostedUrl: '',
    mainImagePath: ['assets/casino.png'],
    technologiesUsed: ['Interfaces', 'Enums', 'Wrapper classes', 'Game logic', 'JUnit testing'],
    urlImagesForTechnologies: ['']
  },
  {
    projectId: 4,
    codeUrl: 'https://github.com/cmmsnow/cross-stitch-code',
    additionalCodeUrl: 'https://github.com/cmmsnow/dmc-threads',
    title: 'Cross Stitch Program',
    description: 'In development: program that accepts image input and creates a cross stitch pattern from it. Currently a data structure that holds cross stitch patterns by color per pixel, with methods to retrieve and change the pixel color data, and estimate thread needed. Currently using Spring Boot to interact with my database of ~470 DMC thread colors. Next steps are to deploy this database with AWS RDS, and continue developing the Angular front end.',
    hostedUrl: '',
    mainImagePath: ['assets/cross-stitch.png'],
    technologiesUsed: ['Java class structuring, data manipulation, enums', 'Spring Boot', 'Angular', 'SQL database creation and manipulation'],
    urlImagesForTechnologies: ['']
  },
  {
    projectId: 5,
    codeUrl: 'https://github.com/cmmsnow/ziptube-front-end',
    additionalCodeUrl: '',
    title: 'ZipTube App',
    description: 'Created by a team of 5, this video app mimics features of websites like YouTube or Vimeo. It has an Angular front end and Spring Boot back end, with the video database stored on AWS S3.  Involved in pair programming the back end User and Comments MVC classes, and responsible for setting up the front end Angular structure. Personally responsible for many of the main structural components in Angular including Videos, MyVideos, and the Footer. Pair coded many of the other front end components with group members.',
    hostedUrl: '',
    mainImagePath: ['assets/ziptube01.png', 'assets/ziptube02.png', 'assets/ziptube03.png', 'assets/ziptube04.png', 'assets/ziptube05.png', 'assets/ziptube06.png', 'assets/ziptube07.png'],
    technologiesUsed: ['Angular', 'Typescript', 'HTML', 'CSS', 'Bootstrap', 'JWT', 'CRUD', 'Spring Boot', 'AWS S3 cloud storage'],
    urlImagesForTechnologies: ['']
  }
];

// https://ziptubelibrary.herokuapp.com/
