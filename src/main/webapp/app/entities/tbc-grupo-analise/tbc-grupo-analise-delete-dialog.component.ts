import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_grupo_analise } from './tbc-grupo-analise.model';
import { Tbc_grupo_analisePopupService } from './tbc-grupo-analise-popup.service';
import { Tbc_grupo_analiseService } from './tbc-grupo-analise.service';

@Component({
    selector: 'jhi-tbc-grupo-analise-delete-dialog',
    templateUrl: './tbc-grupo-analise-delete-dialog.component.html'
})
export class Tbc_grupo_analiseDeleteDialogComponent {

    tbc_grupo_analise: Tbc_grupo_analise;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_grupo_analiseService: Tbc_grupo_analiseService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_grupo_analise']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_grupo_analiseService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_grupo_analiseListModification',
                content: 'Deleted an tbc_grupo_analise'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-grupo-analise-delete-popup',
    template: ''
})
export class Tbc_grupo_analiseDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_grupo_analisePopupService: Tbc_grupo_analisePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_grupo_analisePopupService
                .open(Tbc_grupo_analiseDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
