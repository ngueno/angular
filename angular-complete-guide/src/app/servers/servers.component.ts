import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .attentionLog {
      color: white;
      background-color: blue;
    }
  `]
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  username = '';
  showDetails = false;
  clicks = [];
  clickCounter = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  resetUsername() {
    this.username = '';
  }

  onDisplayDetails() {
    this.clicks.push(++this.clickCounter);
  }

}
