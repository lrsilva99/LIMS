import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_plano_teste_analise } from './tbc-plano-teste-analise.model';
import { Tbc_plano_teste_analisePopupService } from './tbc-plano-teste-analise-popup.service';
import { Tbc_plano_teste_analiseService } from './tbc-plano-teste-analise.service';

@Component({
    selector: 'jhi-tbc-plano-teste-analise-delete-dialog',
    templateUrl: './tbc-plano-teste-analise-delete-dialog.component.html'
})
export class Tbc_plano_teste_analiseDeleteDialogComponent {

    tbc_plano_teste_analise: Tbc_plano_teste_analise;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_plano_teste_analiseService: Tbc_plano_teste_analiseService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_plano_teste_analise']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_plano_teste_analiseService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_plano_teste_analiseListModification',
                content: 'Deleted an tbc_plano_teste_analise'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-plano-teste-analise-delete-popup',
    template: ''
})
export class Tbc_plano_teste_analiseDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_plano_teste_analisePopupService: Tbc_plano_teste_analisePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_plano_teste_analisePopupService
                .open(Tbc_plano_teste_analiseDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
