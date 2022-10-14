import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'odd'
})
export class OldPipePipe implements PipeTransform {

  transform(param: number[]): number[] {
    let result = [];
    for(let i=0; i<param.length;i++){
      if(param[i]%2==1){
        result.push(param[i]);
      }
    }
    return result;
  }

}
