import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Tbc_grupo_cliente } from './tbc-grupo-cliente.model';
import { Tbc_grupo_clienteService } from './tbc-grupo-cliente.service';

@Component({
    selector: 'jhi-tbc-grupo-cliente-detail',
    templateUrl: './tbc-grupo-cliente-detail.component.html'
})
export class Tbc_grupo_clienteDetailComponent implements OnInit, OnDestroy {

    tbc_grupo_cliente: Tbc_grupo_cliente;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private tbc_grupo_clienteService: Tbc_grupo_clienteService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_grupo_cliente']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_grupo_clienteService.find(id).subscribe(tbc_grupo_cliente => {
            this.tbc_grupo_cliente = tbc_grupo_cliente;
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
