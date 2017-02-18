import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_tipo_cadastroService,
    Tbc_tipo_cadastroPopupService,
    Tbc_tipo_cadastroComponent,
    Tbc_tipo_cadastroDetailComponent,
    Tbc_tipo_cadastroDialogComponent,
    Tbc_tipo_cadastroPopupComponent,
    Tbc_tipo_cadastroDeletePopupComponent,
    Tbc_tipo_cadastroDeleteDialogComponent,
    tbc_tipo_cadastroRoute,
    tbc_tipo_cadastroPopupRoute,
    Tbc_tipo_cadastroResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_tipo_cadastroRoute,
    ...tbc_tipo_cadastroPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_tipo_cadastroComponent,
        Tbc_tipo_cadastroDetailComponent,
        Tbc_tipo_cadastroDialogComponent,
        Tbc_tipo_cadastroDeleteDialogComponent,
        Tbc_tipo_cadastroPopupComponent,
        Tbc_tipo_cadastroDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_tipo_cadastroComponent,
        Tbc_tipo_cadastroDialogComponent,
        Tbc_tipo_cadastroPopupComponent,
        Tbc_tipo_cadastroDeleteDialogComponent,
        Tbc_tipo_cadastroDeletePopupComponent,
    ],
    providers: [
        Tbc_tipo_cadastroService,
        Tbc_tipo_cadastroPopupService,
        Tbc_tipo_cadastroResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_tipo_cadastroModule {}
