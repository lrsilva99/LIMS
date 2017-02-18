import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Tbc_instituicao } from './tbc-instituicao.model';
import { Tbc_instituicaoService } from './tbc-instituicao.service';

@Component({
    selector: 'jhi-tbc-instituicao-detail',
    templateUrl: './tbc-instituicao-detail.component.html'
})
export class Tbc_instituicaoDetailComponent implements OnInit, OnDestroy {

    tbc_instituicao: Tbc_instituicao;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_instituicaoService: Tbc_instituicaoService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_instituicao']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_instituicaoService.find(id).subscribe(tbc_instituicao => {
            this.tbc_instituicao = tbc_instituicao;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
