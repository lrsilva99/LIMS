import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_frasesComponent } from './tbc-frases.component';
import { Tbc_frasesDetailComponent } from './tbc-frases-detail.component';
import { Tbc_frasesPopupComponent } from './tbc-frases-dialog.component';
import { Tbc_frasesDeletePopupComponent } from './tbc-frases-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_frasesResolvePagingParams implements Resolve<any> {

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

export const tbc_frasesRoute: Routes = [
  {
    path: 'tbc-frases',
    component: Tbc_frasesComponent,
    resolve: {
      'pagingParams': Tbc_frasesResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_frases.home.title'
    }
  }, {
    path: 'tbc-frases/:id',
    component: Tbc_frasesDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_frases.home.title'
    }
  }
];

export const tbc_frasesPopupRoute: Routes = [
  {
    path: 'tbc-frases-new',
    component: Tbc_frasesPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_frases.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-frases/:id/edit',
    component: Tbc_frasesPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_frases.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-frases/:id/delete',
    component: Tbc_frasesDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_frases.home.title'
    },
    outlet: 'popup'
  }
];
