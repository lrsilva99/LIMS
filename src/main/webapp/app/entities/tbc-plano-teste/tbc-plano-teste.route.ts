import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_plano_testeComponent } from './tbc-plano-teste.component';
import { Tbc_plano_testeDetailComponent } from './tbc-plano-teste-detail.component';
import { Tbc_plano_testePopupComponent } from './tbc-plano-teste-dialog.component';
import { Tbc_plano_testeDeletePopupComponent } from './tbc-plano-teste-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_plano_testeResolvePagingParams implements Resolve<any> {

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

export const tbc_plano_testeRoute: Routes = [
  {
    path: 'tbc-plano-teste',
    component: Tbc_plano_testeComponent,
    resolve: {
      'pagingParams': Tbc_plano_testeResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_plano_teste.home.title'
    }
  }, {
    path: 'tbc-plano-teste/:id',
    component: Tbc_plano_testeDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_plano_teste.home.title'
    }
  }
];

export const tbc_plano_testePopupRoute: Routes = [
  {
    path: 'tbc-plano-teste-new',
    component: Tbc_plano_testePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_plano_teste.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-plano-teste/:id/edit',
    component: Tbc_plano_testePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_plano_teste.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-plano-teste/:id/delete',
    component: Tbc_plano_testeDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_plano_teste.home.title'
    },
    outlet: 'popup'
  }
];
