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
import { Tbc_sub_grupoDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-sub-grupo/tbc-sub-grupo-detail.component';
import { Tbc_sub_grupoService } from '../../../../../../main/webapp/app/entities/tbc-sub-grupo/tbc-sub-grupo.service';
import { Tbc_sub_grupo } from '../../../../../../main/webapp/app/entities/tbc-sub-grupo/tbc-sub-grupo.model';

describe('Component Tests', () => {

    describe('Tbc_sub_grupo Management Detail Component', () => {
        let comp: Tbc_sub_grupoDetailComponent;
        let fixture: ComponentFixture<Tbc_sub_grupoDetailComponent>;
        let service: Tbc_sub_grupoService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_sub_grupoDetailComponent],
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
                    Tbc_sub_grupoService
                ]
            }).overrideComponent(Tbc_sub_grupoDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_sub_grupoDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_sub_grupoService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_sub_grupo(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_sub_grupo).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
