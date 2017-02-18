import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_plano_testeService,
    Tbc_plano_testePopupService,
    Tbc_plano_testeComponent,
    Tbc_plano_testeDetailComponent,
    Tbc_plano_testeDialogComponent,
    Tbc_plano_testePopupComponent,
    Tbc_plano_testeDeletePopupComponent,
    Tbc_plano_testeDeleteDialogComponent,
    tbc_plano_testeRoute,
    tbc_plano_testePopupRoute,
    Tbc_plano_testeResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_plano_testeRoute,
    ...tbc_plano_testePopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_plano_testeComponent,
        Tbc_plano_testeDetailComponent,
        Tbc_plano_testeDialogComponent,
        Tbc_plano_testeDeleteDialogComponent,
        Tbc_plano_testePopupComponent,
        Tbc_plano_testeDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_plano_testeComponent,
        Tbc_plano_testeDialogComponent,
        Tbc_plano_testePopupComponent,
        Tbc_plano_testeDeleteDialogComponent,
        Tbc_plano_testeDeletePopupComponent,
    ],
    providers: [
        Tbc_plano_testeService,
        Tbc_plano_testePopupService,
        Tbc_plano_testeResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_plano_testeModule {}
