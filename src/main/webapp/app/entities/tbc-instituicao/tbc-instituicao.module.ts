import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LimsSharedModule } from '../../shared';

import {
    Tbc_instituicaoService,
    Tbc_instituicaoPopupService,
    Tbc_instituicaoComponent,
    Tbc_instituicaoDetailComponent,
    Tbc_instituicaoDialogComponent,
    Tbc_instituicaoPopupComponent,
    Tbc_instituicaoDeletePopupComponent,
    Tbc_instituicaoDeleteDialogComponent,
    tbc_instituicaoRoute,
    tbc_instituicaoPopupRoute,
    Tbc_instituicaoResolvePagingParams,
} from './';

let ENTITY_STATES = [
    ...tbc_instituicaoRoute,
    ...tbc_instituicaoPopupRoute,
];

@NgModule({
    imports: [
        LimsSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        Tbc_instituicaoComponent,
        Tbc_instituicaoDetailComponent,
        Tbc_instituicaoDialogComponent,
        Tbc_instituicaoDeleteDialogComponent,
        Tbc_instituicaoPopupComponent,
        Tbc_instituicaoDeletePopupComponent,
    ],
    entryComponents: [
        Tbc_instituicaoComponent,
        Tbc_instituicaoDialogComponent,
        Tbc_instituicaoPopupComponent,
        Tbc_instituicaoDeleteDialogComponent,
        Tbc_instituicaoDeletePopupComponent,
    ],
    providers: [
        Tbc_instituicaoService,
        Tbc_instituicaoPopupService,
        Tbc_instituicaoResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsTbc_instituicaoModule {}
