import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { StatusPipe } from './status.pipe';
import { CategoryPipe } from './category.pipe';
import { routing } from '../../app.routing';


import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    EditArticleComponent,
    NewArticleComponent,
    StatusPipe,
    CategoryPipe,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
