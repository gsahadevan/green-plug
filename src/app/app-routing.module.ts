import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent, OffcanvasComponent, PlaceholdersComponent, WizardComponent } from './pages/components';
import { AnalyticsComponent, DefaultComponent, ECommComponent } from './pages/dashboards';
import {
	BlankPageComponent,
	CarouselComponent,
	ChartsComponent,
	DashboardComponent,
	SigninComponent,
	TasksComponent
} from './pages/interfaces';
import { GoogleMapsComponent, VectorMapsComponent } from './pages/maps';

const routes: Routes = [
	{ path: '', redirectTo: '/default', pathMatch: 'full' },
	{ path: 'default', component: DefaultComponent },
	{ path: 'analytics', component: AnalyticsComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'charts', component: ChartsComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'carousel', component: CarouselComponent },
	{ path: 'blank-page', component: BlankPageComponent },
	{ path: 'tasks', component: TasksComponent },
	{ path: 'cards', component: CardsComponent },
	{ path: 'offcanvas', component: OffcanvasComponent },
	{ path: 'placeholders', component: PlaceholdersComponent },
	{ path: 'wizard', component: WizardComponent },
	{ path: 'dashboard-e-comm', component: ECommComponent },
	{ path: 'google-maps', component: GoogleMapsComponent },
	{ path: 'vector-maps', component: VectorMapsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
