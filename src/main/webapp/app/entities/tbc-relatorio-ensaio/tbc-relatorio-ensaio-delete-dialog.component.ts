import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_relatorio_ensaio } from './tbc-relatorio-ensaio.model';
import { Tbc_relatorio_ensaioPopupService } from './tbc-relatorio-ensaio-popup.service';
import { Tbc_relatorio_ensaioService } from './tbc-relatorio-ensaio.service';

@Component({
    selector: 'jhi-tbc-relatorio-ensaio-delete-dialog',
    templateUrl: './tbc-relatorio-ensaio-delete-dialog.component.html'
})
export class Tbc_relatorio_ensaioDeleteDialogComponent {

    tbc_relatorio_ensaio: Tbc_relatorio_ensaio;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_relatorio_ensaioService: Tbc_relatorio_ensaioService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_relatorio_ensaio']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_relatorio_ensaioService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_relatorio_ensaioListModification',
                content: 'Deleted an tbc_relatorio_ensaio'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-relatorio-ensaio-delete-popup',
    template: ''
})
export class Tbc_relatorio_ensaioDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_relatorio_ensaioPopupService: Tbc_relatorio_ensaioPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_relatorio_ensaioPopupService
                .open(Tbc_relatorio_ensaioDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
