import { Component } from '@angular/core';


// custom decorator
function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value; // save a reference to the original method

    // NOTE: Do not use arrow syntax here. Use a function expression in
    // order to use the correct value of `this` in this method (see notes below)
    descriptor.value = function(...args: any[]) {
        console.log('The method args are: ' + JSON.stringify(args)); // pre
        let result = originalMethod.apply(this, args);               // run and store the result
        console.log('The return value is: ' + result);               // post
        return result;                                               // return the result of the original method
    };

    return descriptor;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: []
})
export class AppComponent {
  title = 'app works!';
  bookTitle = 'Testitest';

  @log
  handleClick(data: String) {
    console.log('Book title clicked:', data);
  }
}
