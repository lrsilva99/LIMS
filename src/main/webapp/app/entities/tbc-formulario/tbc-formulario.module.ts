import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_formularioService,
    Tbc_formularioPopupService,
    Tbc_formularioComponent,
    Tbc_formularioDetailComponent,
    Tbc_formularioDialogComponent,
    Tbc_formularioPopupComponent,
    Tbc_formularioDeletePopupComponent,
    Tbc_formularioDeleteDialogComponent,
    tbc_formularioRoute,
    tbc_formularioPopupRoute,
    Tbc_formularioResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_formularioRoute,
    ...tbc_formularioPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_formularioComponent,
        Tbc_formularioDetailComponent,
        Tbc_formularioDialogComponent,
        Tbc_formularioDeleteDialogComponent,
        Tbc_formularioPopupComponent,
        Tbc_formularioDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_formularioComponent,
        Tbc_formularioDialogComponent,
        Tbc_formularioPopupComponent,
        Tbc_formularioDeleteDialogComponent,
        Tbc_formularioDeletePopupComponent,
    ],
    providers: [
        Tbc_formularioService,
        Tbc_formularioPopupService,
        Tbc_formularioResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_formularioModule {}
