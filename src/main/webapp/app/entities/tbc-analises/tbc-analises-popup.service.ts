import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Tbc_analises } from './tbc-analises.model';
import { Tbc_analisesService } from './tbc-analises.service';
@Injectable()
export class Tbc_analisesPopupService {
    private isOpen = false;
    constructor (
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private tbc_analisesService: Tbc_analisesService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_analisesService.find(id).subscribe(tbc_analises => {
                tbc_analises.directiva_data_atu = this.datePipe.transform(tbc_analises.directiva_data_atu, 'yyyy-MM-ddThh:mm');
                this.tbc_analisesModalRef(component, tbc_analises);
            });
        } else {
            return this.tbc_analisesModalRef(component, new Tbc_analises());
        }
    }

    tbc_analisesModalRef(component: Component, tbc_analises: Tbc_analises): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_analises = tbc_analises;
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
