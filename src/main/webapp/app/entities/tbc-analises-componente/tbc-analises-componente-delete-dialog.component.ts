import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_analises_componente } from './tbc-analises-componente.model';
import { Tbc_analises_componentePopupService } from './tbc-analises-componente-popup.service';
import { Tbc_analises_componenteService } from './tbc-analises-componente.service';

@Component({
    selector: 'jhi-tbc-analises-componente-delete-dialog',
    templateUrl: './tbc-analises-componente-delete-dialog.component.html'
})
export class Tbc_analises_componenteDeleteDialogComponent {

    tbc_analises_componente: Tbc_analises_componente;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_analises_componenteService: Tbc_analises_componenteService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_analises_componente']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_analises_componenteService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_analises_componenteListModification',
                content: 'Deleted an tbc_analises_componente'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-analises-componente-delete-popup',
    template: ''
})
export class Tbc_analises_componenteDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_analises_componentePopupService: Tbc_analises_componentePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_analises_componentePopupService
                .open(Tbc_analises_componenteDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
