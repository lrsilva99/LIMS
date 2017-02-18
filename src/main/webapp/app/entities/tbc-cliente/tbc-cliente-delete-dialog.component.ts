import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_cliente } from './tbc-cliente.model';
import { Tbc_clientePopupService } from './tbc-cliente-popup.service';
import { Tbc_clienteService } from './tbc-cliente.service';

@Component({
    selector: 'jhi-tbc-cliente-delete-dialog',
    templateUrl: './tbc-cliente-delete-dialog.component.html'
})
export class Tbc_clienteDeleteDialogComponent {

    tbc_cliente: Tbc_cliente;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_clienteService: Tbc_clienteService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_cliente']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_clienteService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_clienteListModification',
                content: 'Deleted an tbc_cliente'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-cliente-delete-popup',
    template: ''
})
export class Tbc_clienteDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_clientePopupService: Tbc_clientePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_clientePopupService
                .open(Tbc_clienteDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
