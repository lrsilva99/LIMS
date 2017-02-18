import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_formulario } from './tbc-formulario.model';
import { Tbc_formularioService } from './tbc-formulario.service';
@Injectable()
export class Tbc_formularioPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_formularioService: Tbc_formularioService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_formularioService.find(id).subscribe(tbc_formulario => {
                this.tbc_formularioModalRef(component, tbc_formulario);
            });
        } else {
            return this.tbc_formularioModalRef(component, new Tbc_formulario());
        }
    }

    tbc_formularioModalRef(component: Component, tbc_formulario: Tbc_formulario): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_formulario = tbc_formulario;
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
