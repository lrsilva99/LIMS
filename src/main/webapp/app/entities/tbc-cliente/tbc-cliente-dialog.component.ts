import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Tbc_cliente } from './tbc-cliente.model';
import { Tbc_clientePopupService } from './tbc-cliente-popup.service';
import { Tbc_clienteService } from './tbc-cliente.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
import { Tbc_grupo_cliente, Tbc_grupo_clienteService } from '../tbc-grupo-cliente';
@Component({
    selector: 'jhi-tbc-cliente-dialog',
    templateUrl: './tbc-cliente-dialog.component.html'
})
export class Tbc_clienteDialogComponent implements OnInit {

    tbc_cliente: Tbc_cliente;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];

    tbc_grupo_clientes: Tbc_grupo_cliente[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private tbc_clienteService: Tbc_clienteService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private tbc_grupo_clienteService: Tbc_grupo_clienteService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_cliente']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.tbc_instituicaoService.query().subscribe(
            (res: Response) => { this.tbc_instituicaos = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_grupo_clienteService.query().subscribe(
            (res: Response) => { this.tbc_grupo_clientes = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData($event, tbc_cliente, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                tbc_cliente[field] = base64Data;
                tbc_cliente[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_cliente.id !== undefined) {
            this.tbc_clienteService.update(this.tbc_cliente)
                .subscribe((res: Tbc_cliente) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_clienteService.create(this.tbc_cliente)
                .subscribe((res: Tbc_cliente) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_cliente) {
        this.eventManager.broadcast({ name: 'tbc_clienteListModification', content: 'OK'});
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

    trackTbc_grupo_clienteById(index: number, item: Tbc_grupo_cliente) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tbc-cliente-popup',
    template: ''
})
export class Tbc_clientePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_clientePopupService: Tbc_clientePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_clientePopupService
                    .open(Tbc_clienteDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_clientePopupService
                    .open(Tbc_clienteDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
