/// <reference path="typings/angular2/angular2.d.ts" />

import { Component, View, EventEmitter, NgFor, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'product-row',
	properties: ['product'],
	events: ['click']
	})
	
@View({
	directives: [ProductImage, ProductDepartment, PriceDisplay],
	template: `<divclass="product-row cf"(click)="clicked()">
	<product-image[product]="product"></product-image><divclass="product-info">
	<divclass="product-sku">SKU #{{ product.sku }}</div>
	<divclass="product-name">{{ product.name }}</div>
	<product-department[product]="product">
	</product-department></div><price-display[price]="product.price"></price-display></div>`
	})
	
class ProductRow {
	product: Product;
	click: EventEmitter;
	
	constructor() {
		this.click = new EventEmitter();
	}
	clicked() {
		this.click.next(this.product);
	}
}
	@Component({
		selector: 'product-row',
		properties: ['product'],
		events: ['click']})
		
	@View({
		template: `<divclass="product-row"(click)="clicked()">
		<divproduct-image[product]="product"></div>
		<divproduct-department[department]="product.department_id"></div>
		<divprice-display[price]="product.price"></div></div>`,
		
	directives: [ProductImage, ProductDepartment, PriceDisplay]
	})
	
	class ProductRow {
		product: Product;
	click: EventEmitter;
	constructor() {
		this.click = new EventEmitter();}
		clicked() {this.click.next(this.product);
			}
			}