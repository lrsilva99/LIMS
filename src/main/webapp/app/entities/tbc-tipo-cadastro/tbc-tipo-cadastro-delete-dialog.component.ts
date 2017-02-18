import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_tipo_cadastro } from './tbc-tipo-cadastro.model';
import { Tbc_tipo_cadastroPopupService } from './tbc-tipo-cadastro-popup.service';
import { Tbc_tipo_cadastroService } from './tbc-tipo-cadastro.service';

@Component({
    selector: 'jhi-tbc-tipo-cadastro-delete-dialog',
    templateUrl: './tbc-tipo-cadastro-delete-dialog.component.html'
})
export class Tbc_tipo_cadastroDeleteDialogComponent {

    tbc_tipo_cadastro: Tbc_tipo_cadastro;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_tipo_cadastroService: Tbc_tipo_cadastroService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_tipo_cadastro']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_tipo_cadastroService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_tipo_cadastroListModification',
                content: 'Deleted an tbc_tipo_cadastro'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-tipo-cadastro-delete-popup',
    template: ''
})
export class Tbc_tipo_cadastroDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_tipo_cadastroPopupService: Tbc_tipo_cadastroPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_tipo_cadastroPopupService
                .open(Tbc_tipo_cadastroDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
