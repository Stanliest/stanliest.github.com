import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TwoWayBinding';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000); // 2000 ms = 2 s
  }

  ngOnInit() {
  }

  onCreateServer() { // update server creation status for click event
    this.serverCreationStatus =  this.serverName + " server was created!";
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  // update the input text and display using the type event, using one way event   binding
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
