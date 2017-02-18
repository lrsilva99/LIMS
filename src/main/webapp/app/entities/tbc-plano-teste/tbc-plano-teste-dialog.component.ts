import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Tbc_plano_teste } from './tbc-plano-teste.model';
import { Tbc_plano_testePopupService } from './tbc-plano-teste-popup.service';
import { Tbc_plano_testeService } from './tbc-plano-teste.service';
import { Tbc_tipo_cadastro, Tbc_tipo_cadastroService } from '../tbc-tipo-cadastro';
import { Tbc_sub_grupo, Tbc_sub_grupoService } from '../tbc-sub-grupo';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
@Component({
    selector: 'jhi-tbc-plano-teste-dialog',
    templateUrl: './tbc-plano-teste-dialog.component.html'
})
export class Tbc_plano_testeDialogComponent implements OnInit {

    tbc_plano_teste: Tbc_plano_teste;
    authorities: any[];
    isSaving: boolean;

    tbc_tipo_cadastros: Tbc_tipo_cadastro[];

    tbc_sub_grupos: Tbc_sub_grupo[];

    tbc_instituicaos: Tbc_instituicao[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private tbc_plano_testeService: Tbc_plano_testeService,
        private tbc_tipo_cadastroService: Tbc_tipo_cadastroService,
        private tbc_sub_grupoService: Tbc_sub_grupoService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_plano_teste']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.tbc_tipo_cadastroService.query().subscribe(
            (res: Response) => { this.tbc_tipo_cadastros = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_sub_grupoService.query().subscribe(
            (res: Response) => { this.tbc_sub_grupos = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_instituicaoService.query().subscribe(
            (res: Response) => { this.tbc_instituicaos = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, tbc_plano_teste, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                tbc_plano_teste[field] = base64Data;
                tbc_plano_teste[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_plano_teste.id !== undefined) {
            this.tbc_plano_testeService.update(this.tbc_plano_teste)
                .subscribe((res: Tbc_plano_teste) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_plano_testeService.create(this.tbc_plano_teste)
                .subscribe((res: Tbc_plano_teste) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_plano_teste) {
        this.eventManager.broadcast({ name: 'tbc_plano_testeListModification', content: 'OK'});
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

    trackTbc_tipo_cadastroById(index: number, item: Tbc_tipo_cadastro) {
        return item.id;
    }

    trackTbc_sub_grupoById(index: number, item: Tbc_sub_grupo) {
        return item.id;
    }

    trackTbc_instituicaoById(index: number, item: Tbc_instituicao) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tbc-plano-teste-popup',
    template: ''
})
export class Tbc_plano_testePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_plano_testePopupService: Tbc_plano_testePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_plano_testePopupService
                    .open(Tbc_plano_testeDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_plano_testePopupService
                    .open(Tbc_plano_testeDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
