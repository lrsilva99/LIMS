import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_sub_grupo } from './tbc-sub-grupo.model';
import { Tbc_sub_grupoPopupService } from './tbc-sub-grupo-popup.service';
import { Tbc_sub_grupoService } from './tbc-sub-grupo.service';

@Component({
    selector: 'jhi-tbc-sub-grupo-delete-dialog',
    templateUrl: './tbc-sub-grupo-delete-dialog.component.html'
})
export class Tbc_sub_grupoDeleteDialogComponent {

    tbc_sub_grupo: Tbc_sub_grupo;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_sub_grupoService: Tbc_sub_grupoService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_sub_grupo']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_sub_grupoService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_sub_grupoListModification',
                content: 'Deleted an tbc_sub_grupo'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-sub-grupo-delete-popup',
    template: ''
})
export class Tbc_sub_grupoDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_sub_grupoPopupService: Tbc_sub_grupoPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_sub_grupoPopupService
                .open(Tbc_sub_grupoDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
