import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_grupo_cliente } from './tbc-grupo-cliente.model';
import { Tbc_grupo_clienteService } from './tbc-grupo-cliente.service';
@Injectable()
export class Tbc_grupo_clientePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_grupo_clienteService: Tbc_grupo_clienteService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_grupo_clienteService.find(id).subscribe(tbc_grupo_cliente => {
                this.tbc_grupo_clienteModalRef(component, tbc_grupo_cliente);
            });
        } else {
            return this.tbc_grupo_clienteModalRef(component, new Tbc_grupo_cliente());
        }
    }

    tbc_grupo_clienteModalRef(component: Component, tbc_grupo_cliente: Tbc_grupo_cliente): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_grupo_cliente = tbc_grupo_cliente;
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
