import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Tbc_analises_componente } from './tbc-analises-componente.model';
import { Tbc_analises_componenteService } from './tbc-analises-componente.service';

@Component({
    selector: 'jhi-tbc-analises-componente-detail',
    templateUrl: './tbc-analises-componente-detail.component.html'
})
export class Tbc_analises_componenteDetailComponent implements OnInit, OnDestroy {

    tbc_analises_componente: Tbc_analises_componente;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private tbc_analises_componenteService: Tbc_analises_componenteService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_analises_componente']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_analises_componenteService.find(id).subscribe(tbc_analises_componente => {
            this.tbc_analises_componente = tbc_analises_componente;
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
