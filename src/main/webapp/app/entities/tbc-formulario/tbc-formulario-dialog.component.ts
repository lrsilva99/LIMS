import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService } from 'ng-jhipster';

import { Tbc_formulario } from './tbc-formulario.model';
import { Tbc_formularioPopupService } from './tbc-formulario-popup.service';
import { Tbc_formularioService } from './tbc-formulario.service';
import { Tbc_instituicao, Tbc_instituicaoService } from '../tbc-instituicao';
import { Tbc_sub_grupo, Tbc_sub_grupoService } from '../tbc-sub-grupo';
import { Tbc_grupo_analise, Tbc_grupo_analiseService } from '../tbc-grupo-analise';
import { Tbc_tipo_cadastro, Tbc_tipo_cadastroService } from '../tbc-tipo-cadastro';
@Component({
    selector: 'jhi-tbc-formulario-dialog',
    templateUrl: './tbc-formulario-dialog.component.html'
})
export class Tbc_formularioDialogComponent implements OnInit {

    tbc_formulario: Tbc_formulario;
    authorities: any[];
    isSaving: boolean;

    tbc_instituicaos: Tbc_instituicao[];

    tbc_sub_grupos: Tbc_sub_grupo[];

    tbc_grupo_analises: Tbc_grupo_analise[];

    tbc_tipo_cadastros: Tbc_tipo_cadastro[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private alertService: AlertService,
        private tbc_formularioService: Tbc_formularioService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private tbc_sub_grupoService: Tbc_sub_grupoService,
        private tbc_grupo_analiseService: Tbc_grupo_analiseService,
        private tbc_tipo_cadastroService: Tbc_tipo_cadastroService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_formulario']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.tbc_instituicaoService.query().subscribe(
            (res: Response) => { this.tbc_instituicaos = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_sub_grupoService.query().subscribe(
            (res: Response) => { this.tbc_sub_grupos = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_grupo_analiseService.query().subscribe(
            (res: Response) => { this.tbc_grupo_analises = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tbc_tipo_cadastroService.query().subscribe(
            (res: Response) => { this.tbc_tipo_cadastros = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.tbc_formulario.id !== undefined) {
            this.tbc_formularioService.update(this.tbc_formulario)
                .subscribe((res: Tbc_formulario) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.tbc_formularioService.create(this.tbc_formulario)
                .subscribe((res: Tbc_formulario) => this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Tbc_formulario) {
        this.eventManager.broadcast({ name: 'tbc_formularioListModification', content: 'OK'});
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

    trackTbc_sub_grupoById(index: number, item: Tbc_sub_grupo) {
        return item.id;
    }

    trackTbc_grupo_analiseById(index: number, item: Tbc_grupo_analise) {
        return item.id;
    }

    trackTbc_tipo_cadastroById(index: number, item: Tbc_tipo_cadastro) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tbc-formulario-popup',
    template: ''
})
export class Tbc_formularioPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_formularioPopupService: Tbc_formularioPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.tbc_formularioPopupService
                    .open(Tbc_formularioDialogComponent, params['id']);
            } else {
                this.modalRef = this.tbc_formularioPopupService
                    .open(Tbc_formularioDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
