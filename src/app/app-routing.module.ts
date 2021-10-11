import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ECommComponent } from './pages/dashboards/e-commerce/e-comm.component';
import { OffcanvasComponent } from './pages/offcanvas/offcanvas.component';
import { SigninComponent } from './pages/signin/signin.component';
import { WizardComponent } from './pages/wizard/wizard.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'charts', component: ChartsComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: 'carousel', component: CarouselComponent },
	{ path: 'blank-page', component: BlankPageComponent },
	{ path: 'cards', component: CardsComponent },
	{ path: 'offcanvas', component: OffcanvasComponent },
	{ path: 'wizard', component: WizardComponent },
	{ path: 'dashboard-e-comm', component: ECommComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
