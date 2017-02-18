import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_relatorio_ensaio } from './tbc-relatorio-ensaio.model';
import { Tbc_relatorio_ensaioService } from './tbc-relatorio-ensaio.service';
@Injectable()
export class Tbc_relatorio_ensaioPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_relatorio_ensaioService: Tbc_relatorio_ensaioService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_relatorio_ensaioService.find(id).subscribe(tbc_relatorio_ensaio => {
                this.tbc_relatorio_ensaioModalRef(component, tbc_relatorio_ensaio);
            });
        } else {
            return this.tbc_relatorio_ensaioModalRef(component, new Tbc_relatorio_ensaio());
        }
    }

    tbc_relatorio_ensaioModalRef(component: Component, tbc_relatorio_ensaio: Tbc_relatorio_ensaio): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_relatorio_ensaio = tbc_relatorio_ensaio;
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
