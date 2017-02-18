import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Tbc_instituicao } from './tbc-instituicao.model';
import { Tbc_instituicaoService } from './tbc-instituicao.service';
@Injectable()
export class Tbc_instituicaoPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private router: Router,
        private tbc_instituicaoService: Tbc_instituicaoService

    ) {}

    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.tbc_instituicaoService.find(id).subscribe(tbc_instituicao => {
                this.tbc_instituicaoModalRef(component, tbc_instituicao);
            });
        } else {
            return this.tbc_instituicaoModalRef(component, new Tbc_instituicao());
        }
    }

    tbc_instituicaoModalRef(component: Component, tbc_instituicao: Tbc_instituicao): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.tbc_instituicao = tbc_instituicao;
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
