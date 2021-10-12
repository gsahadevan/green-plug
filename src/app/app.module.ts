import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, SidebarComponent } from './layouts';
import { CardsComponent, OffcanvasComponent, PlaceholdersComponent, WizardComponent } from './pages/components';
import {
	BlankPageComponent,
	CarouselComponent,
	ChartsComponent,
	DashboardComponent,
	SigninComponent
} from './pages/interfaces';
import { AnalyticsComponent, DefaultComponent, ECommComponent } from './pages/dashboards';
import { GoogleMapsComponent, VectorMapsComponent } from './pages/maps';

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
		BlankPageComponent,
		AnalyticsComponent,
		DefaultComponent,
		ECommComponent,
		CardsComponent,
		OffcanvasComponent,
		PlaceholdersComponent,
		WizardComponent,
		GoogleMapsComponent,
		VectorMapsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CommonModule,
		BrowserAnimationsModule,
		CollapseModule.forRoot(),
		ToastrModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
