import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LimsTbc_clienteModule } from './tbc-cliente/tbc-cliente.module';
import { LimsTbc_instituicaoModule } from './tbc-instituicao/tbc-instituicao.module';
import { LimsTbc_sub_grupoModule } from './tbc-sub-grupo/tbc-sub-grupo.module';
import { LimsTbc_grupo_analiseModule } from './tbc-grupo-analise/tbc-grupo-analise.module';
import { LimsTbc_frasesModule } from './tbc-frases/tbc-frases.module';
import { LimsTbc_frases_opcoesModule } from './tbc-frases-opcoes/tbc-frases-opcoes.module';
import { LimsTbc_formularioModule } from './tbc-formulario/tbc-formulario.module';
import { LimsTbc_tipo_cadastroModule } from './tbc-tipo-cadastro/tbc-tipo-cadastro.module';
import { LimsTbc_relatorio_ensaioModule } from './tbc-relatorio-ensaio/tbc-relatorio-ensaio.module';
import { LimsTbc_analisesModule } from './tbc-analises/tbc-analises.module';
import { LimsTbc_lab_tercerizadoModule } from './tbc-lab-tercerizado/tbc-lab-tercerizado.module';
import { LimsTbc_reportModule } from './tbc-report/tbc-report.module';
import { LimsTbc_tipo_campoModule } from './tbc-tipo-campo/tbc-tipo-campo.module';
import { LimsTbc_analises_componenteModule } from './tbc-analises-componente/tbc-analises-componente.module';
import { LimsTbc_grupo_clienteModule } from './tbc-grupo-cliente/tbc-grupo-cliente.module';
import { LimsTbc_plano_testeModule } from './tbc-plano-teste/tbc-plano-teste.module';
import { LimsTbc_plano_teste_analiseModule } from './tbc-plano-teste-analise/tbc-plano-teste-analise.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        LimsTbc_clienteModule,
        LimsTbc_instituicaoModule,
        LimsTbc_sub_grupoModule,
        LimsTbc_grupo_analiseModule,
        LimsTbc_frasesModule,
        LimsTbc_frases_opcoesModule,
        LimsTbc_formularioModule,
        LimsTbc_tipo_cadastroModule,
        LimsTbc_relatorio_ensaioModule,
        LimsTbc_analisesModule,
        LimsTbc_lab_tercerizadoModule,
        LimsTbc_reportModule,
        LimsTbc_tipo_campoModule,
        LimsTbc_analises_componenteModule,
        LimsTbc_grupo_clienteModule,
        LimsTbc_plano_testeModule,
        LimsTbc_plano_teste_analiseModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LimsEntityModule {}
