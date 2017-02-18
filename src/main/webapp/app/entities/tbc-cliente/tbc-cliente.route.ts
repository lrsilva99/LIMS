import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_clienteComponent } from './tbc-cliente.component';
import { Tbc_clienteDetailComponent } from './tbc-cliente-detail.component';
import { Tbc_clientePopupComponent } from './tbc-cliente-dialog.component';
import { Tbc_clienteDeletePopupComponent } from './tbc-cliente-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_clienteResolvePagingParams implements Resolve<any> {

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

export const tbc_clienteRoute: Routes = [
  {
    path: 'tbc-cliente',
    component: Tbc_clienteComponent,
    resolve: {
      'pagingParams': Tbc_clienteResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_cliente.home.title'
    }
  }, {
    path: 'tbc-cliente/:id',
    component: Tbc_clienteDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_cliente.home.title'
    }
  }
];

export const tbc_clientePopupRoute: Routes = [
  {
    path: 'tbc-cliente-new',
    component: Tbc_clientePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_cliente.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-cliente/:id/edit',
    component: Tbc_clientePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_cliente.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-cliente/:id/delete',
    component: Tbc_clienteDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_cliente.home.title'
    },
    outlet: 'popup'
  }
];
