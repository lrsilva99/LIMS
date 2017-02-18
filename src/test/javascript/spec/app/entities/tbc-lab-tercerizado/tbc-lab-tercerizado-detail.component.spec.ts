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
import { Tbc_lab_tercerizadoDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-lab-tercerizado/tbc-lab-tercerizado-detail.component';
import { Tbc_lab_tercerizadoService } from '../../../../../../main/webapp/app/entities/tbc-lab-tercerizado/tbc-lab-tercerizado.service';
import { Tbc_lab_tercerizado } from '../../../../../../main/webapp/app/entities/tbc-lab-tercerizado/tbc-lab-tercerizado.model';

describe('Component Tests', () => {

    describe('Tbc_lab_tercerizado Management Detail Component', () => {
        let comp: Tbc_lab_tercerizadoDetailComponent;
        let fixture: ComponentFixture<Tbc_lab_tercerizadoDetailComponent>;
        let service: Tbc_lab_tercerizadoService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_lab_tercerizadoDetailComponent],
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
                    Tbc_lab_tercerizadoService
                ]
            }).overrideComponent(Tbc_lab_tercerizadoDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_lab_tercerizadoDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_lab_tercerizadoService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_lab_tercerizado(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_lab_tercerizado).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
