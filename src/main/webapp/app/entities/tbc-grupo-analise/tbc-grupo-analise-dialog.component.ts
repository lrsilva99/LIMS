import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Tbc_grupo_analise } from './tbc-grupo-analise.model';
import { Tbc_grupo_analisePopupService } from './tbc-grupo-analise-popup.service';
import { Tbc_grupo_analiseService } from './tbc-grupo-analise.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
@Component({
    selector: 'jhi-tbc-grupo-analise-dialog',
    templateUrl: './tbc-grupo-analise-dialog.component.html'
})
export class Tbc_grupo_analiseDialogComponent implements OnInit {

    tbc_grupo_analise: Tbc_grupo_analise;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private tbc_grupo_analiseService: Tbc_grupo_analiseService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_grupo_analise']);
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
        if (this.tbc_grupo_analise.id !== undefined) {
            this.tbc_grupo_analiseService.update(this.tbc_grupo_analise)
                .subscribe((res: Tbc_grupo_analise) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_grupo_analiseService.create(this.tbc_grupo_analise)
                .subscribe((res: Tbc_grupo_analise) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_grupo_analise) {
        this.eventManager.broadcast({ name: 'tbc_grupo_analiseListModification', content: 'OK'});
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
    selector: 'jhi-tbc-grupo-analise-popup',
    template: ''
})
export class Tbc_grupo_analisePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_grupo_analisePopupService: Tbc_grupo_analisePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_grupo_analisePopupService
                    .open(Tbc_grupo_analiseDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_grupo_analisePopupService
                    .open(Tbc_grupo_analiseDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
