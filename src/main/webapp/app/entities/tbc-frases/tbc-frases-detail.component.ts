import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Tbc_frases } from './tbc-frases.model';
import { Tbc_frasesService } from './tbc-frases.service';

@Component({
    selector: 'jhi-tbc-frases-detail',
    templateUrl: './tbc-frases-detail.component.html'
})
export class Tbc_frasesDetailComponent implements OnInit, OnDestroy {

    tbc_frases: Tbc_frases;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_frasesService: Tbc_frasesService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_frases']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_frasesService.find(id).subscribe(tbc_frases => {
            this.tbc_frases = tbc_frases;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
