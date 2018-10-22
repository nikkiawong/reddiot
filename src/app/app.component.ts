import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reddiot';
  masterArticleList: Article[] = [
    new Article(true, 'Cliffs of Moher, Ireland [4126x5158][OC]', './assets/img/modher-ireland.jpg', 'I had windburn on my eyes for two weeks after hiking this thing for three hours. Moisturize y’all, that wind will dry your face out.', 'EarthPorn', '@ihaveadarksoul', '10/24/2018'),
    new Article(true, 'When did Americans stop having British accents and how much of that accent remains?', 'false', "I heard today that Ben Franklin had a British accent? That got me thinking, since I live in Philly, how many of the earlier inhabitants of this city had British accents and when/how did that change? And if anyone of that remains, because the Philadelphia accent and some of it's neighboring accents (Delaware county, parts of new jersey) have pronounciations that seem similar to a cockney accent or something...", 'history', '@orihh', '10/20/2018')
  ];

  selectedArticle = null;

  editArticle(clickedArticle) {
    this.selectedArticle = clickedArticle;
  }

  finishedEditing() {
    this.selectedArticle = null;
  }
}
