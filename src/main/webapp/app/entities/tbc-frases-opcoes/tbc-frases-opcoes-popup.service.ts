import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_frases_opcoes } from './tbc-frases-opcoes.model';
import { Tbc_frases_opcoesService } from './tbc-frases-opcoes.service';
@Injectable()
export class Tbc_frases_opcoesPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_frases_opcoesService: Tbc_frases_opcoesService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_frases_opcoesService.find(id).subscribe(tbc_frases_opcoes => {
                this.tbc_frases_opcoesModalRef(component, tbc_frases_opcoes);
            });
        } else {
            return this.tbc_frases_opcoesModalRef(component, new Tbc_frases_opcoes());
        }
    }

    tbc_frases_opcoesModalRef(component: Component, tbc_frases_opcoes: Tbc_frases_opcoes): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_frases_opcoes = tbc_frases_opcoes;
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
