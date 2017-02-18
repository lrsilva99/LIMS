import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Tbc_cliente } from './tbc-cliente.model';
import { Tbc_clienteService } from './tbc-cliente.service';
@Injectable()
export class Tbc_clientePopupService {
    private isOpen = false;
    constructor (
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
        private tbc_clienteService: Tbc_clienteService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_clienteService.find(id).subscribe(tbc_cliente => {
                tbc_cliente.directiva_data_atu = this.datePipe.transform(tbc_cliente.directiva_data_atu, 'yyyy-MM-ddThh:mm');
                this.tbc_clienteModalRef(component, tbc_cliente);
            });
        } else {
            return this.tbc_clienteModalRef(component, new Tbc_cliente());
        }
    }

    tbc_clienteModalRef(component: Component, tbc_cliente: Tbc_cliente): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_cliente = tbc_cliente;
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
