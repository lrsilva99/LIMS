import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Tbc_frases_opcoes } from './tbc-frases-opcoes.model';
@Injectable()
export class Tbc_frases_opcoesService {

    private resourceUrl = 'api/tbc-frases-opcoes';
    private resourceSearchUrl = 'api/_search/tbc-frases-opcoes';

    constructor(private http: Http) { }

    create(tbc_frases_opcoes: Tbc_frases_opcoes): Observable<Tbc_frases_opcoes> {
        let copy: Tbc_frases_opcoes = Object.assign({}, tbc_frases_opcoes);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(tbc_frases_opcoes: Tbc_frases_opcoes): Observable<Tbc_frases_opcoes> {
        let copy: Tbc_frases_opcoes = Object.assign({}, tbc_frases_opcoes);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Tbc_frases_opcoes> {
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
