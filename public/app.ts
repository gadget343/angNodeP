/// <reference path="node_modules/typings/angular2/angular2.d.ts" />
/// <reference path="components/productList.ts" />


import { Component, View, EventEmitter, NgFor, NgIf, bootstrap } from 'angular2/angular2';
import { ProductList } from 'components/productList';

@Component({
  selector: 'app'
})
@View({
  directives: [ProductList, NgFor],
  templateUrl: 'views/index.html'
})

class App {
  name: string;
  count: number;
  constructor() {
    
  }
}

bootstrap(App);