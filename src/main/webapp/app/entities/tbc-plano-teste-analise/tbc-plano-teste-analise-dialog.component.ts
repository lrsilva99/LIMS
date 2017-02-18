import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Tbc_plano_teste_analise } from './tbc-plano-teste-analise.model';
import { Tbc_plano_teste_analisePopupService } from './tbc-plano-teste-analise-popup.service';
import { Tbc_plano_teste_analiseService } from './tbc-plano-teste-analise.service';
import { Tbc_plano_teste, Tbc_plano_testeService } from '../tbc-plano-teste';
import { Tbc_analises, Tbc_analisesService } from '../tbc-analises';
@Component({
    selector: 'jhi-tbc-plano-teste-analise-dialog',
    templateUrl: './tbc-plano-teste-analise-dialog.component.html'
})
export class Tbc_plano_teste_analiseDialogComponent implements OnInit {

    tbc_plano_teste_analise: Tbc_plano_teste_analise;
    authorities: any[];
    isSaving: boolean;

    tbc_plano_testes: Tbc_plano_teste[];

    tbc_analises: Tbc_analises[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private tbc_plano_teste_analiseService: Tbc_plano_teste_analiseService,
        private tbc_plano_testeService: Tbc_plano_testeService,
        private tbc_analisesService: Tbc_analisesService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_plano_teste_analise']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.tbc_plano_testeService.query().subscribe(
            (res: Response) => { this.tbc_plano_testes = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_analisesService.query().subscribe(
            (res: Response) => { this.tbc_analises = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_plano_teste_analise.id !== undefined) {
            this.tbc_plano_teste_analiseService.update(this.tbc_plano_teste_analise)
                .subscribe((res: Tbc_plano_teste_analise) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_plano_teste_analiseService.create(this.tbc_plano_teste_analise)
                .subscribe((res: Tbc_plano_teste_analise) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_plano_teste_analise) {
        this.eventManager.broadcast({ name: 'tbc_plano_teste_analiseListModification', content: 'OK'});
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

    trackTbc_plano_testeById(index: number, item: Tbc_plano_teste) {
        return item.id;
    }

    trackTbc_analisesById(index: number, item: Tbc_analises) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tbc-plano-teste-analise-popup',
    template: ''
})
export class Tbc_plano_teste_analisePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_plano_teste_analisePopupService: Tbc_plano_teste_analisePopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_plano_teste_analisePopupService
                    .open(Tbc_plano_teste_analiseDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_plano_teste_analisePopupService
                    .open(Tbc_plano_teste_analiseDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
