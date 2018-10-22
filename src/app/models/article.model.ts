export class Article {
  public published: boolean = true;
  constructor(public date: string, public title: string, public image: string, public content: string, public category: string, public author: string) {};
}
