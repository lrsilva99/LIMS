import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils } from 'ng-jhipster';
import { JhiLanguageService } from 'ng-jhipster';
import { MockLanguageService } from '../../../helpers/mock-language.service';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { Tbc_reportDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-report/tbc-report-detail.component';
import { Tbc_reportService } from '../../../../../../main/webapp/app/entities/tbc-report/tbc-report.service';
import { Tbc_report } from '../../../../../../main/webapp/app/entities/tbc-report/tbc-report.model';

describe('Component Tests', () => {

    describe('Tbc_report Management Detail Component', () => {
        let comp: Tbc_reportDetailComponent;
        let fixture: ComponentFixture<Tbc_reportDetailComponent>;
        let service: Tbc_reportService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_reportDetailComponent],
                providers: [
                    MockBackend,
                    BaseRequestOptions,
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    {
                        provide: Http,
                        useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                            return new Http(backendInstance, defaultOptions);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    {
                        provide: JhiLanguageService,
                        useClass: MockLanguageService
                    },
                    Tbc_reportService
                ]
            }).overrideComponent(Tbc_reportDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_reportDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_reportService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_report(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_report).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
