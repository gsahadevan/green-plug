import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {SidebarService} from './sidebar.service';
import {AppService} from 'src/app/services/app.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    animations: [
        trigger('slide', [
            state('up', style({height: 0})),
            state('down', style({height: '*'})),
            transition('up <=> down', animate(200))
        ])
    ]
})
export class SidebarComponent implements OnInit {
    menus = [] as any;
    constructor(private appService: AppService, public sidebarservice: SidebarService) {
        this.menus = sidebarservice.getMenuList();
    }

    ngOnInit() {}

    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    toggle(currentMenu: any) {
        if (currentMenu.type === 'dropdown') {
            this.menus.forEach((element: any) => {
                if (element === currentMenu) {
                    currentMenu.active = !currentMenu.active;
                } else {
                    element.active = false;
                }
            });
        }
    }

    getState(currentMenu: any) {
        if (currentMenu.active) {
            return 'down';
        } else {
            return 'up';
        }
    }

    hasBackgroundImage() {
        return this.sidebarservice.hasBackgroundImage;
    }

    toggleSidebar() {
        this.appService.toggleSidebar();
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());

        const sidebar = <HTMLDivElement>document.getElementById('page-wrapper');
        sidebar.classList.toggle('toggled');
    }
}
