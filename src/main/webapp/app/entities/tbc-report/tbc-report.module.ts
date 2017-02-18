import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_reportService,
    Tbc_reportPopupService,
    Tbc_reportComponent,
    Tbc_reportDetailComponent,
    Tbc_reportDialogComponent,
    Tbc_reportPopupComponent,
    Tbc_reportDeletePopupComponent,
    Tbc_reportDeleteDialogComponent,
    tbc_reportRoute,
    tbc_reportPopupRoute,
    Tbc_reportResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_reportRoute,
    ...tbc_reportPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_reportComponent,
        Tbc_reportDetailComponent,
        Tbc_reportDialogComponent,
        Tbc_reportDeleteDialogComponent,
        Tbc_reportPopupComponent,
        Tbc_reportDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_reportComponent,
        Tbc_reportDialogComponent,
        Tbc_reportPopupComponent,
        Tbc_reportDeleteDialogComponent,
        Tbc_reportDeletePopupComponent,
    ],
    providers: [
        Tbc_reportService,
        Tbc_reportPopupService,
        Tbc_reportResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_reportModule {}
