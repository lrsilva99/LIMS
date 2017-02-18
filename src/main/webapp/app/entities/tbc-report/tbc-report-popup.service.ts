import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_report } from './tbc-report.model';
import { Tbc_reportService } from './tbc-report.service';
@Injectable()
export class Tbc_reportPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_reportService: Tbc_reportService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_reportService.find(id).subscribe(tbc_report => {
                this.tbc_reportModalRef(component, tbc_report);
            });
        } else {
            return this.tbc_reportModalRef(component, new Tbc_report());
        }
    }

    tbc_reportModalRef(component: Component, tbc_report: Tbc_report): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_report = tbc_report;
        modalRef.result.then(result => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
