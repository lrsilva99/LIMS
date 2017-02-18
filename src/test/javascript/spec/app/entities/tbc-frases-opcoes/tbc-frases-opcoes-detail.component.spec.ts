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
import { Tbc_frases_opcoesDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-frases-opcoes/tbc-frases-opcoes-detail.component';
import { Tbc_frases_opcoesService } from '../../../../../../main/webapp/app/entities/tbc-frases-opcoes/tbc-frases-opcoes.service';
import { Tbc_frases_opcoes } from '../../../../../../main/webapp/app/entities/tbc-frases-opcoes/tbc-frases-opcoes.model';

describe('Component Tests', () => {

    describe('Tbc_frases_opcoes Management Detail Component', () => {
        let comp: Tbc_frases_opcoesDetailComponent;
        let fixture: ComponentFixture<Tbc_frases_opcoesDetailComponent>;
        let service: Tbc_frases_opcoesService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_frases_opcoesDetailComponent],
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
                    Tbc_frases_opcoesService
                ]
            }).overrideComponent(Tbc_frases_opcoesDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_frases_opcoesDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_frases_opcoesService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_frases_opcoes(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_frases_opcoes).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
