import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_relatorio_ensaioComponent } from './tbc-relatorio-ensaio.component';
import { Tbc_relatorio_ensaioDetailComponent } from './tbc-relatorio-ensaio-detail.component';
import { Tbc_relatorio_ensaioPopupComponent } from './tbc-relatorio-ensaio-dialog.component';
import { Tbc_relatorio_ensaioDeletePopupComponent } from './tbc-relatorio-ensaio-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_relatorio_ensaioResolvePagingParams implements Resolve<any> {

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

export const tbc_relatorio_ensaioRoute: Routes = [
  {
    path: 'tbc-relatorio-ensaio',
    component: Tbc_relatorio_ensaioComponent,
    resolve: {
      'pagingParams': Tbc_relatorio_ensaioResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_relatorio_ensaio.home.title'
    }
  }, {
    path: 'tbc-relatorio-ensaio/:id',
    component: Tbc_relatorio_ensaioDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_relatorio_ensaio.home.title'
    }
  }
];

export const tbc_relatorio_ensaioPopupRoute: Routes = [
  {
    path: 'tbc-relatorio-ensaio-new',
    component: Tbc_relatorio_ensaioPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_relatorio_ensaio.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-relatorio-ensaio/:id/edit',
    component: Tbc_relatorio_ensaioPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_relatorio_ensaio.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-relatorio-ensaio/:id/delete',
    component: Tbc_relatorio_ensaioDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_relatorio_ensaio.home.title'
    },
    outlet: 'popup'
  }
];
