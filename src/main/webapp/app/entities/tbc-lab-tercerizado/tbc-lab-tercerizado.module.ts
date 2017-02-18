import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_lab_tercerizadoService,
    Tbc_lab_tercerizadoPopupService,
    Tbc_lab_tercerizadoComponent,
    Tbc_lab_tercerizadoDetailComponent,
    Tbc_lab_tercerizadoDialogComponent,
    Tbc_lab_tercerizadoPopupComponent,
    Tbc_lab_tercerizadoDeletePopupComponent,
    Tbc_lab_tercerizadoDeleteDialogComponent,
    tbc_lab_tercerizadoRoute,
    tbc_lab_tercerizadoPopupRoute,
    Tbc_lab_tercerizadoResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_lab_tercerizadoRoute,
    ...tbc_lab_tercerizadoPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_lab_tercerizadoComponent,
        Tbc_lab_tercerizadoDetailComponent,
        Tbc_lab_tercerizadoDialogComponent,
        Tbc_lab_tercerizadoDeleteDialogComponent,
        Tbc_lab_tercerizadoPopupComponent,
        Tbc_lab_tercerizadoDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_lab_tercerizadoComponent,
        Tbc_lab_tercerizadoDialogComponent,
        Tbc_lab_tercerizadoPopupComponent,
        Tbc_lab_tercerizadoDeleteDialogComponent,
        Tbc_lab_tercerizadoDeletePopupComponent,
    ],
    providers: [
        Tbc_lab_tercerizadoService,
        Tbc_lab_tercerizadoPopupService,
        Tbc_lab_tercerizadoResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_lab_tercerizadoModule {}
