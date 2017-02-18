import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_tipo_campo } from './tbc-tipo-campo.model';
import { Tbc_tipo_campoService } from './tbc-tipo-campo.service';
@Injectable()
export class Tbc_tipo_campoPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_tipo_campoService: Tbc_tipo_campoService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_tipo_campoService.find(id).subscribe(tbc_tipo_campo => {
                this.tbc_tipo_campoModalRef(component, tbc_tipo_campo);
            });
        } else {
            return this.tbc_tipo_campoModalRef(component, new Tbc_tipo_campo());
        }
    }

    tbc_tipo_campoModalRef(component: Component, tbc_tipo_campo: Tbc_tipo_campo): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_tipo_campo = tbc_tipo_campo;
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
