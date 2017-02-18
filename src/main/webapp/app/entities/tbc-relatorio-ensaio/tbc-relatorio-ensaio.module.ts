import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_relatorio_ensaioService,
    Tbc_relatorio_ensaioPopupService,
    Tbc_relatorio_ensaioComponent,
    Tbc_relatorio_ensaioDetailComponent,
    Tbc_relatorio_ensaioDialogComponent,
    Tbc_relatorio_ensaioPopupComponent,
    Tbc_relatorio_ensaioDeletePopupComponent,
    Tbc_relatorio_ensaioDeleteDialogComponent,
    tbc_relatorio_ensaioRoute,
    tbc_relatorio_ensaioPopupRoute,
    Tbc_relatorio_ensaioResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_relatorio_ensaioRoute,
    ...tbc_relatorio_ensaioPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_relatorio_ensaioComponent,
        Tbc_relatorio_ensaioDetailComponent,
        Tbc_relatorio_ensaioDialogComponent,
        Tbc_relatorio_ensaioDeleteDialogComponent,
        Tbc_relatorio_ensaioPopupComponent,
        Tbc_relatorio_ensaioDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_relatorio_ensaioComponent,
        Tbc_relatorio_ensaioDialogComponent,
        Tbc_relatorio_ensaioPopupComponent,
        Tbc_relatorio_ensaioDeleteDialogComponent,
        Tbc_relatorio_ensaioDeletePopupComponent,
    ],
    providers: [
        Tbc_relatorio_ensaioService,
        Tbc_relatorio_ensaioPopupService,
        Tbc_relatorio_ensaioResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_relatorio_ensaioModule {}
