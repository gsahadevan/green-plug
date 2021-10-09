import {AppService} from './../../services/app.service';
import {Component} from '@angular/core';
import {SidebarService} from '../sidebar/sidebar.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private appService: AppService, public sidebarservice: SidebarService) {}

    getClasses() {
        const classes = {
            'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
            'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
        };
        return classes;
    }

    toggleSidebar() {
        this.appService.toggleSidebar();
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }

    toggleBackgroundImage() {
        this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
    }

    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }
}
