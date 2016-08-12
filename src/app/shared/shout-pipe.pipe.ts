import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shoutPipe'
})
export class ShoutPipePipe implements PipeTransform {

  transform(value: string, prefix = '', suffix = ''): any {
    if (!value) {
      return;
    }

    return `${prefix}${value}${suffix}`.toUpperCase();
  }

}
