import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_frases_opcoes } from './tbc-frases-opcoes.model';
import { Tbc_frases_opcoesPopupService } from './tbc-frases-opcoes-popup.service';
import { Tbc_frases_opcoesService } from './tbc-frases-opcoes.service';

@Component({
    selector: 'jhi-tbc-frases-opcoes-delete-dialog',
    templateUrl: './tbc-frases-opcoes-delete-dialog.component.html'
})
export class Tbc_frases_opcoesDeleteDialogComponent {

    tbc_frases_opcoes: Tbc_frases_opcoes;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_frases_opcoesService: Tbc_frases_opcoesService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_frases_opcoes']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_frases_opcoesService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_frases_opcoesListModification',
                content: 'Deleted an tbc_frases_opcoes'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-frases-opcoes-delete-popup',
    template: ''
})
export class Tbc_frases_opcoesDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_frases_opcoesPopupService: Tbc_frases_opcoesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_frases_opcoesPopupService
                .open(Tbc_frases_opcoesDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
