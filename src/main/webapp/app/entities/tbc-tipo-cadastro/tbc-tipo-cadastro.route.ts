import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_tipo_cadastroComponent } from './tbc-tipo-cadastro.component';
import { Tbc_tipo_cadastroDetailComponent } from './tbc-tipo-cadastro-detail.component';
import { Tbc_tipo_cadastroPopupComponent } from './tbc-tipo-cadastro-dialog.component';
import { Tbc_tipo_cadastroDeletePopupComponent } from './tbc-tipo-cadastro-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_tipo_cadastroResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const tbc_tipo_cadastroRoute: Routes = [
  {
    path: 'tbc-tipo-cadastro',
    component: Tbc_tipo_cadastroComponent,
    resolve: {
      'pagingParams': Tbc_tipo_cadastroResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_tipo_cadastro.home.title'
    }
  }, {
    path: 'tbc-tipo-cadastro/:id',
    component: Tbc_tipo_cadastroDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_tipo_cadastro.home.title'
    }
  }
];

export const tbc_tipo_cadastroPopupRoute: Routes = [
  {
    path: 'tbc-tipo-cadastro-new',
    component: Tbc_tipo_cadastroPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_tipo_cadastro.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-tipo-cadastro/:id/edit',
    component: Tbc_tipo_cadastroPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_tipo_cadastro.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-tipo-cadastro/:id/delete',
    component: Tbc_tipo_cadastroDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_tipo_cadastro.home.title'
    },
    outlet: 'popup'
  }
];
