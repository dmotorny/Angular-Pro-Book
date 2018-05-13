import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../model/product.model';

import { ProductRepository } from '../model/product.repository';

import { Cart } from '../model/cart.model';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-store',
    moduleId: module.id,
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.scss']
})
export class StoreComponent {
    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;
    public lang = localStorage.getItem('lang');

    constructor(
        private repository: ProductRepository,
        private cart: Cart,
        private router: Router,
        public translate: TranslateService
    ) {
        translate.addLangs(['en', 'ru', 'ua']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru|ua/) ? (this.lang == null ? browserLang : this.lang) : 'en');
    }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
      return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl('/cart');
    }

    saveLang(lang) {
        localStorage.setItem('lang', lang);
    }

}
