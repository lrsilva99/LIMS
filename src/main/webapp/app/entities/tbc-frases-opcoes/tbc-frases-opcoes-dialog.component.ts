import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Tbc_frases_opcoes } from './tbc-frases-opcoes.model';
import { Tbc_frases_opcoesPopupService } from './tbc-frases-opcoes-popup.service';
import { Tbc_frases_opcoesService } from './tbc-frases-opcoes.service';
import { Tbc_frases, Tbc_frasesService } from '../tbc-frases';
@Component({
    selector: 'jhi-tbc-frases-opcoes-dialog',
    templateUrl: './tbc-frases-opcoes-dialog.component.html'
})
export class Tbc_frases_opcoesDialogComponent implements OnInit {

    tbc_frases_opcoes: Tbc_frases_opcoes;
    authorities: any[];
    isSaving: boolean;

    tbc_frases: Tbc_frases[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private tbc_frases_opcoesService: Tbc_frases_opcoesService,
        private tbc_frasesService: Tbc_frasesService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_frases_opcoes']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.tbc_frasesService.query().subscribe(
            (res: Response) => { this.tbc_frases = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_frases_opcoes.id !== undefined) {
            this.tbc_frases_opcoesService.update(this.tbc_frases_opcoes)
                .subscribe((res: Tbc_frases_opcoes) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_frases_opcoesService.create(this.tbc_frases_opcoes)
                .subscribe((res: Tbc_frases_opcoes) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_frases_opcoes) {
        this.eventManager.broadcast({ name: 'tbc_frases_opcoesListModification', content: 'OK'});
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

    trackTbc_frasesById(index: number, item: Tbc_frases) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tbc-frases-opcoes-popup',
    template: ''
})
export class Tbc_frases_opcoesPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_frases_opcoesPopupService: Tbc_frases_opcoesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_frases_opcoesPopupService
                    .open(Tbc_frases_opcoesDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_frases_opcoesPopupService
                    .open(Tbc_frases_opcoesDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
