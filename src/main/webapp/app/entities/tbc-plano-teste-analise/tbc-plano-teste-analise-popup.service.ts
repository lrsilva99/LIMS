import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_plano_teste_analise } from './tbc-plano-teste-analise.model';
import { Tbc_plano_teste_analiseService } from './tbc-plano-teste-analise.service';
@Injectable()
export class Tbc_plano_teste_analisePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_plano_teste_analiseService: Tbc_plano_teste_analiseService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_plano_teste_analiseService.find(id).subscribe(tbc_plano_teste_analise => {
                this.tbc_plano_teste_analiseModalRef(component, tbc_plano_teste_analise);
            });
        } else {
            return this.tbc_plano_teste_analiseModalRef(component, new Tbc_plano_teste_analise());
        }
    }

    tbc_plano_teste_analiseModalRef(component: Component, tbc_plano_teste_analise: Tbc_plano_teste_analise): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_plano_teste_analise = tbc_plano_teste_analise;
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
