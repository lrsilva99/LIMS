import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_grupo_analiseService,
    Tbc_grupo_analisePopupService,
    Tbc_grupo_analiseComponent,
    Tbc_grupo_analiseDetailComponent,
    Tbc_grupo_analiseDialogComponent,
    Tbc_grupo_analisePopupComponent,
    Tbc_grupo_analiseDeletePopupComponent,
    Tbc_grupo_analiseDeleteDialogComponent,
    tbc_grupo_analiseRoute,
    tbc_grupo_analisePopupRoute,
    Tbc_grupo_analiseResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_grupo_analiseRoute,
    ...tbc_grupo_analisePopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_grupo_analiseComponent,
        Tbc_grupo_analiseDetailComponent,
        Tbc_grupo_analiseDialogComponent,
        Tbc_grupo_analiseDeleteDialogComponent,
        Tbc_grupo_analisePopupComponent,
        Tbc_grupo_analiseDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_grupo_analiseComponent,
        Tbc_grupo_analiseDialogComponent,
        Tbc_grupo_analisePopupComponent,
        Tbc_grupo_analiseDeleteDialogComponent,
        Tbc_grupo_analiseDeletePopupComponent,
    ],
    providers: [
        Tbc_grupo_analiseService,
        Tbc_grupo_analisePopupService,
        Tbc_grupo_analiseResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_grupo_analiseModule {}
