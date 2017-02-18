import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Tbc_report } from './tbc-report.model';
import { Tbc_reportPopupService } from './tbc-report-popup.service';
import { Tbc_reportService } from './tbc-report.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
@Component({
    selector: 'jhi-tbc-report-dialog',
    templateUrl: './tbc-report-dialog.component.html'
})
export class Tbc_reportDialogComponent implements OnInit {

    tbc_report: Tbc_report;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private tbc_reportService: Tbc_reportService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_report']);
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

    setFileData($event, tbc_report, field, isImage) {
        if ($event.target.files && $event.target.files[0]) {
            let $file = $event.target.files[0];
            if (isImage && !/^image\//.test($file.type)) {
                return;
            }
            this.dataUtils.toBase64($file, (base64Data) => {
                tbc_report[field] = base64Data;
                tbc_report[`${field}ContentType`] = $file.type;
            });
        }
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_report.id !== undefined) {
            this.tbc_reportService.update(this.tbc_report)
                .subscribe((res: Tbc_report) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_reportService.create(this.tbc_report)
                .subscribe((res: Tbc_report) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_report) {
        this.eventManager.broadcast({ name: 'tbc_reportListModification', content: 'OK'});
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
    selector: 'jhi-tbc-report-popup',
    template: ''
})
export class Tbc_reportPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_reportPopupService: Tbc_reportPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_reportPopupService
                    .open(Tbc_reportDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_reportPopupService
                    .open(Tbc_reportDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
