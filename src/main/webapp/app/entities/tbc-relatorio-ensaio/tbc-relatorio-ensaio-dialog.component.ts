import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Tbc_relatorio_ensaio } from './tbc-relatorio-ensaio.model';
import { Tbc_relatorio_ensaioPopupService } from './tbc-relatorio-ensaio-popup.service';
import { Tbc_relatorio_ensaioService } from './tbc-relatorio-ensaio.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
@Component({
    selector: 'jhi-tbc-relatorio-ensaio-dialog',
    templateUrl: './tbc-relatorio-ensaio-dialog.component.html'
})
export class Tbc_relatorio_ensaioDialogComponent implements OnInit {

    tbc_relatorio_ensaio: Tbc_relatorio_ensaio;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private tbc_relatorio_ensaioService: Tbc_relatorio_ensaioService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_relatorio_ensaio']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.tbc_instituicaoService.query().subscribe(
            (res: Response) => { this.tbc_instituicaos = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, tbc_relatorio_ensaio, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                tbc_relatorio_ensaio[field] = base64Data;
                tbc_relatorio_ensaio[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_relatorio_ensaio.id !== undefined) {
            this.tbc_relatorio_ensaioService.update(this.tbc_relatorio_ensaio)
                .subscribe((res: Tbc_relatorio_ensaio) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_relatorio_ensaioService.create(this.tbc_relatorio_ensaio)
                .subscribe((res: Tbc_relatorio_ensaio) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_relatorio_ensaio) {
        this.eventManager.broadcast({ name: 'tbc_relatorio_ensaioListModification', content: 'OK'});
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
    selector: 'jhi-tbc-relatorio-ensaio-popup',
    template: ''
})
export class Tbc_relatorio_ensaioPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_relatorio_ensaioPopupService: Tbc_relatorio_ensaioPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_relatorio_ensaioPopupService
                    .open(Tbc_relatorio_ensaioDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_relatorio_ensaioPopupService
                    .open(Tbc_relatorio_ensaioDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
