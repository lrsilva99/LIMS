import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_grupo_clienteComponent } from './tbc-grupo-cliente.component';
import { Tbc_grupo_clienteDetailComponent } from './tbc-grupo-cliente-detail.component';
import { Tbc_grupo_clientePopupComponent } from './tbc-grupo-cliente-dialog.component';
import { Tbc_grupo_clienteDeletePopupComponent } from './tbc-grupo-cliente-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_grupo_clienteResolvePagingParams implements Resolve<any> {

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

export const tbc_grupo_clienteRoute: Routes = [
  {
    path: 'tbc-grupo-cliente',
    component: Tbc_grupo_clienteComponent,
    resolve: {
      'pagingParams': Tbc_grupo_clienteResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_grupo_cliente.home.title'
    }
  }, {
    path: 'tbc-grupo-cliente/:id',
    component: Tbc_grupo_clienteDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_grupo_cliente.home.title'
    }
  }
];

export const tbc_grupo_clientePopupRoute: Routes = [
  {
    path: 'tbc-grupo-cliente-new',
    component: Tbc_grupo_clientePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_grupo_cliente.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-grupo-cliente/:id/edit',
    component: Tbc_grupo_clientePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_grupo_cliente.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-grupo-cliente/:id/delete',
    component: Tbc_grupo_clienteDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_grupo_cliente.home.title'
    },
    outlet: 'popup'
  }
];
