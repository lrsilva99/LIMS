import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_instituicao } from './tbc-instituicao.model';
import { Tbc_instituicaoPopupService } from './tbc-instituicao-popup.service';
import { Tbc_instituicaoService } from './tbc-instituicao.service';

@Component({
    selector: 'jhi-tbc-instituicao-delete-dialog',
    templateUrl: './tbc-instituicao-delete-dialog.component.html'
})
export class Tbc_instituicaoDeleteDialogComponent {

    tbc_instituicao: Tbc_instituicao;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_instituicao']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_instituicaoService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_instituicaoListModification',
                content: 'Deleted an tbc_instituicao'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-instituicao-delete-popup',
    template: ''
})
export class Tbc_instituicaoDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_instituicaoPopupService: Tbc_instituicaoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_instituicaoPopupService
                .open(Tbc_instituicaoDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
