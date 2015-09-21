/// <reference path="typings/angular2/angular2.d.ts" />

import { Component, View, EventEmitter, NgFor, bootstrap} from 'angular2/angular2';

class Product {
  name: string;
  type: number;
  constructor(name: string, id: number) {
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
    this.filter.next(event);
  }
  
}



// <ProductList component>
@Component({
  selector: 'product-list'
})

@View({
  directives: [ProductFilter, NgFor],
  templateUrl: 'views/components/products.html'
})

class ProductList {
  products: Array<Product>;
  constructor() {
    this.products = [new Product('prd1', 1),new Product('prd2', 1),new Product('prd3', 2)];
  }
  onFilter = function(event) {
    console.log(event)
    
  }
}
// </ProductList component>


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