import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_formularioComponent } from './tbc-formulario.component';
import { Tbc_formularioDetailComponent } from './tbc-formulario-detail.component';
import { Tbc_formularioPopupComponent } from './tbc-formulario-dialog.component';
import { Tbc_formularioDeletePopupComponent } from './tbc-formulario-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_formularioResolvePagingParams implements Resolve<any> {

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

export const tbc_formularioRoute: Routes = [
  {
    path: 'tbc-formulario',
    component: Tbc_formularioComponent,
    resolve: {
      'pagingParams': Tbc_formularioResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_formulario.home.title'
    }
  }, {
    path: 'tbc-formulario/:id',
    component: Tbc_formularioDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_formulario.home.title'
    }
  }
];

export const tbc_formularioPopupRoute: Routes = [
  {
    path: 'tbc-formulario-new',
    component: Tbc_formularioPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_formulario.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-formulario/:id/edit',
    component: Tbc_formularioPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_formulario.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-formulario/:id/delete',
    component: Tbc_formularioDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_formulario.home.title'
    },
    outlet: 'popup'
  }
];
