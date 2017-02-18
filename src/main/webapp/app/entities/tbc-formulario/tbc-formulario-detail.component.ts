import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Tbc_formulario } from './tbc-formulario.model';
import { Tbc_formularioService } from './tbc-formulario.service';

@Component({
    selector: 'jhi-tbc-formulario-detail',
    templateUrl: './tbc-formulario-detail.component.html'
})
export class Tbc_formularioDetailComponent implements OnInit, OnDestroy {

    tbc_formulario: Tbc_formulario;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_formularioService: Tbc_formularioService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_formulario']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_formularioService.find(id).subscribe(tbc_formulario => {
            this.tbc_formulario = tbc_formulario;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
