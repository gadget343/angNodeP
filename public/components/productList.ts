/// <reference path="../node_modules/typings/angular2/angular2.d.ts" />

import { Component, View, EventEmitter, NgFor, NgIf, bootstrap } from 'angular2/angular2';

class Product {
  name: string;
  type: number;
  constructor(name: string, id: number) {
    console.log('product constructor');
    this.name = name;
    this.type = id;
  }
}

@Component({
  selector: 'product-filter',
  events: ['filter']
})
@View({
  templateUrl: 'views/plugins/productFilter.html'
})

class ProductFilter {
  filter: EventEmitter;
  typeId: number;
  
  constructor() {
    this.filter = new EventEmitter();
  } 

  onKeyUp = function(event) {
    console.log('key Up')
    this.filter.next({value: "Hello World!"});
  }
}

@Component({
  selector: 'product-list'
})

@View({
  directives: [ProductFilter, NgFor, NgIf],
  templateUrl: 'views/components/products.html'
})

export class ProductList {
  products: Array<Product>;
  searchWordCount: number;
  constructor() {
    this.products = [new Product('prd1', 1),new Product('prd2', 1),new Product('prd3', 2)];
  }
  onFilter = function(event) {
    console.log('ProductList filter event')
    this.searchWordCount = event.value.length;
  }
}
 
