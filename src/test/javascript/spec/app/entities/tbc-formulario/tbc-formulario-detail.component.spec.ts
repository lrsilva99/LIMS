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
import { Tbc_formularioDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-formulario/tbc-formulario-detail.component';
import { Tbc_formularioService } from '../../../../../../main/webapp/app/entities/tbc-formulario/tbc-formulario.service';
import { Tbc_formulario } from '../../../../../../main/webapp/app/entities/tbc-formulario/tbc-formulario.model';

describe('Component Tests', () => {

    describe('Tbc_formulario Management Detail Component', () => {
        let comp: Tbc_formularioDetailComponent;
        let fixture: ComponentFixture<Tbc_formularioDetailComponent>;
        let service: Tbc_formularioService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_formularioDetailComponent],
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
                    Tbc_formularioService
                ]
            }).overrideComponent(Tbc_formularioDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_formularioDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_formularioService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_formulario(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_formulario).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
