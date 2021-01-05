import {Project} from './project';

export const projects: Project[] = [
  {
    projectId: 1,
    codeUrl: 'https://github.com/cmmsnow/weather-app',
    title: 'Weather Web App',
    description: 'This project calls an API to get real-time weather based on the user’s current location or based on a city input by the user in the search feature.',
    mainImagePath: '../../assets/weather-web-app.png',
    technologiesUsed: [''],
    urlImagesForTechnologies: ['']
  },
  {
    projectId: 2,
    codeUrl: 'https://github.com/cmmsnow/casino',
    title: 'Casino',
    description: 'Java application that simulates a casino environment with 2 card and 2 dice games. Utilizes interfaces, enums, and demonstrates use of wrapper classes.',
    mainImagePath: '../../assets/casino.png',
    technologiesUsed: [''],
    urlImagesForTechnologies: ['']
  },
  {
    projectId: 3,
    codeUrl: 'https://github.com/cmmsnow/cross-stitch-code',
    title: 'Cross Stitch Pattern',
    description: 'Data structure to hold cross stitch patterns by pixel, with methods to retrieve and change the pixel color data, and estimate thread needed.',
    mainImagePath: '../../assets/cross-stitch.png',
    technologiesUsed: [''],
    urlImagesForTechnologies: ['']
  }
];
