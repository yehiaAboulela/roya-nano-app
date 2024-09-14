import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ProductsComponent } from './components/home/products/products.component';
import { AboutSecComponent } from './components/home/about-sec/about-sec.component';
import { SolutionsSecComponent } from './components/home/solutions-sec/solutions-sec.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationSecComponent } from './components/home/location-sec/location-sec.component';
import { CarouselSecComponent } from './components/home/carousel-sec/carousel-sec.component';
import { HomeOutroSecComponent } from './components/home/home-outro-sec/home-outro-sec.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    HeaderComponent,
    ProductsComponent,
    AboutSecComponent,
    SolutionsSecComponent,
    LocationSecComponent,
    CarouselSecComponent,
    HomeOutroSecComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
