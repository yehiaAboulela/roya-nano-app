import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';
import { Meta, Title } from '@angular/platform-browser';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [provideServerRouting(serverRoutes), Meta, Title],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
