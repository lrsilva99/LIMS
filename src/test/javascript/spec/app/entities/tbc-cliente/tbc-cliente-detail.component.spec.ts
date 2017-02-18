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
import { Tbc_clienteDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-cliente/tbc-cliente-detail.component';
import { Tbc_clienteService } from '../../../../../../main/webapp/app/entities/tbc-cliente/tbc-cliente.service';
import { Tbc_cliente } from '../../../../../../main/webapp/app/entities/tbc-cliente/tbc-cliente.model';

describe('Component Tests', () => {

    describe('Tbc_cliente Management Detail Component', () => {
        let comp: Tbc_clienteDetailComponent;
        let fixture: ComponentFixture<Tbc_clienteDetailComponent>;
        let service: Tbc_clienteService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_clienteDetailComponent],
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
                    Tbc_clienteService
                ]
            }).overrideComponent(Tbc_clienteDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_clienteDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_clienteService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_cliente(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_cliente).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
