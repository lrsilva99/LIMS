import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_tipo_campoComponent } from './tbc-tipo-campo.component';
import { Tbc_tipo_campoDetailComponent } from './tbc-tipo-campo-detail.component';
import { Tbc_tipo_campoPopupComponent } from './tbc-tipo-campo-dialog.component';
import { Tbc_tipo_campoDeletePopupComponent } from './tbc-tipo-campo-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_tipo_campoResolvePagingParams implements Resolve<any> {

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

export const tbc_tipo_campoRoute: Routes = [
  {
    path: 'tbc-tipo-campo',
    component: Tbc_tipo_campoComponent,
    resolve: {
      'pagingParams': Tbc_tipo_campoResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_tipo_campo.home.title'
    }
  }, {
    path: 'tbc-tipo-campo/:id',
    component: Tbc_tipo_campoDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_tipo_campo.home.title'
    }
  }
];

export const tbc_tipo_campoPopupRoute: Routes = [
  {
    path: 'tbc-tipo-campo-new',
    component: Tbc_tipo_campoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_tipo_campo.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-tipo-campo/:id/edit',
    component: Tbc_tipo_campoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_tipo_campo.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-tipo-campo/:id/delete',
    component: Tbc_tipo_campoDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_tipo_campo.home.title'
    },
    outlet: 'popup'
  }
];
