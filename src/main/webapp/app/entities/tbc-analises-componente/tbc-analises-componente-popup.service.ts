import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_analises_componente } from './tbc-analises-componente.model';
import { Tbc_analises_componenteService } from './tbc-analises-componente.service';
@Injectable()
export class Tbc_analises_componentePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_analises_componenteService: Tbc_analises_componenteService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_analises_componenteService.find(id).subscribe(tbc_analises_componente => {
                this.tbc_analises_componenteModalRef(component, tbc_analises_componente);
            });
        } else {
            return this.tbc_analises_componenteModalRef(component, new Tbc_analises_componente());
        }
    }

    tbc_analises_componenteModalRef(component: Component, tbc_analises_componente: Tbc_analises_componente): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_analises_componente = tbc_analises_componente;
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
