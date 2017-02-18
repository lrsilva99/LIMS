import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_sub_grupo } from './tbc-sub-grupo.model';
import { Tbc_sub_grupoService } from './tbc-sub-grupo.service';
@Injectable()
export class Tbc_sub_grupoPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_sub_grupoService: Tbc_sub_grupoService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_sub_grupoService.find(id).subscribe(tbc_sub_grupo => {
                this.tbc_sub_grupoModalRef(component, tbc_sub_grupo);
            });
        } else {
            return this.tbc_sub_grupoModalRef(component, new Tbc_sub_grupo());
        }
    }

    tbc_sub_grupoModalRef(component: Component, tbc_sub_grupo: Tbc_sub_grupo): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_sub_grupo = tbc_sub_grupo;
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
