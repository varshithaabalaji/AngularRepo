import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversetext'
})
export class ReversetextPipe implements PipeTransform {

  transform(inputString: any, ...args: any[]): string {
   if(!inputString){return '';}
    
   return inputString.split('').reverse().join('');
  //  return inputString;
  }

}
