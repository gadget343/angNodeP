/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Product = (function () {
    function Product(name, id) {
        this.name = name;
        this.type = id;
    }
    return Product;
})();
var ProductFilter = (function () {
    function ProductFilter() {
        this.onKeyUp = function (event) {
            this.filter.next(event);
        };
        this.filter = new angular2_1.EventEmitter();
    }
    ProductFilter = __decorate([
        angular2_1.Component({
            selector: 'product-filter',
            events: ['filter']
        }),
        angular2_1.View({
            templateUrl: 'views/plugins/productFilter.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductFilter);
    return ProductFilter;
})();
// <ProductList component>
var ProductList = (function () {
    function ProductList() {
        this.onFilter = function (event) {
            console.log(event);
        };
        this.products = [new Product('prd1', 1), new Product('prd2', 1), new Product('prd3', 2)];
    }
    ProductList = __decorate([
        angular2_1.Component({
            selector: 'product-list'
        }),
        angular2_1.View({
            directives: [ProductFilter, angular2_1.NgFor],
            templateUrl: 'views/components/products.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductList);
    return ProductList;
})();
// </ProductList component>
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [ProductList, angular2_1.NgFor],
            templateUrl: 'views/index.html'
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
angular2_1.bootstrap(App);
