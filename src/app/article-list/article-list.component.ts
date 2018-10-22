import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent {
  @Input() childArticleList: Article[];
  @Output() clickSender = new EventEmitter();

  filterByStatus: string = "publishedTasks";
  filterByCategory: string = "EarthPorn";

  editButtonClicked(articleToEdit: Article) {
    this.clickSender.emit(articleToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByStatus = optionFromMenu;
  }

  togglePublish(clickedArticle: Article, setStatus: boolean) {
     clickedArticle.published = setStatus;
   }

  onCategory(categoryFromMenu) {
    this.filterByCategory = categoryFromMenu;
  }

  public show:boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
