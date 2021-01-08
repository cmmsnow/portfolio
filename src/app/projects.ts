import {Project} from './project';

export const projects: Project[] = [
  {
    projectId: 1,
    codeUrl: 'https://github.com/cmmsnow/weather-app',
    title: 'Weather Web App',
    description: 'This project calls an API to get real-time weather based on the user’s current location or based on a city input by the user in the search feature.',
    hostedUrl: 'https://unruffled-gates-5c87f2.netlify.app/',
    mainImagePath: ['../../assets/weather-web-app.png'],
    technologiesUsed: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Axios', 'API "get" requests'],
    urlImagesForTechnologies: ['']
  },
  {
    projectId: 2,
    codeUrl: 'https://github.com/cmmsnow/casino',
    title: 'Casino',
    description: 'Worked in a team of five to develop a Java application that simulates a casino environment with 2 card and 2 dice games. Responsible for co-writing the three main utility classes with another team member, and debugging games. Personally wrote the Dice class and all test cases for Utilities, Players, and Game Supplies.',
    hostedUrl: '',
    mainImagePath: ['../../assets/casino.png'],
    technologiesUsed: ['Java interfaces, enums, wrapper classes', 'Game logic', 'Testing'],
    urlImagesForTechnologies: ['']
  },
  {
    projectId: 3,
    codeUrl: 'https://github.com/cmmsnow/cross-stitch-code',
    title: 'Cross Stitch Program',
    description: 'Data structure to hold cross stitch patterns by pixel, with methods to retrieve and change the pixel color data, and estimate thread needed.',
    hostedUrl: '',
    mainImagePath: ['../../assets/cross-stitch.png'],
    technologiesUsed: ['Java class structuring, data manipulation, enums'],
    urlImagesForTechnologies: ['']
  },
  {
    projectId: 4,
    codeUrl: 'https://github.com/cmmsnow/ziptube-front-end',
    title: 'ZipTube App',
    description: 'Created by a team of 5, this video app mimics features of websites like YouTube or Vimeo. It has an Angular front end and Spring Boot back end, with the video database stored on AWS S3.  Involved in pair programming the back end User and Comments MVC classes, and responsible for setting up the front end Angular structure. Personally responsible for many of the main structural components in Angular including Videos, MyVideos, and the Footer. Pair coded many of the other front end components with group members.',
    hostedUrl: '',
    mainImagePath: ['../../assets/ziptube1.png', '../../assets/ziptube2.png', '../../assets/ziptube3.png', '../../assets/ziptube4.png', '../../assets/ziptube5.png', '../../assets/ziptube6.png'],
    technologiesUsed: ['Angular', 'Typescript', 'HTML', 'CSS', 'Bootstrap', 'JWT', 'CRUD', 'Spring Boot', 'AWS S3 cloud storage'],
    urlImagesForTechnologies: ['']
  }
];
