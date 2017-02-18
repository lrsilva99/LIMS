import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Tbc_frases_opcoes } from './tbc-frases-opcoes.model';
import { Tbc_frases_opcoesService } from './tbc-frases-opcoes.service';

@Component({
    selector: 'jhi-tbc-frases-opcoes-detail',
    templateUrl: './tbc-frases-opcoes-detail.component.html'
})
export class Tbc_frases_opcoesDetailComponent implements OnInit, OnDestroy {

    tbc_frases_opcoes: Tbc_frases_opcoes;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_frases_opcoesService: Tbc_frases_opcoesService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_frases_opcoes']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_frases_opcoesService.find(id).subscribe(tbc_frases_opcoes => {
            this.tbc_frases_opcoes = tbc_frases_opcoes;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
