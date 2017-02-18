import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Tbc_plano_teste } from './tbc-plano-teste.model';
import { Tbc_plano_testeService } from './tbc-plano-teste.service';

@Component({
    selector: 'jhi-tbc-plano-teste-detail',
    templateUrl: './tbc-plano-teste-detail.component.html'
})
export class Tbc_plano_testeDetailComponent implements OnInit, OnDestroy {

    tbc_plano_teste: Tbc_plano_teste;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private tbc_plano_testeService: Tbc_plano_testeService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_plano_teste']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_plano_testeService.find(id).subscribe(tbc_plano_teste => {
            this.tbc_plano_teste = tbc_plano_teste;
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
