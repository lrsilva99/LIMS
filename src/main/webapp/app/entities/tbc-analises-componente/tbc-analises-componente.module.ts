import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_analises_componenteService,
    Tbc_analises_componentePopupService,
    Tbc_analises_componenteComponent,
    Tbc_analises_componenteDetailComponent,
    Tbc_analises_componenteDialogComponent,
    Tbc_analises_componentePopupComponent,
    Tbc_analises_componenteDeletePopupComponent,
    Tbc_analises_componenteDeleteDialogComponent,
    tbc_analises_componenteRoute,
    tbc_analises_componentePopupRoute,
    Tbc_analises_componenteResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_analises_componenteRoute,
    ...tbc_analises_componentePopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_analises_componenteComponent,
        Tbc_analises_componenteDetailComponent,
        Tbc_analises_componenteDialogComponent,
        Tbc_analises_componenteDeleteDialogComponent,
        Tbc_analises_componentePopupComponent,
        Tbc_analises_componenteDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_analises_componenteComponent,
        Tbc_analises_componenteDialogComponent,
        Tbc_analises_componentePopupComponent,
        Tbc_analises_componenteDeleteDialogComponent,
        Tbc_analises_componenteDeletePopupComponent,
    ],
    providers: [
        Tbc_analises_componenteService,
        Tbc_analises_componentePopupService,
        Tbc_analises_componenteResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_analises_componenteModule {}
