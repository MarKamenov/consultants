import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ConsultantsState } from './state/consultant.state';
import { NgxsModuleOptions, NoopNgxsExecutionStrategy, provideStore } from '@ngxs/store';

const ngxsConfig: NgxsModuleOptions = {
  developmentMode: true,
  selectorOptions: {
    suppressErrors: false
  },
  compatibility: {
    strictContentSecurityPolicy: true
  },
  // Execution strategy overridden for illustrative purposes
  // (only do this if you know what you are doing)
  executionStrategy: NoopNgxsExecutionStrategy
};
@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideHttpClient(withFetch()), provideStore([ConsultantsState], ngxsConfig)]
})
export class AppModule { }
