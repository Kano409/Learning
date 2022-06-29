import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'Offline';
  public serverName: string = '';
  allowServer = false;
  serverAvailable = 'No server available';
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  buttonPress() {
    this.serverAvailable = 'Server available';
    console.log(this.serverAvailable);
  }

  twoWay(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
  ngOnInit(): void {}
}
