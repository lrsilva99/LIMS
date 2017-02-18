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
import { Tbc_plano_testeDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-plano-teste/tbc-plano-teste-detail.component';
import { Tbc_plano_testeService } from '../../../../../../main/webapp/app/entities/tbc-plano-teste/tbc-plano-teste.service';
import { Tbc_plano_teste } from '../../../../../../main/webapp/app/entities/tbc-plano-teste/tbc-plano-teste.model';

describe('Component Tests', () => {

    describe('Tbc_plano_teste Management Detail Component', () => {
        let comp: Tbc_plano_testeDetailComponent;
        let fixture: ComponentFixture<Tbc_plano_testeDetailComponent>;
        let service: Tbc_plano_testeService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_plano_testeDetailComponent],
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
                    Tbc_plano_testeService
                ]
            }).overrideComponent(Tbc_plano_testeDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_plano_testeDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_plano_testeService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_plano_teste(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_plano_teste).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
