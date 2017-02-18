import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Tbc_tipo_campo } from './tbc-tipo-campo.model';
import { Tbc_tipo_campoPopupService } from './tbc-tipo-campo-popup.service';
import { Tbc_tipo_campoService } from './tbc-tipo-campo.service';
@Component({
    selector: 'jhi-tbc-tipo-campo-dialog',
    templateUrl: './tbc-tipo-campo-dialog.component.html'
})
export class Tbc_tipo_campoDialogComponent implements OnInit {

    tbc_tipo_campo: Tbc_tipo_campo;
    authorities: any[];
    isSaving: boolean;
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private tbc_tipo_campoService: Tbc_tipo_campoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_tipo_campo']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_tipo_campo.id !== undefined) {
            this.tbc_tipo_campoService.update(this.tbc_tipo_campo)
                .subscribe((res: Tbc_tipo_campo) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_tipo_campoService.create(this.tbc_tipo_campo)
                .subscribe((res: Tbc_tipo_campo) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_tipo_campo) {
        this.eventManager.broadcast({ name: 'tbc_tipo_campoListModification', content: 'OK'});
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
}

@Component({
    selector: 'jhi-tbc-tipo-campo-popup',
    template: ''
})
export class Tbc_tipo_campoPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_tipo_campoPopupService: Tbc_tipo_campoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_tipo_campoPopupService
                    .open(Tbc_tipo_campoDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_tipo_campoPopupService
                    .open(Tbc_tipo_campoDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
