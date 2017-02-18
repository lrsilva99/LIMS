import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_grupo_analiseComponent } from './tbc-grupo-analise.component';
import { Tbc_grupo_analiseDetailComponent } from './tbc-grupo-analise-detail.component';
import { Tbc_grupo_analisePopupComponent } from './tbc-grupo-analise-dialog.component';
import { Tbc_grupo_analiseDeletePopupComponent } from './tbc-grupo-analise-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_grupo_analiseResolvePagingParams implements Resolve<any> {

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

export const tbc_grupo_analiseRoute: Routes = [
  {
    path: 'tbc-grupo-analise',
    component: Tbc_grupo_analiseComponent,
    resolve: {
      'pagingParams': Tbc_grupo_analiseResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_grupo_analise.home.title'
    }
  }, {
    path: 'tbc-grupo-analise/:id',
    component: Tbc_grupo_analiseDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_grupo_analise.home.title'
    }
  }
];

export const tbc_grupo_analisePopupRoute: Routes = [
  {
    path: 'tbc-grupo-analise-new',
    component: Tbc_grupo_analisePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_grupo_analise.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-grupo-analise/:id/edit',
    component: Tbc_grupo_analisePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_grupo_analise.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-grupo-analise/:id/delete',
    component: Tbc_grupo_analiseDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_grupo_analise.home.title'
    },
    outlet: 'popup'
  }
];
