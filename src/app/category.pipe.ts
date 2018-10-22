import {Pipe, PipeTransform} from '@angular/core';
import {Article} from './models/article.model';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Article[], categoryDesired) {
    var output: Article[] = [];
    if(categoryDesired === "EarthPorn") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "EarthPorn") {
          output.push(input[i]);
          console.log(output);
        }
      }
      return output;
      } else if (categoryDesired === "History") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === "History") {
            output.push(input[i]);
        }
      }
      return output;
      } else if (categoryDesired === "Gaming") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category === "Gaming") {
            output.push(input[i]);
        }
      }
      return output;
    } else if (categoryDesired === "WorldNews") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "WorldNews") {
          output.push(input[i]);
      }
    }
      return output;
    } else if (categoryDesired === "Pics") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Pics") {
          output.push(input[i]);
      }
    }
return output;
    } else {
      return input;
    }
  }
}
