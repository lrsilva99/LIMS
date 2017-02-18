import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_lab_tercerizado } from './tbc-lab-tercerizado.model';
import { Tbc_lab_tercerizadoService } from './tbc-lab-tercerizado.service';
@Injectable()
export class Tbc_lab_tercerizadoPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_lab_tercerizadoService: Tbc_lab_tercerizadoService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_lab_tercerizadoService.find(id).subscribe(tbc_lab_tercerizado => {
                this.tbc_lab_tercerizadoModalRef(component, tbc_lab_tercerizado);
            });
        } else {
            return this.tbc_lab_tercerizadoModalRef(component, new Tbc_lab_tercerizado());
        }
    }

    tbc_lab_tercerizadoModalRef(component: Component, tbc_lab_tercerizado: Tbc_lab_tercerizado): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_lab_tercerizado = tbc_lab_tercerizado;
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
