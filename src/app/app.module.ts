import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, SidebarComponent } from './layouts';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { SigninComponent } from './pages/signin/signin.component';
import { CarouselComponent } from './pages/carousel/carousel.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        DashboardComponent,
        ChartsComponent,
        SigninComponent,
        CarouselComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        BrowserAnimationsModule,
        CollapseModule.forRoot(),
        ToastrModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
