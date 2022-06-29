import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  //newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  public onAddServer(serverInput: HTMLInputElement) {
    //console.log(serverInput.value);
    this.serverCreated.emit({
      name: serverInput.value,
      content: this.newServerContent,
    });
  }

  public onAddBlueprint(serverInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverInput.value,
      content: this.newServerContent,
    });
  }
}
