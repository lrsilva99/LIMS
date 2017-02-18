import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_plano_teste_analiseComponent } from './tbc-plano-teste-analise.component';
import { Tbc_plano_teste_analiseDetailComponent } from './tbc-plano-teste-analise-detail.component';
import { Tbc_plano_teste_analisePopupComponent } from './tbc-plano-teste-analise-dialog.component';
import { Tbc_plano_teste_analiseDeletePopupComponent } from './tbc-plano-teste-analise-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_plano_teste_analiseResolvePagingParams implements Resolve<any> {

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

export const tbc_plano_teste_analiseRoute: Routes = [
  {
    path: 'tbc-plano-teste-analise',
    component: Tbc_plano_teste_analiseComponent,
    resolve: {
      'pagingParams': Tbc_plano_teste_analiseResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_plano_teste_analise.home.title'
    }
  }, {
    path: 'tbc-plano-teste-analise/:id',
    component: Tbc_plano_teste_analiseDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_plano_teste_analise.home.title'
    }
  }
];

export const tbc_plano_teste_analisePopupRoute: Routes = [
  {
    path: 'tbc-plano-teste-analise-new',
    component: Tbc_plano_teste_analisePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_plano_teste_analise.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-plano-teste-analise/:id/edit',
    component: Tbc_plano_teste_analisePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_plano_teste_analise.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-plano-teste-analise/:id/delete',
    component: Tbc_plano_teste_analiseDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_plano_teste_analise.home.title'
    },
    outlet: 'popup'
  }
];
