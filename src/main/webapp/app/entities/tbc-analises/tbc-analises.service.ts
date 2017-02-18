import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Tbc_analises } from './tbc-analises.model';
import { DateUtils } from 'ng-jhipster';
@Injectable()
export class Tbc_analisesService {

    private resourceUrl = 'api/tbc-analises';
    private resourceSearchUrl = 'api/_search/tbc-analises';

    constructor(private http: Http, private dateUtils: DateUtils) { }

    create(tbc_analises: Tbc_analises): Observable<Tbc_analises> {
        let copy: Tbc_analises = Object.assign({}, tbc_analises);
        copy.directiva_data_atu = this.dateUtils.toDate(tbc_analises.directiva_data_atu);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(tbc_analises: Tbc_analises): Observable<Tbc_analises> {
        let copy: Tbc_analises = Object.assign({}, tbc_analises);

        copy.directiva_data_atu = this.dateUtils.toDate(tbc_analises.directiva_data_atu);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Tbc_analises> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            let jsonResponse = res.json();
            jsonResponse.directiva_data_atu = this.dateUtils
                .convertDateTimeFromServer(jsonResponse.directiva_data_atu);
            return jsonResponse;
        });
    }

    query(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
            .map((res: any) => this.convertResponse(res))
        ;
    }

    private convertResponse(res: any): any {
        let jsonResponse = res.json();
        for (let i = 0; i < jsonResponse.length; i++) {
            jsonResponse[i].directiva_data_atu = this.dateUtils
                .convertDateTimeFromServer(jsonResponse[i].directiva_data_atu);
        }
        res._body = jsonResponse;
        return res;
    }

    private createRequestOption(req?: any): BaseRequestOptions {
        let options: BaseRequestOptions = new BaseRequestOptions();
        if (req) {
            let params: URLSearchParams = new URLSearchParams();
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
            params.set('query', req.query);

            options.search = params;
        }
        return options;
    }
}
