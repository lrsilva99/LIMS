import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Tbc_analises_componente } from './tbc-analises-componente.model';
@Injectable()
export class Tbc_analises_componenteService {

    private resourceUrl = 'api/tbc-analises-componentes';
    private resourceSearchUrl = 'api/_search/tbc-analises-componentes';

    constructor(private http: Http) { }

    create(tbc_analises_componente: Tbc_analises_componente): Observable<Tbc_analises_componente> {
        let copy: Tbc_analises_componente = Object.assign({}, tbc_analises_componente);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(tbc_analises_componente: Tbc_analises_componente): Observable<Tbc_analises_componente> {
        let copy: Tbc_analises_componente = Object.assign({}, tbc_analises_componente);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Tbc_analises_componente> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
        ;
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    search(req?: any): Observable<Response> {
        let options = this.createRequestOption(req);
        return this.http.get(this.resourceSearchUrl, options)
        ;
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
