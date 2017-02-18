import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Tbc_grupo_cliente } from './tbc-grupo-cliente.model';
import { Tbc_grupo_clientePopupService } from './tbc-grupo-cliente-popup.service';
import { Tbc_grupo_clienteService } from './tbc-grupo-cliente.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
@Component({
    selector: 'jhi-tbc-grupo-cliente-dialog',
    templateUrl: './tbc-grupo-cliente-dialog.component.html'
})
export class Tbc_grupo_clienteDialogComponent implements OnInit {

    tbc_grupo_cliente: Tbc_grupo_cliente;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private tbc_grupo_clienteService: Tbc_grupo_clienteService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_grupo_cliente']);
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

    setFileData($event, tbc_grupo_cliente, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                tbc_grupo_cliente[field] = base64Data;
                tbc_grupo_cliente[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_grupo_cliente.id !== undefined) {
            this.tbc_grupo_clienteService.update(this.tbc_grupo_cliente)
                .subscribe((res: Tbc_grupo_cliente) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_grupo_clienteService.create(this.tbc_grupo_cliente)
                .subscribe((res: Tbc_grupo_cliente) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_grupo_cliente) {
        this.eventManager.broadcast({ name: 'tbc_grupo_clienteListModification', content: 'OK'});
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
    selector: 'jhi-tbc-grupo-cliente-popup',
    template: ''
})
export class Tbc_grupo_clientePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_grupo_clientePopupService: Tbc_grupo_clientePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_grupo_clientePopupService
                    .open(Tbc_grupo_clienteDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_grupo_clientePopupService
                    .open(Tbc_grupo_clienteDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
