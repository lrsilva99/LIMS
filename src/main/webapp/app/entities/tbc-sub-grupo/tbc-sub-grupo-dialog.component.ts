import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Tbc_sub_grupo } from './tbc-sub-grupo.model';
import { Tbc_sub_grupoPopupService } from './tbc-sub-grupo-popup.service';
import { Tbc_sub_grupoService } from './tbc-sub-grupo.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
@Component({
    selector: 'jhi-tbc-sub-grupo-dialog',
    templateUrl: './tbc-sub-grupo-dialog.component.html'
})
export class Tbc_sub_grupoDialogComponent implements OnInit {

    tbc_sub_grupo: Tbc_sub_grupo;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private tbc_sub_grupoService: Tbc_sub_grupoService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_sub_grupo']);
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
        if (this.tbc_sub_grupo.id !== undefined) {
            this.tbc_sub_grupoService.update(this.tbc_sub_grupo)
                .subscribe((res: Tbc_sub_grupo) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_sub_grupoService.create(this.tbc_sub_grupo)
                .subscribe((res: Tbc_sub_grupo) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_sub_grupo) {
        this.eventManager.broadcast({ name: 'tbc_sub_grupoListModification', content: 'OK'});
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
    selector: 'jhi-tbc-sub-grupo-popup',
    template: ''
})
export class Tbc_sub_grupoPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_sub_grupoPopupService: Tbc_sub_grupoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_sub_grupoPopupService
                    .open(Tbc_sub_grupoDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_sub_grupoPopupService
                    .open(Tbc_sub_grupoDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
