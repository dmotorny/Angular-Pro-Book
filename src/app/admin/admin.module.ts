import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

let routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    { path: 'main', component: AdminComponent },
    { path: '**', redirectTo: 'auth' }
]);

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, `./assets/i18n/`, `/admin.json`);
}

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        routing,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule {}