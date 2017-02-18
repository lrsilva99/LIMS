import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_sub_grupoComponent } from './tbc-sub-grupo.component';
import { Tbc_sub_grupoDetailComponent } from './tbc-sub-grupo-detail.component';
import { Tbc_sub_grupoPopupComponent } from './tbc-sub-grupo-dialog.component';
import { Tbc_sub_grupoDeletePopupComponent } from './tbc-sub-grupo-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_sub_grupoResolvePagingParams implements Resolve<any> {

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

export const tbc_sub_grupoRoute: Routes = [
  {
    path: 'tbc-sub-grupo',
    component: Tbc_sub_grupoComponent,
    resolve: {
      'pagingParams': Tbc_sub_grupoResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_sub_grupo.home.title'
    }
  }, {
    path: 'tbc-sub-grupo/:id',
    component: Tbc_sub_grupoDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_sub_grupo.home.title'
    }
  }
];

export const tbc_sub_grupoPopupRoute: Routes = [
  {
    path: 'tbc-sub-grupo-new',
    component: Tbc_sub_grupoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_sub_grupo.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-sub-grupo/:id/edit',
    component: Tbc_sub_grupoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_sub_grupo.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-sub-grupo/:id/delete',
    component: Tbc_sub_grupoDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_sub_grupo.home.title'
    },
    outlet: 'popup'
  }
];
