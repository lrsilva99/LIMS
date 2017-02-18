import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Tbc_tipo_campo } from './tbc-tipo-campo.model';
import { Tbc_tipo_campoService } from './tbc-tipo-campo.service';

@Component({
    selector: 'jhi-tbc-tipo-campo-detail',
    templateUrl: './tbc-tipo-campo-detail.component.html'
})
export class Tbc_tipo_campoDetailComponent implements OnInit, OnDestroy {

    tbc_tipo_campo: Tbc_tipo_campo;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_tipo_campoService: Tbc_tipo_campoService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_tipo_campo']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_tipo_campoService.find(id).subscribe(tbc_tipo_campo => {
            this.tbc_tipo_campo = tbc_tipo_campo;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
