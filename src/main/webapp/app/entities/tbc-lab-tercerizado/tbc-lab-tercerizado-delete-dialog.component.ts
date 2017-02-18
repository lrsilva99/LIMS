import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_lab_tercerizado } from './tbc-lab-tercerizado.model';
import { Tbc_lab_tercerizadoPopupService } from './tbc-lab-tercerizado-popup.service';
import { Tbc_lab_tercerizadoService } from './tbc-lab-tercerizado.service';

@Component({
    selector: 'jhi-tbc-lab-tercerizado-delete-dialog',
    templateUrl: './tbc-lab-tercerizado-delete-dialog.component.html'
})
export class Tbc_lab_tercerizadoDeleteDialogComponent {

    tbc_lab_tercerizado: Tbc_lab_tercerizado;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_lab_tercerizadoService: Tbc_lab_tercerizadoService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_lab_tercerizado']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_lab_tercerizadoService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_lab_tercerizadoListModification',
                content: 'Deleted an tbc_lab_tercerizado'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-lab-tercerizado-delete-popup',
    template: ''
})
export class Tbc_lab_tercerizadoDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_lab_tercerizadoPopupService: Tbc_lab_tercerizadoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_lab_tercerizadoPopupService
                .open(Tbc_lab_tercerizadoDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
