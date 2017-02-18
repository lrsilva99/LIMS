import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Tbc_grupo_analise } from './tbc-grupo-analise.model';
import { Tbc_grupo_analiseService } from './tbc-grupo-analise.service';

@Component({
    selector: 'jhi-tbc-grupo-analise-detail',
    templateUrl: './tbc-grupo-analise-detail.component.html'
})
export class Tbc_grupo_analiseDetailComponent implements OnInit, OnDestroy {

    tbc_grupo_analise: Tbc_grupo_analise;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_grupo_analiseService: Tbc_grupo_analiseService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_grupo_analise']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_grupo_analiseService.find(id).subscribe(tbc_grupo_analise => {
            this.tbc_grupo_analise = tbc_grupo_analise;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
