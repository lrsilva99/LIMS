import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_grupo_clienteService,
    Tbc_grupo_clientePopupService,
    Tbc_grupo_clienteComponent,
    Tbc_grupo_clienteDetailComponent,
    Tbc_grupo_clienteDialogComponent,
    Tbc_grupo_clientePopupComponent,
    Tbc_grupo_clienteDeletePopupComponent,
    Tbc_grupo_clienteDeleteDialogComponent,
    tbc_grupo_clienteRoute,
    tbc_grupo_clientePopupRoute,
    Tbc_grupo_clienteResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_grupo_clienteRoute,
    ...tbc_grupo_clientePopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_grupo_clienteComponent,
        Tbc_grupo_clienteDetailComponent,
        Tbc_grupo_clienteDialogComponent,
        Tbc_grupo_clienteDeleteDialogComponent,
        Tbc_grupo_clientePopupComponent,
        Tbc_grupo_clienteDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_grupo_clienteComponent,
        Tbc_grupo_clienteDialogComponent,
        Tbc_grupo_clientePopupComponent,
        Tbc_grupo_clienteDeleteDialogComponent,
        Tbc_grupo_clienteDeletePopupComponent,
    ],
    providers: [
        Tbc_grupo_clienteService,
        Tbc_grupo_clientePopupService,
        Tbc_grupo_clienteResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_grupo_clienteModule {}
