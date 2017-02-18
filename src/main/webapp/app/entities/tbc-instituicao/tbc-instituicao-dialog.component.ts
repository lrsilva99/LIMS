import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Tbc_instituicao } from './tbc-instituicao.model';
import { Tbc_instituicaoPopupService } from './tbc-instituicao-popup.service';
import { Tbc_instituicaoService } from './tbc-instituicao.service';
@Component({
    selector: 'jhi-tbc-instituicao-dialog',
    templateUrl: './tbc-instituicao-dialog.component.html'
})
export class Tbc_instituicaoDialogComponent implements OnInit {

    tbc_instituicao: Tbc_instituicao;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_instituicao']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_instituicao.id !== undefined) {
            this.tbc_instituicaoService.update(this.tbc_instituicao)
                .subscribe((res: Tbc_instituicao) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_instituicaoService.create(this.tbc_instituicao)
                .subscribe((res: Tbc_instituicao) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_instituicao) {
        this.eventManager.broadcast({ name: 'tbc_instituicaoListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-tbc-instituicao-popup',
    template: ''
})
export class Tbc_instituicaoPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_instituicaoPopupService: Tbc_instituicaoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_instituicaoPopupService
                    .open(Tbc_instituicaoDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_instituicaoPopupService
                    .open(Tbc_instituicaoDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
