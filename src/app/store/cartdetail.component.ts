import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    templateUrl: 'cartdetail.component.html',
    styleUrls: ['cartdetail.component.scss']
})
export class CartDetailComponent {
    public symbol: any;
    public lang = localStorage.getItem('lang');

    constructor(
        public cart: Cart, 
        public translate: TranslateService
    ) {
        translate.addLangs(['en', 'ru', 'ua']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru|ua/) ? (this.lang == null ? browserLang : this.lang) : 'en');
    }

    saveLang(lang) {
        localStorage.setItem('lang', lang);
    }
}
