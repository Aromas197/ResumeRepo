export class Project {
    title: string;
    description: string;
    webLink: string;
    imgLink: string;
    frontEnd: string;
    backEnd: string;

    constructor(title: string, description: string, webLink: string, imgLink: string, frontEnd: string, backEnd: string) {
        this.title = title;
        this.description = description;
        this.webLink = webLink;
        this.imgLink = imgLink;
        this.frontEnd = frontEnd;
        this.backEnd = backEnd;
    }
  }