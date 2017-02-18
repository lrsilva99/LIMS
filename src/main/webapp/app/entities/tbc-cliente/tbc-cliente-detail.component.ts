import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Tbc_cliente } from './tbc-cliente.model';
import { Tbc_clienteService } from './tbc-cliente.service';

@Component({
    selector: 'jhi-tbc-cliente-detail',
    templateUrl: './tbc-cliente-detail.component.html'
})
export class Tbc_clienteDetailComponent implements OnInit, OnDestroy {

    tbc_cliente: Tbc_cliente;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private tbc_clienteService: Tbc_clienteService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_cliente']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_clienteService.find(id).subscribe(tbc_cliente => {
            this.tbc_cliente = tbc_cliente;
        });
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
