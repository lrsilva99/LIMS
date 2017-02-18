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
import { Tbc_analisesDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-analises/tbc-analises-detail.component';
import { Tbc_analisesService } from '../../../../../../main/webapp/app/entities/tbc-analises/tbc-analises.service';
import { Tbc_analises } from '../../../../../../main/webapp/app/entities/tbc-analises/tbc-analises.model';

describe('Component Tests', () => {

    describe('Tbc_analises Management Detail Component', () => {
        let comp: Tbc_analisesDetailComponent;
        let fixture: ComponentFixture<Tbc_analisesDetailComponent>;
        let service: Tbc_analisesService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_analisesDetailComponent],
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
                    Tbc_analisesService
                ]
            }).overrideComponent(Tbc_analisesDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_analisesDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_analisesService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_analises(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_analises).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
