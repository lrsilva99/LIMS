import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_plano_teste } from './tbc-plano-teste.model';
import { Tbc_plano_testePopupService } from './tbc-plano-teste-popup.service';
import { Tbc_plano_testeService } from './tbc-plano-teste.service';

@Component({
    selector: 'jhi-tbc-plano-teste-delete-dialog',
    templateUrl: './tbc-plano-teste-delete-dialog.component.html'
})
export class Tbc_plano_testeDeleteDialogComponent {

    tbc_plano_teste: Tbc_plano_teste;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_plano_testeService: Tbc_plano_testeService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_plano_teste']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_plano_testeService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_plano_testeListModification',
                content: 'Deleted an tbc_plano_teste'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-plano-teste-delete-popup',
    template: ''
})
export class Tbc_plano_testeDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_plano_testePopupService: Tbc_plano_testePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_plano_testePopupService
                .open(Tbc_plano_testeDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
