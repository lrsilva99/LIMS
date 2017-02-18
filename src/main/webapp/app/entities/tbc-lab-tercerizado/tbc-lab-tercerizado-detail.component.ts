import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Tbc_lab_tercerizado } from './tbc-lab-tercerizado.model';
import { Tbc_lab_tercerizadoService } from './tbc-lab-tercerizado.service';

@Component({
    selector: 'jhi-tbc-lab-tercerizado-detail',
    templateUrl: './tbc-lab-tercerizado-detail.component.html'
})
export class Tbc_lab_tercerizadoDetailComponent implements OnInit, OnDestroy {

    tbc_lab_tercerizado: Tbc_lab_tercerizado;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private tbc_lab_tercerizadoService: Tbc_lab_tercerizadoService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_lab_tercerizado']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_lab_tercerizadoService.find(id).subscribe(tbc_lab_tercerizado => {
            this.tbc_lab_tercerizado = tbc_lab_tercerizado;
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
