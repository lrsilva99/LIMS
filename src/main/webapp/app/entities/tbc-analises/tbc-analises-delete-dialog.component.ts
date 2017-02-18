import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_analises } from './tbc-analises.model';
import { Tbc_analisesPopupService } from './tbc-analises-popup.service';
import { Tbc_analisesService } from './tbc-analises.service';

@Component({
    selector: 'jhi-tbc-analises-delete-dialog',
    templateUrl: './tbc-analises-delete-dialog.component.html'
})
export class Tbc_analisesDeleteDialogComponent {

    tbc_analises: Tbc_analises;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_analisesService: Tbc_analisesService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_analises']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_analisesService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_analisesListModification',
                content: 'Deleted an tbc_analises'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-analises-delete-popup',
    template: ''
})
export class Tbc_analisesDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_analisesPopupService: Tbc_analisesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_analisesPopupService
                .open(Tbc_analisesDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
