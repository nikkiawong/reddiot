import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './models/article.model';

@Pipe({
  name: "status",
  pure: false
})

export class StatusPipe implements PipeTransform {

  transform(input: Article[], desiredStatus) {
    var output: Article[] = [];
    if(desiredStatus === "publishedArticles") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].published === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStatus === "unpublishedArticles") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].published === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
