export interface Project {
  projectId: number;
  codeUrl: string;
  additionalCodeUrl: string;
  title: string;
  description: string;
  hostedUrl: string;
  mainImagePath: string[];
  technologiesUsed: string[];
  urlImagesForTechnologies: string[];
}
