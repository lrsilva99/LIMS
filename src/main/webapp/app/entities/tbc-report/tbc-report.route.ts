import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_reportComponent } from './tbc-report.component';
import { Tbc_reportDetailComponent } from './tbc-report-detail.component';
import { Tbc_reportPopupComponent } from './tbc-report-dialog.component';
import { Tbc_reportDeletePopupComponent } from './tbc-report-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_reportResolvePagingParams implements Resolve<any> {

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

export const tbc_reportRoute: Routes = [
  {
    path: 'tbc-report',
    component: Tbc_reportComponent,
    resolve: {
      'pagingParams': Tbc_reportResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_report.home.title'
    }
  }, {
    path: 'tbc-report/:id',
    component: Tbc_reportDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_report.home.title'
    }
  }
];

export const tbc_reportPopupRoute: Routes = [
  {
    path: 'tbc-report-new',
    component: Tbc_reportPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_report.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-report/:id/edit',
    component: Tbc_reportPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_report.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-report/:id/delete',
    component: Tbc_reportDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_report.home.title'
    },
    outlet: 'popup'
  }
];
