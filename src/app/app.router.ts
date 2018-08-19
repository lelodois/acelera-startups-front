import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/home/home.component';

export const APP_ROUTERS: ModuleWithProviders =
    RouterModule.forRoot(
        [
            {
                path: '', component: HomeComponent
            }
        ], {useHash: false}
    );