import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_frases } from './tbc-frases.model';
import { Tbc_frasesPopupService } from './tbc-frases-popup.service';
import { Tbc_frasesService } from './tbc-frases.service';

@Component({
    selector: 'jhi-tbc-frases-delete-dialog',
    templateUrl: './tbc-frases-delete-dialog.component.html'
})
export class Tbc_frasesDeleteDialogComponent {

    tbc_frases: Tbc_frases;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_frasesService: Tbc_frasesService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_frases']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_frasesService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_frasesListModification',
                content: 'Deleted an tbc_frases'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-frases-delete-popup',
    template: ''
})
export class Tbc_frasesDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_frasesPopupService: Tbc_frasesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_frasesPopupService
                .open(Tbc_frasesDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
