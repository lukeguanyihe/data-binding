import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //app component
  // onServerAdded(serverData: {serverName: string, serverContent: string})
  // () call the constructor of event Emitter
  //output: make event listenable. make event out of component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    //emit a new event of <> type
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent:this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent:this.newServerContent
    });
  }

}
