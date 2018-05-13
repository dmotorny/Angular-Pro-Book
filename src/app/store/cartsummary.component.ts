import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
    selector: 'cart-summary',
    moduleId: module.id,
    templateUrl: './cartsummary.component.html',
    styleUrls: ['./cartsummary.component.scss']
})
export class CartSummaryComponent {
    constructor(public cart: Cart) {}
}