import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_frasesService,
    Tbc_frasesPopupService,
    Tbc_frasesComponent,
    Tbc_frasesDetailComponent,
    Tbc_frasesDialogComponent,
    Tbc_frasesPopupComponent,
    Tbc_frasesDeletePopupComponent,
    Tbc_frasesDeleteDialogComponent,
    tbc_frasesRoute,
    tbc_frasesPopupRoute,
    Tbc_frasesResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_frasesRoute,
    ...tbc_frasesPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_frasesComponent,
        Tbc_frasesDetailComponent,
        Tbc_frasesDialogComponent,
        Tbc_frasesDeleteDialogComponent,
        Tbc_frasesPopupComponent,
        Tbc_frasesDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_frasesComponent,
        Tbc_frasesDialogComponent,
        Tbc_frasesPopupComponent,
        Tbc_frasesDeleteDialogComponent,
        Tbc_frasesDeletePopupComponent,
    ],
    providers: [
        Tbc_frasesService,
        Tbc_frasesPopupService,
        Tbc_frasesResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_frasesModule {}
