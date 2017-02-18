import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { Tbc_frases_opcoesComponent } from './tbc-frases-opcoes.component';
import { Tbc_frases_opcoesDetailComponent } from './tbc-frases-opcoes-detail.component';
import { Tbc_frases_opcoesPopupComponent } from './tbc-frases-opcoes-dialog.component';
import { Tbc_frases_opcoesDeletePopupComponent } from './tbc-frases-opcoes-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class Tbc_frases_opcoesResolvePagingParams implements Resolve<any> {

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

export const tbc_frases_opcoesRoute: Routes = [
  {
    path: 'tbc-frases-opcoes',
    component: Tbc_frases_opcoesComponent,
    resolve: {
      'pagingParams': Tbc_frases_opcoesResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_frases_opcoes.home.title'
    }
  }, {
    path: 'tbc-frases-opcoes/:id',
    component: Tbc_frases_opcoesDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_frases_opcoes.home.title'
    }
  }
];

export const tbc_frases_opcoesPopupRoute: Routes = [
  {
    path: 'tbc-frases-opcoes-new',
    component: Tbc_frases_opcoesPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_frases_opcoes.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-frases-opcoes/:id/edit',
    component: Tbc_frases_opcoesPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_frases_opcoes.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'tbc-frases-opcoes/:id/delete',
    component: Tbc_frases_opcoesDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'limsApp.tbc_frases_opcoes.home.title'
    },
    outlet: 'popup'
  }
];
