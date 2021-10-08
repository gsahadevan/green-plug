import { Component } from '@angular/core';
import { SidebarService } from './layouts/sidebar/sidebar.service';
import { AppService } from './services/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'green-plug';
    constructor(
        private appService: AppService,
        public sidebarservice: SidebarService
    ) {}

    getClasses() {
        const classes = {
            'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
            'toggeled-sidebar':
                this.appService.getSidebarStat().isSidebarToggeled,
        };
        return classes;
    }

    toggleSidebar() {
        this.appService.toggleSidebar();
        this.sidebarservice.setSidebarState(
            !this.sidebarservice.getSidebarState()
        );
    }

    toggleBackgroundImage() {
        this.sidebarservice.hasBackgroundImage =
            !this.sidebarservice.hasBackgroundImage;
    }

    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }
}
