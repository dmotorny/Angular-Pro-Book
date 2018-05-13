import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    templateUrl: 'auth.component.html',
    styleUrls: ['auth.component.scss']
})
export class AuthComponent {
    public username: string;
    public password: string;
    public errorMessage: string;
    public lang = localStorage.getItem('lang');

    constructor(
        private router: Router,
        public translate: TranslateService
    ) {
        translate.addLangs(['en', 'ru', 'ua']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru|ua/) ? (this.lang == null ? browserLang : this.lang) : 'en');
    }

    authenticate(form: NgForm) {
        if (form.valid) {
            // Выполняем аутентификацию
            this.router.navigateByUrl('/admin/main');
        } else {
            this.errorMessage = 'Form Data Invalid';
        }
    }

    saveLang(lang) {
        localStorage.setItem('lang', lang);
    }
}
