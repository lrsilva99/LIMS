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
import { Tbc_frasesDetailComponent } from '../../../../../../main/webapp/app/entities/tbc-frases/tbc-frases-detail.component';
import { Tbc_frasesService } from '../../../../../../main/webapp/app/entities/tbc-frases/tbc-frases.service';
import { Tbc_frases } from '../../../../../../main/webapp/app/entities/tbc-frases/tbc-frases.model';

describe('Component Tests', () => {

    describe('Tbc_frases Management Detail Component', () => {
        let comp: Tbc_frasesDetailComponent;
        let fixture: ComponentFixture<Tbc_frasesDetailComponent>;
        let service: Tbc_frasesService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [Tbc_frasesDetailComponent],
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
                    Tbc_frasesService
                ]
            }).overrideComponent(Tbc_frasesDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(Tbc_frasesDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(Tbc_frasesService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Tbc_frases(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.tbc_frases).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
