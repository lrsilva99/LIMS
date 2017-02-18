import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Tbc_frases } from './tbc-frases.model';
import { Tbc_frasesPopupService } from './tbc-frases-popup.service';
import { Tbc_frasesService } from './tbc-frases.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
import { Tbc_sub_grupo, Tbc_sub_grupoService } from '../tbc-sub-grupo';
@Component({
    selector: 'jhi-tbc-frases-dialog',
    templateUrl: './tbc-frases-dialog.component.html'
})
export class Tbc_frasesDialogComponent implements OnInit {

    tbc_frases: Tbc_frases;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];

    tbc_sub_grupos: Tbc_sub_grupo[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private tbc_frasesService: Tbc_frasesService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private tbc_sub_grupoService: Tbc_sub_grupoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_frases']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.tbc_instituicaoService.query().subscribe(
            (res: Response) => { this.tbc_instituicaos = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_sub_grupoService.query().subscribe(
            (res: Response) => { this.tbc_sub_grupos = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_frases.id !== undefined) {
            this.tbc_frasesService.update(this.tbc_frases)
                .subscribe((res: Tbc_frases) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_frasesService.create(this.tbc_frases)
                .subscribe((res: Tbc_frases) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_frases) {
        this.eventManager.broadcast({ name: 'tbc_frasesListModification', content: 'OK'});
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

    trackTbc_sub_grupoById(index: number, item: Tbc_sub_grupo) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tbc-frases-popup',
    template: ''
})
export class Tbc_frasesPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_frasesPopupService: Tbc_frasesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_frasesPopupService
                    .open(Tbc_frasesDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_frasesPopupService
                    .open(Tbc_frasesDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
