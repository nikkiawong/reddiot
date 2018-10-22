import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { StatusPipe } from './status.pipe';
import { CategoryPipe } from './category.pipe';


import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    EditArticleComponent,
    NewArticleComponent,
    StatusPipe,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
