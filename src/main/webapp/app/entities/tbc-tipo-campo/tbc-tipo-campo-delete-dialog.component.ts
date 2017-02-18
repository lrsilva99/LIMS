import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_tipo_campo } from './tbc-tipo-campo.model';
import { Tbc_tipo_campoPopupService } from './tbc-tipo-campo-popup.service';
import { Tbc_tipo_campoService } from './tbc-tipo-campo.service';

@Component({
    selector: 'jhi-tbc-tipo-campo-delete-dialog',
    templateUrl: './tbc-tipo-campo-delete-dialog.component.html'
})
export class Tbc_tipo_campoDeleteDialogComponent {

    tbc_tipo_campo: Tbc_tipo_campo;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_tipo_campoService: Tbc_tipo_campoService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_tipo_campo']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_tipo_campoService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_tipo_campoListModification',
                content: 'Deleted an tbc_tipo_campo'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-tipo-campo-delete-popup',
    template: ''
})
export class Tbc_tipo_campoDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_tipo_campoPopupService: Tbc_tipo_campoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_tipo_campoPopupService
                .open(Tbc_tipo_campoDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
