import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ModelModule } from '../model/model.module';

import { CounterDirective } from './counter.directive';

import { StoreComponent } from './store.component';
import { CartSummaryComponent } from './cartsummary.component';
import { CartDetailComponent } from './cartdetail.component';
import { CheckoutComponent } from './checkout.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, `./assets/i18n/`, `/main.json`);
}

@NgModule({
    imports: [
        ModelModule, 
        BrowserModule, 
        FormsModule,
        RouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        StoreComponent, 
        CounterDirective, 
        CartSummaryComponent, 
        CartDetailComponent,
        CheckoutComponent
    ],
    exports: [
        StoreComponent,
        CartDetailComponent,
        CheckoutComponent,
        TranslateModule
    ]
})
export class StoreModule {}