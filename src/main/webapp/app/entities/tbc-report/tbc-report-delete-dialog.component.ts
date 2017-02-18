import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, JhiLanguageService } from 'ng-jhipster';

import { Tbc_report } from './tbc-report.model';
import { Tbc_reportPopupService } from './tbc-report-popup.service';
import { Tbc_reportService } from './tbc-report.service';

@Component({
    selector: 'jhi-tbc-report-delete-dialog',
    templateUrl: './tbc-report-delete-dialog.component.html'
})
export class Tbc_reportDeleteDialogComponent {

    tbc_report: Tbc_report;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_reportService: Tbc_reportService,
        public activeModal: NgbActiveModal,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['tbc_report']);
    }

    clear () {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete (id: number) {
        this.tbc_reportService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'tbc_reportListModification',
                content: 'Deleted an tbc_report'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tbc-report-delete-popup',
    template: ''
})
export class Tbc_reportDeletePopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private tbc_reportPopupService: Tbc_reportPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.modalRef = this.tbc_reportPopupService
                .open(Tbc_reportDeleteDialogComponent, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
