import { Pipe, PipeTransform } from '@angular/core';
import { accountHolder } from './account/account.model';
@Pipe({
  name: 'count',
  standalone: true
})
export class CountPipe implements PipeTransform {

  transform(accounts:accountHolder[],type:string):number {
    return 10;
  }

}
