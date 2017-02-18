import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Tbc_relatorio_ensaio } from './tbc-relatorio-ensaio.model';
import { Tbc_relatorio_ensaioService } from './tbc-relatorio-ensaio.service';

@Component({
    selector: 'jhi-tbc-relatorio-ensaio-detail',
    templateUrl: './tbc-relatorio-ensaio-detail.component.html'
})
export class Tbc_relatorio_ensaioDetailComponent implements OnInit, OnDestroy {

    tbc_relatorio_ensaio: Tbc_relatorio_ensaio;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private tbc_relatorio_ensaioService: Tbc_relatorio_ensaioService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_relatorio_ensaio']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_relatorio_ensaioService.find(id).subscribe(tbc_relatorio_ensaio => {
            this.tbc_relatorio_ensaio = tbc_relatorio_ensaio;
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
