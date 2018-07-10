import { Component } from '@angular/core';

@Component({ // js object here
    selector: 'app-server', // should be unique
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `] // class name: online
})
export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'aqua' : 'lightpink';
    }
}