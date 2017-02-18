import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Tbc_analises } from './tbc-analises.model';
import { Tbc_analisesService } from './tbc-analises.service';

@Component({
    selector: 'jhi-tbc-analises-detail',
    templateUrl: './tbc-analises-detail.component.html'
})
export class Tbc_analisesDetailComponent implements OnInit, OnDestroy {

    tbc_analises: Tbc_analises;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private tbc_analisesService: Tbc_analisesService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_analises']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_analisesService.find(id).subscribe(tbc_analises => {
            this.tbc_analises = tbc_analises;
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
