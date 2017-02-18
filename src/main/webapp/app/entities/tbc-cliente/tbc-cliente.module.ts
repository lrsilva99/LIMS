import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_clienteService,
    Tbc_clientePopupService,
    Tbc_clienteComponent,
    Tbc_clienteDetailComponent,
    Tbc_clienteDialogComponent,
    Tbc_clientePopupComponent,
    Tbc_clienteDeletePopupComponent,
    Tbc_clienteDeleteDialogComponent,
    tbc_clienteRoute,
    tbc_clientePopupRoute,
    Tbc_clienteResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_clienteRoute,
    ...tbc_clientePopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_clienteComponent,
        Tbc_clienteDetailComponent,
        Tbc_clienteDialogComponent,
        Tbc_clienteDeleteDialogComponent,
        Tbc_clientePopupComponent,
        Tbc_clienteDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_clienteComponent,
        Tbc_clienteDialogComponent,
        Tbc_clientePopupComponent,
        Tbc_clienteDeleteDialogComponent,
        Tbc_clienteDeletePopupComponent,
    ],
    providers: [
        Tbc_clienteService,
        Tbc_clientePopupService,
        Tbc_clienteResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_clienteModule {}
