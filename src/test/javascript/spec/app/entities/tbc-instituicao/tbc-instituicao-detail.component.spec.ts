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
import { Tbc_instituicaoDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-instituicao/tbc-instituicao-detail.component';
import { Tbc_instituicaoService } from '../../../../../../main/webapp/app/entities/tbc-instituicao/tbc-instituicao.service';
import { Tbc_instituicao } from '../../../../../../main/webapp/app/entities/tbc-instituicao/tbc-instituicao.model';

describe('Component Tests', () => {

    describe('Tbc_instituicao Management Detail Component', () => {
        let comp: Tbc_instituicaoDetailComponent;
        let fixture: ComponentFixture<Tbc_instituicaoDetailComponent>;
        let service: Tbc_instituicaoService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_instituicaoDetailComponent],
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
                    Tbc_instituicaoService
                ]
            }).overrideComponent(Tbc_instituicaoDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_instituicaoDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_instituicaoService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_instituicao(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_instituicao).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
