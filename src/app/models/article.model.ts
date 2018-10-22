export class Article {
  public published: boolean = true;
  public date: string = '10/24/18';
  constructor(public title: string, public image: string, public content: string, public category: string, public author: string) {};
}
