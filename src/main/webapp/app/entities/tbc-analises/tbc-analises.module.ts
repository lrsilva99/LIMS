import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_analisesService,
    Tbc_analisesPopupService,
    Tbc_analisesComponent,
    Tbc_analisesDetailComponent,
    Tbc_analisesDialogComponent,
    Tbc_analisesPopupComponent,
    Tbc_analisesDeletePopupComponent,
    Tbc_analisesDeleteDialogComponent,
    tbc_analisesRoute,
    tbc_analisesPopupRoute,
    Tbc_analisesResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_analisesRoute,
    ...tbc_analisesPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_analisesComponent,
        Tbc_analisesDetailComponent,
        Tbc_analisesDialogComponent,
        Tbc_analisesDeleteDialogComponent,
        Tbc_analisesPopupComponent,
        Tbc_analisesDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_analisesComponent,
        Tbc_analisesDialogComponent,
        Tbc_analisesPopupComponent,
        Tbc_analisesDeleteDialogComponent,
        Tbc_analisesDeletePopupComponent,
    ],
    providers: [
        Tbc_analisesService,
        Tbc_analisesPopupService,
        Tbc_analisesResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_analisesModule {}
