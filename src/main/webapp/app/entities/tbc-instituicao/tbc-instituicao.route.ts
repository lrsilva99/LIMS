import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_instituicaoComponent } from './tbc-instituicao.component';
import { Tbc_instituicaoDetailComponent } from './tbc-instituicao-detail.component';
import { Tbc_instituicaoPopupComponent } from './tbc-instituicao-dialog.component';
import { Tbc_instituicaoDeletePopupComponent } from './tbc-instituicao-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_instituicaoResolvePagingParams implements Resolve<any> {

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

export const tbc_instituicaoRoute: Routes = [
  {
    path: 'tbc-instituicao',
    component: Tbc_instituicaoComponent,
    resolve: {
      'pagingParams': Tbc_instituicaoResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_instituicao.home.title'
    }
  }, {
    path: 'tbc-instituicao/:id',
    component: Tbc_instituicaoDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_instituicao.home.title'
    }
  }
];

export const tbc_instituicaoPopupRoute: Routes = [
  {
    path: 'tbc-instituicao-new',
    component: Tbc_instituicaoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_instituicao.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-instituicao/:id/edit',
    component: Tbc_instituicaoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_instituicao.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-instituicao/:id/delete',
    component: Tbc_instituicaoDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_instituicao.home.title'
    },
    outlet: 'popup'
  }
];
