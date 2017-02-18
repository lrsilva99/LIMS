import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Tbc_analises_componente } from './tbc-analises-componente.model';
import { Tbc_analises_componentePopupService } from './tbc-analises-componente-popup.service';
import { Tbc_analises_componenteService } from './tbc-analises-componente.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
import { Tbc_tipo_campo, Tbc_tipo_campoService } from '../tbc-tipo-campo';
import { Tbc_analises, Tbc_analisesService } from '../tbc-analises';
@Component({
    selector: 'jhi-tbc-analises-componente-dialog',
    templateUrl: './tbc-analises-componente-dialog.component.html'
})
export class Tbc_analises_componenteDialogComponent implements OnInit {

    tbc_analises_componente: Tbc_analises_componente;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];

    tbc_tipo_campos: Tbc_tipo_campo[];

    tbc_analises: Tbc_analises[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private tbc_analises_componenteService: Tbc_analises_componenteService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private tbc_tipo_campoService: Tbc_tipo_campoService,
        private tbc_analisesService: Tbc_analisesService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_analises_componente']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.tbc_instituicaoService.query().subscribe(
            (res: Response) => { this.tbc_instituicaos = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_tipo_campoService.query().subscribe(
            (res: Response) => { this.tbc_tipo_campos = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_analisesService.query().subscribe(
            (res: Response) => { this.tbc_analises = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, tbc_analises_componente, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                tbc_analises_componente[field] = base64Data;
                tbc_analises_componente[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_analises_componente.id !== undefined) {
            this.tbc_analises_componenteService.update(this.tbc_analises_componente)
                .subscribe((res: Tbc_analises_componente) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_analises_componenteService.create(this.tbc_analises_componente)
                .subscribe((res: Tbc_analises_componente) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_analises_componente) {
        this.eventManager.broadcast({ name: 'tbc_analises_componenteListModification', content: 'OK'});
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

    trackTbc_tipo_campoById(index: number, item: Tbc_tipo_campo) {
        return item.id;
    }

    trackTbc_analisesById(index: number, item: Tbc_analises) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tbc-analises-componente-popup',
    template: ''
})
export class Tbc_analises_componentePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_analises_componentePopupService: Tbc_analises_componentePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_analises_componentePopupService
                    .open(Tbc_analises_componenteDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_analises_componentePopupService
                    .open(Tbc_analises_componenteDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
