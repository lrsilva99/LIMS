import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_analisesComponent } from './tbc-analises.component';
import { Tbc_analisesDetailComponent } from './tbc-analises-detail.component';
import { Tbc_analisesPopupComponent } from './tbc-analises-dialog.component';
import { Tbc_analisesDeletePopupComponent } from './tbc-analises-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_analisesResolvePagingParams implements Resolve<any> {

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

export const tbc_analisesRoute: Routes = [
  {
    path: 'tbc-analises',
    component: Tbc_analisesComponent,
    resolve: {
      'pagingParams': Tbc_analisesResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_analises.home.title'
    }
  }, {
    path: 'tbc-analises/:id',
    component: Tbc_analisesDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_analises.home.title'
    }
  }
];

export const tbc_analisesPopupRoute: Routes = [
  {
    path: 'tbc-analises-new',
    component: Tbc_analisesPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_analises.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-analises/:id/edit',
    component: Tbc_analisesPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_analises.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-analises/:id/delete',
    component: Tbc_analisesDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_analises.home.title'
    },
    outlet: 'popup'
  }
];
