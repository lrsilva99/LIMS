import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_plano_teste } from './tbc-plano-teste.model';
import { Tbc_plano_testeService } from './tbc-plano-teste.service';
@Injectable()
export class Tbc_plano_testePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_plano_testeService: Tbc_plano_testeService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_plano_testeService.find(id).subscribe(tbc_plano_teste => {
                this.tbc_plano_testeModalRef(component, tbc_plano_teste);
            });
        } else {
            return this.tbc_plano_testeModalRef(component, new Tbc_plano_teste());
        }
    }

    tbc_plano_testeModalRef(component: Component, tbc_plano_teste: Tbc_plano_teste): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_plano_teste = tbc_plano_teste;
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
