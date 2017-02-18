import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_lab_tercerizadoComponent } from './tbc-lab-tercerizado.component';
import { Tbc_lab_tercerizadoDetailComponent } from './tbc-lab-tercerizado-detail.component';
import { Tbc_lab_tercerizadoPopupComponent } from './tbc-lab-tercerizado-dialog.component';
import { Tbc_lab_tercerizadoDeletePopupComponent } from './tbc-lab-tercerizado-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_lab_tercerizadoResolvePagingParams implements Resolve<any> {

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

export const tbc_lab_tercerizadoRoute: Routes = [
  {
    path: 'tbc-lab-tercerizado',
    component: Tbc_lab_tercerizadoComponent,
    resolve: {
      'pagingParams': Tbc_lab_tercerizadoResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_lab_tercerizado.home.title'
    }
  }, {
    path: 'tbc-lab-tercerizado/:id',
    component: Tbc_lab_tercerizadoDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_lab_tercerizado.home.title'
    }
  }
];

export const tbc_lab_tercerizadoPopupRoute: Routes = [
  {
    path: 'tbc-lab-tercerizado-new',
    component: Tbc_lab_tercerizadoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_lab_tercerizado.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-lab-tercerizado/:id/edit',
    component: Tbc_lab_tercerizadoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_lab_tercerizado.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-lab-tercerizado/:id/delete',
    component: Tbc_lab_tercerizadoDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_lab_tercerizado.home.title'
    },
    outlet: 'popup'
  }
];
