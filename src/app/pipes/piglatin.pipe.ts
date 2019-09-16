import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {

  transform(inputString: string, ...args: any[]): string {
    if(!inputString){return '';}
    const words=inputString.trim().split(' ');
    for(let i=0;i<words.length;++i){
      words
    }
    return null;
  }

}
//return 