import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Tbc_tipo_cadastro } from './tbc-tipo-cadastro.model';
@Injectable()
export class Tbc_tipo_cadastroService {

    private resourceUrl = 'api/tbc-tipo-cadastros';
    private resourceSearchUrl = 'api/_search/tbc-tipo-cadastros';

    constructor(private http: Http) { }

    create(tbc_tipo_cadastro: Tbc_tipo_cadastro): Observable<Tbc_tipo_cadastro> {
        let copy: Tbc_tipo_cadastro = Object.assign({}, tbc_tipo_cadastro);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(tbc_tipo_cadastro: Tbc_tipo_cadastro): Observable<Tbc_tipo_cadastro> {
        let copy: Tbc_tipo_cadastro = Object.assign({}, tbc_tipo_cadastro);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<Tbc_tipo_cadastro> {
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
