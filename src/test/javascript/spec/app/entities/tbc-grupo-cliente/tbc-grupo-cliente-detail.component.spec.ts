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
import { Tbc_grupo_clienteDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-grupo-cliente/tbc-grupo-cliente-detail.component';
import { Tbc_grupo_clienteService } from '../../../../../../main/webapp/app/entities/tbc-grupo-cliente/tbc-grupo-cliente.service';
import { Tbc_grupo_cliente } from '../../../../../../main/webapp/app/entities/tbc-grupo-cliente/tbc-grupo-cliente.model';

describe('Component Tests', () => {

    describe('Tbc_grupo_cliente Management Detail Component', () => {
        let comp: Tbc_grupo_clienteDetailComponent;
        let fixture: ComponentFixture<Tbc_grupo_clienteDetailComponent>;
        let service: Tbc_grupo_clienteService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_grupo_clienteDetailComponent],
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
                    Tbc_grupo_clienteService
                ]
            }).overrideComponent(Tbc_grupo_clienteDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_grupo_clienteDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_grupo_clienteService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_grupo_cliente(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_grupo_cliente).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
