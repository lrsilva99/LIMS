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
import { Tbc_tipo_campoDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-tipo-campo/tbc-tipo-campo-detail.component';
import { Tbc_tipo_campoService } from '../../../../../../main/webapp/app/entities/tbc-tipo-campo/tbc-tipo-campo.service';
import { Tbc_tipo_campo } from '../../../../../../main/webapp/app/entities/tbc-tipo-campo/tbc-tipo-campo.model';

describe('Component Tests', () => {

    describe('Tbc_tipo_campo Management Detail Component', () => {
        let comp: Tbc_tipo_campoDetailComponent;
        let fixture: ComponentFixture<Tbc_tipo_campoDetailComponent>;
        let service: Tbc_tipo_campoService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_tipo_campoDetailComponent],
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
                    Tbc_tipo_campoService
                ]
            }).overrideComponent(Tbc_tipo_campoDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_tipo_campoDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_tipo_campoService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_tipo_campo(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_tipo_campo).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
