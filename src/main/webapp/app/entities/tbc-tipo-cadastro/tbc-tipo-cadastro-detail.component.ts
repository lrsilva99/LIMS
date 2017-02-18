import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Tbc_tipo_cadastro } from './tbc-tipo-cadastro.model';
import { Tbc_tipo_cadastroService } from './tbc-tipo-cadastro.service';

@Component({
    selector: 'jhi-tbc-tipo-cadastro-detail',
    templateUrl: './tbc-tipo-cadastro-detail.component.html'
})
export class Tbc_tipo_cadastroDetailComponent implements OnInit, OnDestroy {

    tbc_tipo_cadastro: Tbc_tipo_cadastro;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_tipo_cadastroService: Tbc_tipo_cadastroService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_tipo_cadastro']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_tipo_cadastroService.find(id).subscribe(tbc_tipo_cadastro => {
            this.tbc_tipo_cadastro = tbc_tipo_cadastro;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
