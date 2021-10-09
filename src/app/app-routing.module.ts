import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlankPageComponent} from './pages/blank-page/blank-page.component';
import {CardsComponent} from './pages/cards/cards.component';
import {CarouselComponent} from './pages/carousel/carousel.component';
import {ChartsComponent} from './pages/charts/charts.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SigninComponent} from './pages/signin/signin.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'charts', component: ChartsComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'carousel', component: CarouselComponent},
    {path: 'blank-page', component: BlankPageComponent},
    {path: 'cards', component: CardsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
