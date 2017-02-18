import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_sub_grupoService,
    Tbc_sub_grupoPopupService,
    Tbc_sub_grupoComponent,
    Tbc_sub_grupoDetailComponent,
    Tbc_sub_grupoDialogComponent,
    Tbc_sub_grupoPopupComponent,
    Tbc_sub_grupoDeletePopupComponent,
    Tbc_sub_grupoDeleteDialogComponent,
    tbc_sub_grupoRoute,
    tbc_sub_grupoPopupRoute,
    Tbc_sub_grupoResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_sub_grupoRoute,
    ...tbc_sub_grupoPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_sub_grupoComponent,
        Tbc_sub_grupoDetailComponent,
        Tbc_sub_grupoDialogComponent,
        Tbc_sub_grupoDeleteDialogComponent,
        Tbc_sub_grupoPopupComponent,
        Tbc_sub_grupoDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_sub_grupoComponent,
        Tbc_sub_grupoDialogComponent,
        Tbc_sub_grupoPopupComponent,
        Tbc_sub_grupoDeleteDialogComponent,
        Tbc_sub_grupoDeletePopupComponent,
    ],
    providers: [
        Tbc_sub_grupoService,
        Tbc_sub_grupoPopupService,
        Tbc_sub_grupoResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_sub_grupoModule {}
