import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_tipo_campoService,
    Tbc_tipo_campoPopupService,
    Tbc_tipo_campoComponent,
    Tbc_tipo_campoDetailComponent,
    Tbc_tipo_campoDialogComponent,
    Tbc_tipo_campoPopupComponent,
    Tbc_tipo_campoDeletePopupComponent,
    Tbc_tipo_campoDeleteDialogComponent,
    tbc_tipo_campoRoute,
    tbc_tipo_campoPopupRoute,
    Tbc_tipo_campoResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_tipo_campoRoute,
    ...tbc_tipo_campoPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_tipo_campoComponent,
        Tbc_tipo_campoDetailComponent,
        Tbc_tipo_campoDialogComponent,
        Tbc_tipo_campoDeleteDialogComponent,
        Tbc_tipo_campoPopupComponent,
        Tbc_tipo_campoDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_tipo_campoComponent,
        Tbc_tipo_campoDialogComponent,
        Tbc_tipo_campoPopupComponent,
        Tbc_tipo_campoDeleteDialogComponent,
        Tbc_tipo_campoDeletePopupComponent,
    ],
    providers: [
        Tbc_tipo_campoService,
        Tbc_tipo_campoPopupService,
        Tbc_tipo_campoResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_tipo_campoModule {}
