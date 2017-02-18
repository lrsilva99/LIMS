import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Tbc_lab_tercerizado } from './tbc-lab-tercerizado.model';
import { Tbc_lab_tercerizadoPopupService } from './tbc-lab-tercerizado-popup.service';
import { Tbc_lab_tercerizadoService } from './tbc-lab-tercerizado.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
@Component({
    selector: 'jhi-tbc-lab-tercerizado-dialog',
    templateUrl: './tbc-lab-tercerizado-dialog.component.html'
})
export class Tbc_lab_tercerizadoDialogComponent implements OnInit {

    tbc_lab_tercerizado: Tbc_lab_tercerizado;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private tbc_lab_tercerizadoService: Tbc_lab_tercerizadoService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_lab_tercerizado']);
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

    setFileData($event, tbc_lab_tercerizado, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                tbc_lab_tercerizado[field] = base64Data;
                tbc_lab_tercerizado[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_lab_tercerizado.id !== undefined) {
            this.tbc_lab_tercerizadoService.update(this.tbc_lab_tercerizado)
                .subscribe((res: Tbc_lab_tercerizado) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_lab_tercerizadoService.create(this.tbc_lab_tercerizado)
                .subscribe((res: Tbc_lab_tercerizado) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_lab_tercerizado) {
        this.eventManager.broadcast({ name: 'tbc_lab_tercerizadoListModification', content: 'OK'});
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
    selector: 'jhi-tbc-lab-tercerizado-popup',
    template: ''
})
export class Tbc_lab_tercerizadoPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_lab_tercerizadoPopupService: Tbc_lab_tercerizadoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_lab_tercerizadoPopupService
                    .open(Tbc_lab_tercerizadoDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_lab_tercerizadoPopupService
                    .open(Tbc_lab_tercerizadoDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
