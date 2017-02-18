import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_grupo_cliente } from './tbc-grupo-cliente.model';
import { Tbc_grupo_clientePopupService } from './tbc-grupo-cliente-popup.service';
import { Tbc_grupo_clienteService } from './tbc-grupo-cliente.service';

@Component({
    selector: 'jhi-tbc-grupo-cliente-delete-dialog',
    templateUrl: './tbc-grupo-cliente-delete-dialog.component.html'
})
export class Tbc_grupo_clienteDeleteDialogComponent {

    tbc_grupo_cliente: Tbc_grupo_cliente;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_grupo_clienteService: Tbc_grupo_clienteService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_grupo_cliente']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_grupo_clienteService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_grupo_clienteListModification',
                content: 'Deleted an tbc_grupo_cliente'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-grupo-cliente-delete-popup',
    template: ''
})
export class Tbc_grupo_clienteDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_grupo_clientePopupService: Tbc_grupo_clientePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_grupo_clientePopupService
                .open(Tbc_grupo_clienteDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
