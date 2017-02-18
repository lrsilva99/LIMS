import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_formulario } from './tbc-formulario.model';
import { Tbc_formularioPopupService } from './tbc-formulario-popup.service';
import { Tbc_formularioService } from './tbc-formulario.service';

@Component({
    selector: 'jhi-tbc-formulario-delete-dialog',
    templateUrl: './tbc-formulario-delete-dialog.component.html'
})
export class Tbc_formularioDeleteDialogComponent {

    tbc_formulario: Tbc_formulario;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_formularioService: Tbc_formularioService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_formulario']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_formularioService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_formularioListModification',
                content: 'Deleted an tbc_formulario'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-formulario-delete-popup',
    template: ''
})
export class Tbc_formularioDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_formularioPopupService: Tbc_formularioPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_formularioPopupService
                .open(Tbc_formularioDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
