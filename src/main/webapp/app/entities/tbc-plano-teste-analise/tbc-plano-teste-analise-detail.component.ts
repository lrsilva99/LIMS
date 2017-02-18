import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Tbc_plano_teste_analise } from './tbc-plano-teste-analise.model';
import { Tbc_plano_teste_analiseService } from './tbc-plano-teste-analise.service';

@Component({
    selector: 'jhi-tbc-plano-teste-analise-detail',
    templateUrl: './tbc-plano-teste-analise-detail.component.html'
})
export class Tbc_plano_teste_analiseDetailComponent implements OnInit, OnDestroy {

    tbc_plano_teste_analise: Tbc_plano_teste_analise;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_plano_teste_analiseService: Tbc_plano_teste_analiseService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_plano_teste_analise']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_plano_teste_analiseService.find(id).subscribe(tbc_plano_teste_analise => {
            this.tbc_plano_teste_analise = tbc_plano_teste_analise;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
