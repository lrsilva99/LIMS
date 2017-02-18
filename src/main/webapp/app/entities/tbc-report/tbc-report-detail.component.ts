import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { Tbc_report } from './tbc-report.model';
import { Tbc_reportService } from './tbc-report.service';

@Component({
    selector: 'jhi-tbc-report-detail',
    templateUrl: './tbc-report-detail.component.html'
})
export class Tbc_reportDetailComponent implements OnInit, OnDestroy {

    tbc_report: Tbc_report;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private tbc_reportService: Tbc_reportService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['tbc_report']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.tbc_reportService.find(id).subscribe(tbc_report => {
            this.tbc_report = tbc_report;
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
