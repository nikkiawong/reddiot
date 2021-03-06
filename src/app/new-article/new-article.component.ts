import { Component, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {
  @Output() sendArticle = new EventEmitter();

  submitForm(date: string,title: string, content: string, author: string, image: string, category: string) {
    let today = new Date();
    date = today.toDateString();
    let newArticle: Article = new Article(date, title, image, content, category, author);
    this.sendArticle.emit(newArticle);
  }


  constructor() { }

}
