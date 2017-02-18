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
import { Tbc_relatorio_ensaioDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-relatorio-ensaio/tbc-relatorio-ensaio-detail.component';
import { Tbc_relatorio_ensaioService } from '../../../../../../main/webapp/app/entities/tbc-relatorio-ensaio/tbc-relatorio-ensaio.service';
import { Tbc_relatorio_ensaio } from '../../../../../../main/webapp/app/entities/tbc-relatorio-ensaio/tbc-relatorio-ensaio.model';

describe('Component Tests', () => {

    describe('Tbc_relatorio_ensaio Management Detail Component', () => {
        let comp: Tbc_relatorio_ensaioDetailComponent;
        let fixture: ComponentFixture<Tbc_relatorio_ensaioDetailComponent>;
        let service: Tbc_relatorio_ensaioService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_relatorio_ensaioDetailComponent],
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
                    Tbc_relatorio_ensaioService
                ]
            }).overrideComponent(Tbc_relatorio_ensaioDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_relatorio_ensaioDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_relatorio_ensaioService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_relatorio_ensaio(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_relatorio_ensaio).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
