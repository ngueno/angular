import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    getServerStatus() {
      return this.serverStatus;
    }

  // serverId: number = 10;
  // serverStatus: string = 'offline';
}
