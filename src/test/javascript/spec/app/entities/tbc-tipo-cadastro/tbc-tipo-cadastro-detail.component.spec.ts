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
import { Tbc_tipo_cadastroDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-tipo-cadastro/tbc-tipo-cadastro-detail.component';
import { Tbc_tipo_cadastroService } from '../../../../../../main/webapp/app/entities/tbc-tipo-cadastro/tbc-tipo-cadastro.service';
import { Tbc_tipo_cadastro } from '../../../../../../main/webapp/app/entities/tbc-tipo-cadastro/tbc-tipo-cadastro.model';

describe('Component Tests', () => {

    describe('Tbc_tipo_cadastro Management Detail Component', () => {
        let comp: Tbc_tipo_cadastroDetailComponent;
        let fixture: ComponentFixture<Tbc_tipo_cadastroDetailComponent>;
        let service: Tbc_tipo_cadastroService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_tipo_cadastroDetailComponent],
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
                    Tbc_tipo_cadastroService
                ]
            }).overrideComponent(Tbc_tipo_cadastroDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_tipo_cadastroDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_tipo_cadastroService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_tipo_cadastro(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_tipo_cadastro).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
