import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_frases } from './tbc-frases.model';
import { Tbc_frasesService } from './tbc-frases.service';
@Injectable()
export class Tbc_frasesPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_frasesService: Tbc_frasesService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_frasesService.find(id).subscribe(tbc_frases => {
                this.tbc_frasesModalRef(component, tbc_frases);
            });
        } else {
            return this.tbc_frasesModalRef(component, new Tbc_frases());
        }
    }

    tbc_frasesModalRef(component: Component, tbc_frases: Tbc_frases): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_frases = tbc_frases;
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
