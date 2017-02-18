import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_analises_componenteComponent } from './tbc-analises-componente.component';
import { Tbc_analises_componenteDetailComponent } from './tbc-analises-componente-detail.component';
import { Tbc_analises_componentePopupComponent } from './tbc-analises-componente-dialog.component';
import { Tbc_analises_componenteDeletePopupComponent } from './tbc-analises-componente-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_analises_componenteResolvePagingParams implements Resolve<any> {

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

export const tbc_analises_componenteRoute: Routes = [
  {
    path: 'tbc-analises-componente',
    component: Tbc_analises_componenteComponent,
    resolve: {
      'pagingParams': Tbc_analises_componenteResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_analises_componente.home.title'
    }
  }, {
    path: 'tbc-analises-componente/:id',
    component: Tbc_analises_componenteDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_analises_componente.home.title'
    }
  }
];

export const tbc_analises_componentePopupRoute: Routes = [
  {
    path: 'tbc-analises-componente-new',
    component: Tbc_analises_componentePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_analises_componente.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-analises-componente/:id/edit',
    component: Tbc_analises_componentePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_analises_componente.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-analises-componente/:id/delete',
    component: Tbc_analises_componenteDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_analises_componente.home.title'
    },
    outlet: 'popup'
  }
];
