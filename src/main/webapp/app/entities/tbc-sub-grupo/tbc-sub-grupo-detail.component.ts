import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { Tbc_sub_grupo } from './tbc-sub-grupo.model';
import { Tbc_sub_grupoService } from './tbc-sub-grupo.service';

@Component({
    selector: 'jhi-tbc-sub-grupo-detail',
    templateUrl: './tbc-sub-grupo-detail.component.html'
})
export class Tbc_sub_grupoDetailComponent implements OnInit, OnDestroy {

    tbc_sub_grupo: Tbc_sub_grupo;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private tbc_sub_grupoService: Tbc_sub_grupoService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_sub_grupo']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_sub_grupoService.find(id).subscribe(tbc_sub_grupo => {
            this.tbc_sub_grupo = tbc_sub_grupo;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
