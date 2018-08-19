import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {APP_ROUTERS} from './app.router';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {EventsService} from './provider/service/events.service';
import {CustomerService} from './provider/service/customer.service';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {NovaStartupComponent} from './components/nova-startup/nova-startup.component';
import {NovaEmpresaComponent} from './components/nova-empresa/nova-empresa.component';
import {ErrorInterceptorProvider} from './provider/service/errors.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports:
        [
            HttpClientModule,
            BrowserModule,
            RouterModule,
            FormsModule,
            NgxPaginationModule,
            APP_ROUTERS
        ],
    declarations:
        [
            AppComponent,
            HomeComponent,
            NovaStartupComponent,
            NovaEmpresaComponent
        ],
    exports:
        [
            HomeComponent,
            NovaStartupComponent,
            NovaEmpresaComponent
        ],

    providers:
        [
            EventsService,
            CustomerService,
            ErrorInterceptorProvider
        ],
    bootstrap:
        [
            AppComponent
        ]
})
export class AppModule {
}
