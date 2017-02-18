import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Tbc_analises } from './tbc-analises.model';
import { Tbc_analisesPopupService } from './tbc-analises-popup.service';
import { Tbc_analisesService } from './tbc-analises.service';
import { Tbc_sub_grupo, Tbc_sub_grupoService } from '../tbc-sub-grupo';
import { Tbc_grupo_analise, Tbc_grupo_analiseService } from '../tbc-grupo-analise';
import { Tbc_tipo_cadastro, Tbc_tipo_cadastroService } from '../tbc-tipo-cadastro';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
import { Tbc_report, Tbc_reportService } from '../tbc-report';
@Component({
    selector: 'jhi-tbc-analises-dialog',
    templateUrl: './tbc-analises-dialog.component.html'
})
export class Tbc_analisesDialogComponent implements OnInit {

    tbc_analises: Tbc_analises;
    authorities: any[];
    isSaving: boolean;

    tbc_sub_grupos: Tbc_sub_grupo[];

    tbc_grupo_analises: Tbc_grupo_analise[];

    tbc_tipo_cadastros: Tbc_tipo_cadastro[];

    tbc_instituicaos: Tbc_instituicao[];

    tbc_reports: Tbc_report[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private tbc_analisesService: Tbc_analisesService,
        private tbc_sub_grupoService: Tbc_sub_grupoService,
        private tbc_grupo_analiseService: Tbc_grupo_analiseService,
        private tbc_tipo_cadastroService: Tbc_tipo_cadastroService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private tbc_reportService: Tbc_reportService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_analises']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.tbc_sub_grupoService.query().subscribe(
            (res: Response) => { this.tbc_sub_grupos = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_grupo_analiseService.query().subscribe(
            (res: Response) => { this.tbc_grupo_analises = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_tipo_cadastroService.query().subscribe(
            (res: Response) => { this.tbc_tipo_cadastros = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_instituicaoService.query().subscribe(
            (res: Response) => { this.tbc_instituicaos = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_reportService.query().subscribe(
            (res: Response) => { this.tbc_reports = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, tbc_analises, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                tbc_analises[field] = base64Data;
                tbc_analises[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_analises.id !== undefined) {
            this.tbc_analisesService.update(this.tbc_analises)
                .subscribe((res: Tbc_analises) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_analisesService.create(this.tbc_analises)
                .subscribe((res: Tbc_analises) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_analises) {
        this.eventManager.broadcast({ name: 'tbc_analisesListModification', content: 'OK'});
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

    trackTbc_sub_grupoById(index: number, item: Tbc_sub_grupo) {
        return item.id;
    }

    trackTbc_grupo_analiseById(index: number, item: Tbc_grupo_analise) {
        return item.id;
    }

    trackTbc_tipo_cadastroById(index: number, item: Tbc_tipo_cadastro) {
        return item.id;
    }

    trackTbc_instituicaoById(index: number, item: Tbc_instituicao) {
        return item.id;
    }

    trackTbc_reportById(index: number, item: Tbc_report) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tbc-analises-popup',
    template: ''
})
export class Tbc_analisesPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_analisesPopupService: Tbc_analisesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_analisesPopupService
                    .open(Tbc_analisesDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_analisesPopupService
                    .open(Tbc_analisesDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
