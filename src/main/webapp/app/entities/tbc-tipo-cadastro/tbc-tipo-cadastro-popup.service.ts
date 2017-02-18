import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_tipo_cadastro } from './tbc-tipo-cadastro.model';
import { Tbc_tipo_cadastroService } from './tbc-tipo-cadastro.service';
@Injectable()
export class Tbc_tipo_cadastroPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_tipo_cadastroService: Tbc_tipo_cadastroService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_tipo_cadastroService.find(id).subscribe(tbc_tipo_cadastro => {
                this.tbc_tipo_cadastroModalRef(component, tbc_tipo_cadastro);
            });
        } else {
            return this.tbc_tipo_cadastroModalRef(component, new Tbc_tipo_cadastro());
        }
    }

    tbc_tipo_cadastroModalRef(component: Component, tbc_tipo_cadastro: Tbc_tipo_cadastro): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_tipo_cadastro = tbc_tipo_cadastro;
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
