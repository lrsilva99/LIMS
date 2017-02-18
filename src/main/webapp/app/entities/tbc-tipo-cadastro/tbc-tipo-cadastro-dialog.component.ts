import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Tbc_tipo_cadastro } from './tbc-tipo-cadastro.model';
import { Tbc_tipo_cadastroPopupService } from './tbc-tipo-cadastro-popup.service';
import { Tbc_tipo_cadastroService } from './tbc-tipo-cadastro.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
@Component({
    selector: 'jhi-tbc-tipo-cadastro-dialog',
    templateUrl: './tbc-tipo-cadastro-dialog.component.html'
})
export class Tbc_tipo_cadastroDialogComponent implements OnInit {

    tbc_tipo_cadastro: Tbc_tipo_cadastro;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private tbc_tipo_cadastroService: Tbc_tipo_cadastroService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_tipo_cadastro']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.tbc_instituicaoService.query().subscribe(
            (res: Response) => { this.tbc_instituicaos = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_tipo_cadastro.id !== undefined) {
            this.tbc_tipo_cadastroService.update(this.tbc_tipo_cadastro)
                .subscribe((res: Tbc_tipo_cadastro) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_tipo_cadastroService.create(this.tbc_tipo_cadastro)
                .subscribe((res: Tbc_tipo_cadastro) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_tipo_cadastro) {
        this.eventManager.broadcast({ name: 'tbc_tipo_cadastroListModification', content: 'OK'});
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

    trackTbc_instituicaoById(index: number, item: Tbc_instituicao) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tbc-tipo-cadastro-popup',
    template: ''
})
export class Tbc_tipo_cadastroPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_tipo_cadastroPopupService: Tbc_tipo_cadastroPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_tipo_cadastroPopupService
                    .open(Tbc_tipo_cadastroDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_tipo_cadastroPopupService
                    .open(Tbc_tipo_cadastroDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
