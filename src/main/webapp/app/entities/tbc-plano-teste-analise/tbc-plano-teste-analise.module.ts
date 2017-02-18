import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_plano_teste_analiseService,
    Tbc_plano_teste_analisePopupService,
    Tbc_plano_teste_analiseComponent,
    Tbc_plano_teste_analiseDetailComponent,
    Tbc_plano_teste_analiseDialogComponent,
    Tbc_plano_teste_analisePopupComponent,
    Tbc_plano_teste_analiseDeletePopupComponent,
    Tbc_plano_teste_analiseDeleteDialogComponent,
    tbc_plano_teste_analiseRoute,
    tbc_plano_teste_analisePopupRoute,
    Tbc_plano_teste_analiseResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_plano_teste_analiseRoute,
    ...tbc_plano_teste_analisePopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_plano_teste_analiseComponent,
        Tbc_plano_teste_analiseDetailComponent,
        Tbc_plano_teste_analiseDialogComponent,
        Tbc_plano_teste_analiseDeleteDialogComponent,
        Tbc_plano_teste_analisePopupComponent,
        Tbc_plano_teste_analiseDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_plano_teste_analiseComponent,
        Tbc_plano_teste_analiseDialogComponent,
        Tbc_plano_teste_analisePopupComponent,
        Tbc_plano_teste_analiseDeleteDialogComponent,
        Tbc_plano_teste_analiseDeletePopupComponent,
    ],
    providers: [
        Tbc_plano_teste_analiseService,
        Tbc_plano_teste_analisePopupService,
        Tbc_plano_teste_analiseResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_plano_teste_analiseModule {}
