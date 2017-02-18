import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_grupo_analise } from './tbc-grupo-analise.model';
import { Tbc_grupo_analiseService } from './tbc-grupo-analise.service';
@Injectable()
export class Tbc_grupo_analisePopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_grupo_analiseService: Tbc_grupo_analiseService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_grupo_analiseService.find(id).subscribe(tbc_grupo_analise => {
                this.tbc_grupo_analiseModalRef(component, tbc_grupo_analise);
            });
        } else {
            return this.tbc_grupo_analiseModalRef(component, new Tbc_grupo_analise());
        }
    }

    tbc_grupo_analiseModalRef(component: Component, tbc_grupo_analise: Tbc_grupo_analise): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_grupo_analise = tbc_grupo_analise;
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
