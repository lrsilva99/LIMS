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
import { Tbc_analises_componenteDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-analises-componente/tbc-analises-componente-detail.component';
import { Tbc_analises_componenteService } from '../../../../../../main/webapp/app/entities/tbc-analises-componente/tbc-analises-componente.service';
import { Tbc_analises_componente } from '../../../../../../main/webapp/app/entities/tbc-analises-componente/tbc-analises-componente.model';

describe('Component Tests', () => {

    describe('Tbc_analises_componente Management Detail Component', () => {
        let comp: Tbc_analises_componenteDetailComponent;
        let fixture: ComponentFixture<Tbc_analises_componenteDetailComponent>;
        let service: Tbc_analises_componenteService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_analises_componenteDetailComponent],
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
                    Tbc_analises_componenteService
                ]
            }).overrideComponent(Tbc_analises_componenteDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_analises_componenteDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_analises_componenteService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_analises_componente(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_analises_componente).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
