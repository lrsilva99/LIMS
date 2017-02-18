import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_frases_opcoesService,
    Tbc_frases_opcoesPopupService,
    Tbc_frases_opcoesComponent,
    Tbc_frases_opcoesDetailComponent,
    Tbc_frases_opcoesDialogComponent,
    Tbc_frases_opcoesPopupComponent,
    Tbc_frases_opcoesDeletePopupComponent,
    Tbc_frases_opcoesDeleteDialogComponent,
    tbc_frases_opcoesRoute,
    tbc_frases_opcoesPopupRoute,
    Tbc_frases_opcoesResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_frases_opcoesRoute,
    ...tbc_frases_opcoesPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_frases_opcoesComponent,
        Tbc_frases_opcoesDetailComponent,
        Tbc_frases_opcoesDialogComponent,
        Tbc_frases_opcoesDeleteDialogComponent,
        Tbc_frases_opcoesPopupComponent,
        Tbc_frases_opcoesDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_frases_opcoesComponent,
        Tbc_frases_opcoesDialogComponent,
        Tbc_frases_opcoesPopupComponent,
        Tbc_frases_opcoesDeleteDialogComponent,
        Tbc_frases_opcoesDeletePopupComponent,
    ],
    providers: [
        Tbc_frases_opcoesService,
        Tbc_frases_opcoesPopupService,
        Tbc_frases_opcoesResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_frases_opcoesModule {}
