import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';

import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    LancamentosModule,
    PessoasModule,
    CoreModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
